import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import type { Program, Center, JourneyStep, TrustPrinciple, CompareRow } from "@/types/healthstay";
import { mapProgramRow, mapCenterRow, mapJourneyStepRow, mapTrustPrincipleRow, mapCompareRowRow } from "./mappers";

// Static fallback data
import { programs as staticPrograms, getProgramBySlug as staticGetProgramBySlug } from "@/data/programs";
import { centers as staticCenters } from "@/data/centers";
import { journeySteps as staticJourneySteps } from "@/data/journeySteps";
import { trustPrinciples as staticTrustPrinciples } from "@/data/trustPrinciples";
import { compareRows as staticCompareRows } from "@/data/compareRows";

function logError(context: string, err: unknown) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[HealthStay Repository] ${context}:`, (err as Error)?.message || err);
  }
}

export async function getPrograms(): Promise<Program[]> {
  if (!isSupabaseConfigured()) {
    return staticPrograms;
  }

  try {
    const { data, error } = await supabase!
      .from("programs")
      .select(`
        slug, title, short_description, long_description,
        duration_label, location_label, price_label,
        ideal_for, includes, not_included,
        accommodation_support, coordinator_support, post_stay_support,
        human_validation_required, cta_label,
        category:category_id(slug,name)
      `)
      .eq("status", "published")
      .order("display_order");

    if (error) throw error;

    if (!data || data.length === 0) return staticPrograms;

    return data.map((row: Record<string, unknown>) => {
      const cat = row.category as { slug: string; name: string } | null;
      return mapProgramRow({
        slug: row.slug as string,
        title: row.title as string,
        category_slug: cat?.slug || "",
        category_name: cat?.name || "",
        short_description: row.short_description as string,
        long_description: row.long_description as string,
        duration_label: row.duration_label as string,
        location_label: row.location_label as string,
        price_label: row.price_label as string,
        ideal_for: (row.ideal_for as string[]) || [],
        includes: (row.includes as string[]) || [],
        not_included: (row.not_included as string[]) || [],
        accommodation_support: row.accommodation_support as boolean,
        coordinator_support: row.coordinator_support as boolean,
        post_stay_support: row.post_stay_support as boolean,
        human_validation_required: row.human_validation_required as boolean,
        cta_label: row.cta_label as string,
      });
    });
  } catch (err) {
    logError("getPrograms", err);
    return staticPrograms;
  }
}

export async function getProgramBySlug(slug: string): Promise<Program | undefined> {
  if (!isSupabaseConfigured()) {
    return staticGetProgramBySlug(slug);
  }

  try {
    const programs = await getPrograms();
    return programs.find((p) => p.slug === slug);
  } catch (err) {
    logError("getProgramBySlug", err);
    return staticGetProgramBySlug(slug);
  }
}

export async function getCenters(): Promise<Center[]> {
  if (!isSupabaseConfigured()) {
    return staticCenters;
  }

  try {
    const { data, error } = await supabase!
      .from("centers")
      .select("*")
      .eq("status", "published")
      .order("display_order");

    if (error) throw error;

    if (!data || data.length === 0) return staticCenters;

    return data.map((row: Record<string, unknown>) => mapCenterRow(row));
  } catch (err) {
    logError("getCenters", err);
    return staticCenters;
  }
}

export async function getJourneySteps(): Promise<JourneyStep[]> {
  if (!isSupabaseConfigured()) {
    return staticJourneySteps;
  }

  try {
    const { data, error } = await supabase!
      .from("journey_steps")
      .select("*")
      .eq("status", "published")
      .order("step_number");

    if (error) throw error;

    if (!data || data.length === 0) return staticJourneySteps;

    return data.map((row: Record<string, unknown>) => mapJourneyStepRow(row));
  } catch (err) {
    logError("getJourneySteps", err);
    return staticJourneySteps;
  }
}

export async function getTrustPrinciples(): Promise<TrustPrinciple[]> {
  if (!isSupabaseConfigured()) {
    return staticTrustPrinciples;
  }

  try {
    const { data, error } = await supabase!
      .from("trust_principles")
      .select("*")
      .eq("status", "published")
      .order("display_order");

    if (error) throw error;

    if (!data || data.length === 0) return staticTrustPrinciples;

    return data.map((row: Record<string, unknown>) => mapTrustPrincipleRow(row));
  } catch (err) {
    logError("getTrustPrinciples", err);
    return staticTrustPrinciples;
  }
}

export async function getCompareRows(): Promise<CompareRow[]> {
  if (!isSupabaseConfigured()) {
    return staticCompareRows;
  }

  try {
    const { data, error } = await supabase!
      .from("compare_rows")
      .select("*")
      .eq("status", "published")
      .order("display_order");

    if (error) throw error;

    if (!data || data.length === 0) return staticCompareRows;

    return data.map((row: Record<string, unknown>) => mapCompareRowRow(row));
  } catch (err) {
    logError("getCompareRows", err);
    return staticCompareRows;
  }
}
