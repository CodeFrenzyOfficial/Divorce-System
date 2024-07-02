import Head from "next/head";

import Faq from "@/app/components/faq";
import Hero from "@/app/components/hero";
import GetYourDivorceForm from "@/app/components/GetYourDivorceForm";
import WhyUs from "@/app/components/WhyUs";
import CommittmentToCustomers from "@/app/components/CommittmentToCustomers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <GetYourDivorceForm />

      <WhyUs />
      
      <CommittmentToCustomers />

      <div className="py-10">
        <h2 className="w-full text-center text-4xl font-semibold">Question Frequently Asked</h2>
      </div>

      <Faq />
    </>
  );
}
