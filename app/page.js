
"use client"

import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import About from "@/Components/About";
import Loader from "@/Components/Loader";
import '../app/globals.css'
import ImageGallery from "@/Components/ImageGallery";
import Footer from "@/Components/Footer";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <ImageGallery />
    </>
  );
}
