import Hero from "@/components/hero";
import HeroLite from "@/components/hero-lite";
import { LinkSelectorLinkData } from "@/components/link-selector-link";
import PagedLinkSelector from "@/components/paged-link-selector";
import { fullDataLoading } from "@/utils/utils";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const pageName = "Home";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: `${pageName} - ASI: Know your ride`,
  description: "The best way to know your ride",
  keywords: "cars, motorcycles, trucks, parts, brands, vehicles",
};

export default async function Index() {
  const brands = await fullDataLoading("CarBrands");
  const brandLinks: LinkSelectorLinkData[] = [];
  
  brands.forEach((brand: any) => {
    brandLinks.push({
      label: brand.title.toUpperCase(),
      image_url: brand.image_url,
      href: `/brands/${brand.slug}`,
    });
  });

  const parts = await fullDataLoading("CarParts");
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
      <Hero/>
      <HeroLite title="" subtitle="BRANDS"/>
      <PagedLinkSelector links={brandLinks} pageSize={4} />
      <HeroLite title="" subtitle="PARTS"/>
      <PagedLinkSelector links={partLinks} pageSize={4} />
    </>
  );
}
