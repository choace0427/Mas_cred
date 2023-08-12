"use client";

import { ThemeProvider } from "@material-tailwind/react";

import Header from "./Layout/header";
import Hero from "./Layout/hero";
import Logos from "./Layout/logos";
import Experience from "./Layout/experience";
import Service from "./Layout/services";
import Numbers from "./Layout/numbers";
import AboutUs from "./Layout/aboutUs";
import Social from "./Layout/social";
import FAQ from "./Layout/faq";
import Footer from "./Layout/footer";

export default function Home() {
  const customTheme = {};
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Logos />
        <Experience />
        <Service />
        <Numbers />
        <AboutUs />
        <Social />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
