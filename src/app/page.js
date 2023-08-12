"use client";
import React, { useEffect } from "react";
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
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

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
