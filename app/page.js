import Head from "next/head";
import Navbar from "@/app/components/navbar";
import SectionTitle from "@/app/components/sectionTitle";

import { benefitOne, benefitTwo } from "@/app/components/data";
import Video from "@/app/components/video";
import Footer from "@/app/components/footer";
import Testimonials from "@/app/components/testimonials";
import Cta from "@/app/components/cta";
import Faq from "@/app/components/faq";
import PopupWidget from "@/app/components/popupWidget";
import Hero from "./components/hero";
import GetYourDivorceForm from "./components/GetYourDivorceForm";
import CommittmentToCustomers from "./components/CommittmentToCustomers";

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

      <Navbar />
      
      <Hero />

      <GetYourDivorceForm />

      <CommittmentToCustomers />

      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
