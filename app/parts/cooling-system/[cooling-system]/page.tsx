import FallBackImage from "@/components/fallback-image";
import HeroLite from "@/components/hero-lite";
import { createClient } from "@/utils/supabase/server";
import { eqDataLoading, getPageSlug } from "@/utils/utils";
import Head from "next/head";
import { headers } from "next/headers";

export async function generateMetadata() {
    const currentPath = getPageSlug();

    const parts = await eqDataLoading("CarParts", ["slug", currentPath]);
    const part = parts[0];

    const part_data = part.data;

    return {
        title: `${part.title} - ASI: Know your ride`,
        description: part_data.meta_description,
        keywords: part_data.meta_keywords,
    }
  }

const CoolingSystemPage = async () => {
    const currentPath = getPageSlug();

    const parts = await eqDataLoading("CarParts", ["slug", currentPath]);
    const part = parts[0];

    const part_data = part.data;

    return (
        <div>
            <HeroLite title="Everything there is to know about" subtitle={`${part.title} ${part.type}`} />
            <FallBackImage 
                src={part.image_url} 
                alt={part.title} 
                width={540} 
                height={540}  
                className="w-full h-[540px] object-cover object-center z-0"
                fallbackSrc="/images/placeholder_image.png"
            />
            {part_data.sections.map((paragraph: any) => {
                return (
                    <div key={paragraph.title} className="pt-16">
                        <h2 className="text-2xl w-full text-center underline">{paragraph.title}</h2>
                        <p className="pt-4">{paragraph.content}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default CoolingSystemPage