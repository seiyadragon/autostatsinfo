import LinkSelector, { LinkSelectorLink } from "@/components/link-selector";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import Image from 'next/image';
import HeroLite from "@/components/hero-lite";
import { useState } from "react";
import PagedLinkSelector from "@/components/paged-link-selector";

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
    const supabase = createClient();
    const { data, error } = await supabase.from("CarBrands").select();

    if (error) {
        console.error("Error fetching brands", error);
    }

    const brands = data || [];
    const brandLinks: LinkSelectorLink[] = [];

    brands.forEach((brand: any) => {
        brandLinks.push({
            label: brand.title.toUpperCase(),
            image_url: brand.image_url,
            href: `/brands/${brand.title.toLowerCase().replace(" ", "-")}`,
        });
    });

  return (
    <div>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </Head>
        <HeroLite title="CHECK OUT THE TOP" subtitle="BRANDS"/>
        <PagedLinkSelector links={brandLinks} pageSize={8} />
    </div>
  );
}

export default BrandsPage