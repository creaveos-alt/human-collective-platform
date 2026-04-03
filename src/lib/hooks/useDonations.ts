/**
 * CUSTOM HOOKS FOR DONATIONS
 * React hooks for handling donations with Stripe + Supabase
 */

import { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../supabase';

/**
 * Hook to create a Stripe checkout session and track donation
 * 
 * IMPORTANT: For production, you need to:
 * 1. Set up Stripe account
 * 2. Create Stripe Checkout session on your backend
 * 3. Return the session URL to redirect user to Stripe
 */
export function useDonation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Create donation record and initiate Stripe payment
   */
  async function createDonation({
    amount,
    email,
    name,
    isAnonymous,
    source,
  }: {
    amount: number;
    email: string;
    name?: string;
    isAnonymous: boolean;
    source: 'hero' | 'header' | 'final';
  }) {
    if (!isSupabaseConfigured) {
      console.info('🔔 Supabase not configured - Donation would be saved here in production');
      // Simulate success in demo mode
      return { success: true, donation: null };
    }

    try {
      setLoading(true);
      setError(null);

      // Create donation record in Supabase
      const { data: donation, error: dbError } = await supabase
        .from('donations')
        .insert([
          {
            amount,
            donor_email: email,
            donor_name: isAnonymous ? null : name,
            is_anonymous: isAnonymous,
            source,
            status: 'pending',
          }
        ])
        .select()
        .single();

      if (dbError) throw dbError;

      // TODO: In production, call your backend API to create Stripe session
      // Example:
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     amount,
      //     email,
      //     donationId: donation.id,
      //   })
      // });
      // const { sessionUrl } = await response.json();
      // window.location.href = sessionUrl;

      // For now, just return success (mock payment)
      // In production, you'd redirect to Stripe checkout
      return { success: true, donation };

    } catch (err) {
      console.error('Error creating donation:', err);
      const message = err instanceof Error ? err.message : 'Failed to process donation';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  }

  /**
   * Update donation status (called after Stripe webhook confirms payment)
   */
  async function updateDonationStatus(
    donationId: string, 
    status: 'completed' | 'failed',
    stripePaymentIntentId?: string
  ) {
    if (!isSupabaseConfigured) {
      return { success: true };
    }

    try {
      const { error } = await supabase
        .from('donations')
        .update({
          status,
          stripe_payment_intent_id: stripePaymentIntentId,
        })
        .eq('id', donationId);

      if (error) throw error;

      return { success: true };
    } catch (err) {
      console.error('Error updating donation:', err);
      return { success: false, error: err };
    }
  }

  return { createDonation, updateDonationStatus, loading, error };
}

/**
 * Hook to fetch donation statistics (for admin dashboard)
 */
export function useDonationStats() {
  const [stats, setStats] = useState<{
    totalDonations: number;
    totalAmount: number;
    averageDonation: number;
    completedDonations: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchStats() {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('donation_stats')
        .select('*')
        .single();

      if (error) throw error;

      setStats({
        totalDonations: data.total_donations || 0,
        totalAmount: data.total_amount || 0,
        averageDonation: data.average_donation || 0,
        completedDonations: data.completed_donations || 0,
      });
    } catch (err) {
      console.error('Error fetching donation stats:', err);
    } finally {
      setLoading(false);
    }
  }

  return { stats, loading, fetchStats };
}