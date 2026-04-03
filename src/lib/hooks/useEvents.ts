/**
 * CUSTOM HOOKS FOR EVENTS
 * React hooks for fetching and managing events from Supabase
 */

import { useState, useEffect } from 'react';
import { supabase, Event, isSupabaseConfigured } from '../supabase';

/**
 * Hook to fetch all published events
 */
export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Skip if Supabase is not configured
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    fetchEvents();

    // Subscribe to real-time changes only if configured
    const subscription = supabase
      .channel('events-channel')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'events' }, 
        () => {
          fetchEvents();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function fetchEvents() {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: true });

      if (error) throw error;

      setEvents(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
      // Set empty array on error so fallback data can be used
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }

  return { events, loading, error, refetch: fetchEvents };
}

/**
 * Hook to fetch a single event by ID
 */
export function useEvent(eventId: string) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!eventId || !isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    async function fetchEvent() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('id', eventId)
          .single();

        if (error) throw error;

        setEvent(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch event');
      } finally {
        setLoading(false);
      }
    }

    fetchEvent();
  }, [eventId]);

  return { event, loading, error };
}

/**
 * Hook to submit RSVP
 */
export function useRSVP() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submitRSVP(eventId: string, name: string, email: string, organization?: string) {
    if (!isSupabaseConfigured) {
      console.info('🔔 Supabase not configured - RSVP would be saved here in production');
      // Simulate success in demo mode
      return { success: true, data: null };
    }

    try {
      setSubmitting(true);
      setError(null);

      const { data, error } = await supabase
        .from('rsvps')
        .insert([
          {
            event_id: eventId,
            name,
            email,
            organization: organization || null,
          }
        ])
        .select();

      if (error) {
        // Check for unique constraint violation
        if (error.code === '23505') {
          throw new Error('You have already RSVP\'d to this event');
        }
        throw error;
      }

      return { success: true, data };
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      const message = err instanceof Error ? err.message : 'Failed to submit RSVP';
      setError(message);
      return { success: false, error: message };
    } finally {
      setSubmitting(false);
    }
  }

  return { submitRSVP, submitting, error };
}