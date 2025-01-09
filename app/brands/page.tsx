import LinkSelector, { LinkSelectorLinkData } from "@/components/link-selector-link";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import HeroLite from "@/components/hero-lite";
import PagedLinkSelector from "@/components/paged-link-selector";
import { fullDataLoading } from "@/utils/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const pageName = "Brands";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: `${pageName} - ASI: Know your ride`,
  description: "Learn about the most popular car brands, their history, what they specialize in, and more.",
  keywords: "cars, motorcycles, trucks, parts, brands, vehicles",
};

const BrandsPage = async (props: any) => {
    const brands = await fullDataLoading("CarBrands");
    const brandLinks: LinkSelectorLinkData[] = [];

    brands.forEach((brand: any) => {
        brandLinks.push({
            label: brand.title.toUpperCase(),
            image_url: brand.image_url,
            href: `/brands/${brand.slug}`,
        });
    });

  return (
    <>
        <HeroLite title="CHECK OUT THE TOP" subtitle="BRANDS"/>
        <PagedLinkSelector links={brandLinks} pageSize={8} />
    </>
  );
}

export default BrandsPage