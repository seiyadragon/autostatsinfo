import LinkSelector, { LinkSelectorLinkData } from "@/components/link-selector-link";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import HeroLite from "@/components/hero-lite";
import PagedLinkSelector from "@/components/paged-link-selector";
import { eqDataLoading } from "@/utils/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const pageName = "Suspensions";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: `${pageName} - ASI: Know your ride`,
  description: "Learn about all the different types of suspensions in your car or bike, what they do, and how they work.",
  keywords: "suspensions, coilover, air, leaf spring, torsion bar, macpherson strut, double wishbone, cars, motorcycles, trucks, vehicles",
};

const SuspensionsPage = async (props: any) => {
    const parts = await eqDataLoading("CarParts", ["type", "suspension"]);
    const partLinks: LinkSelectorLinkData[] = [];

    parts.forEach((part: any) => {
        partLinks.push({
            label: part.title.toUpperCase(),
            image_url: part.image_url,
            href: `/parts/${part.type}/${part.slug}`,
        });
    });

  return (
    <>
        <HeroLite title="CHECK OUT THE TOP" subtitle="SUSPENSIONS"/>
        <PagedLinkSelector links={partLinks} pageSize={8} />
    </>
  );
}

export default SuspensionsPage