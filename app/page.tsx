import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

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
  return (
    <>
      <Hero/>
    </>
  );
}
