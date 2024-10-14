import FallBackImage from "@/components/fallback-image";
import HeroLite from "@/components/hero-lite";
import { createClient } from "@/utils/supabase/server";
import Head from "next/head";
import { headers } from "next/headers";
import Image from "next/image";

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const BrandPage = async () => {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");

    let currentPath = pathname?.split("/").pop();

    const supabase = createClient();
    const { data, error } = await supabase.from("CarBrands").select().eq("slug", currentPath);

    if (error) {
        console.error("Error fetching brands", error);
    }

    const brands = data || [];
    const brand = brands[0];

    const title: string = brand.title;
    const image_url: string = brand.image_url;
    const brand_data = brand.brand_data;

    const meta_description = brand_data.meta_description;
    const meta_keywords = brand_data.meta_keywords;

    return (
        <div>
            <Head>
                <title>{title} - ASI: Know your ride</title>
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
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