/**
 * SUPABASE CLIENT CONFIGURATION
 * 
 * Setup Instructions:
 * 1. Go to your Supabase project dashboard
 * 2. Navigate to Settings > API
 * 3. Copy your Project URL and anon/public key
 * 4. Create a .env.local file in your project root with:
 *    VITE_SUPABASE_URL=your-project-url
 *    VITE_SUPABASE_ANON_KEY=your-anon-key
 */

import { createClient } from '@supabase/supabase-js';

// Safely access environment variables with fallbacks
const supabaseUrl = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL 
  ? import.meta.env.VITE_SUPABASE_URL 
  : '';
  
const supabaseAnonKey = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY
  ? import.meta.env.VITE_SUPABASE_ANON_KEY
  : '';

// Check if credentials are configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.info(
    '🔔 Supabase not configured - using mock data.\n' +
    'To enable real backend:\n' +
    '1. Create a .env.local file\n' +
    '2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY\n' +
    '3. See QUICK_START.md for instructions'
  );
}

// Create client with fallback dummy values if not configured
// This prevents runtime errors while allowing the app to work with mock data
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);

// Database Types
export interface Event {
  id: string;
  name: string;
  type: string;
  city: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  detailed_description: string;
  agenda: string[];
  speakers: { name: string; role: string }[];
  level: string;
  is_flagship: boolean;
  color: string;
  tags: string[];
  image_url?: string;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

export interface Donation {
  id: string;
  amount: number;
  donor_name?: string;
  donor_email: string;
  is_anonymous: boolean;
  source: 'hero' | 'header' | 'final';
  stripe_payment_intent_id?: string;
  stripe_session_id?: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface RSVP {
  id: string;
  event_id: string;
  name: string;
  email: string;
  organization?: string;
  created_at: string;
}