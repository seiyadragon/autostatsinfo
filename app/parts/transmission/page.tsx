import LinkSelector, { LinkSelectorLinkData } from "@/components/link-selector-link";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import HeroLite from "@/components/hero-lite";
import PagedLinkSelector from "@/components/paged-link-selector";
import { eqDataLoading } from "@/utils/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const pageName = "Transmissions";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: `${pageName} - ASI: Know your ride`,
  description: "Learn about all the different types of transmissions in your car or bike, what they do, and how they work.",
  keywords: "transmissions, manual, automatic, cvt, dsg, dual clutch, cars, motorcycles, trucks, vehicles",
};

const TransmissionsPage = async (props: any) => {
    const parts = await eqDataLoading("CarParts", ["type", "transmission"]);
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
        <HeroLite title="CHECK OUT THE TOP" subtitle="TRANSMISSIONS"/>
        <PagedLinkSelector links={partLinks} pageSize={8} />
    </>
  );
}

export default TransmissionsPage