/**
 * HERO CONTENT HOOKS
 * Provides a simple interface for fetching and updating the hero section copy.
 */

import { useCallback, useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "../supabase";

export interface HeroContentRecord {
  id?: string;
  title_line_one: string;
  title_line_two: string;
  description: string;
  highlight: string;
  quote: string;
  updated_at?: string;
}

export interface HeroContentInput {
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  highlight: string;
  quote: string;
}

export const FALLBACK_HERO_CONTENT: HeroContentRecord = {
  title_line_one: "AI should work for people,",
  title_line_two: "not the other way around",
  description:
    "Human Collective helps more people learn, participate, and shape what comes next — so the future of AI is guided with dignity, care, and shared opportunity.",
  highlight: "learn, participate, and shape what comes next",
  quote:
    "We have always built tools to help us adapt, create, and move forward. AI is part of that human story. What matters now is making sure it serves people with dignity, care, and shared opportunity.",
};

export function useHeroContent() {
  const [content, setContent] = useState<HeroContentRecord>(FALLBACK_HERO_CONTENT);
  const [loading, setLoading] = useState<boolean>(isSupabaseConfigured);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setContent(FALLBACK_HERO_CONTENT);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from<HeroContentRecord>("hero_content")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      if (data) {
        setContent({ ...FALLBACK_HERO_CONTENT, ...data });
        console.log("✅ Hero content loaded from DB:", data);
      } else {
        setContent(FALLBACK_HERO_CONTENT);
        console.log("📝 Using fallback hero content");
      }

      setError(null);
    } catch (err) {
      console.error("Failed to fetch hero content", err);
      setContent(FALLBACK_HERO_CONTENT);
      setError(err instanceof Error ? err.message : "Failed to fetch hero content");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return {
    content,
    loading,
    error,
    refresh: fetchContent,
    supabaseConfigured: isSupabaseConfigured,
  };
}

export async function upsertHeroContent(payload: HeroContentInput) {
  if (!isSupabaseConfigured) {
    return { data: null, error: new Error("Supabase is not configured.") };
  }

  const dbPayload = {
    title_line_one: payload.titleLineOne.trim(),
    title_line_two: payload.titleLineTwo.trim(),
    description: payload.description.trim(),
    highlight: payload.highlight.trim(),
    quote: payload.quote.trim(),
    updated_at: new Date().toISOString(),
  };

  return supabase.from("hero_content").insert([dbPayload]).select().maybeSingle();
}
