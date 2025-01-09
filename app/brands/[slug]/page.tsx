import FallBackImage from "@/components/fallback-image";
import HeroLite from "@/components/hero-lite";
import { eqDataLoading, getPageSlug } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import { headers } from "next/headers";

export async function generateMetadata() {
    const currentPath = getPageSlug();

    const brands = await eqDataLoading("CarBrands", ["slug", currentPath]);
    const brand = brands[0];

    const brand_data = brand.brand_data;

    return {
        title: `${brand.title} - ASI: Know your ride`,
        description: brand_data.meta_description,
        keywords: brand_data.meta_keywords,
    }
  }

const BrandPage = async () => {
    const currentPath = getPageSlug();

    const brands = await eqDataLoading("CarBrands", ["slug", currentPath]);
    const brand = brands[0];

    const image_url: string = brand.image_url;
    const brand_data = brand.brand_data;

    const title = `${brand.title}`;

    return (
        <div>
            <HeroLite title="Everything there is to know about" subtitle={title} />
            <FallBackImage 
                src={image_url} 
                alt={title} 
                width={540} 
                height={540}  
                className="w-full h-[540px] object-cover object-center z-0"
                fallbackSrc="/images/placeholder_image.png"
            />
            {brand_data.map((paragraph: any) => {
                return (
                    <div key={paragraph.title} className="pt-16">
                        <h2 className="text-2xl w-full text-center underline">{paragraph.title}</h2>
                        <p className="pt-4">{paragraph.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BrandPage