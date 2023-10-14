import { IconDownload, LineArt, ProfileHome } from "assets/icon/home";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import React, { useEffect } from "react";

export const HeroHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, disable: "mobile" });
    AOS.refresh();
  }, []);
  return (
    <section
      id="hero"
      className="h-screen relative w-full bg-gradient-to-b from-[#171045] to-transparent">
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 -bottom-20 lg:-bottom-32 -left-40 z-[1]">
        <Image fill src={LineArt} alt="line sindev" />
      </div>
      <div className="flex flex-col items-center justify-center h-full max-w-6xl px-4 mx-auto space-y-12 sm:space-y-24 xl:px-0 lg:space-y-0 lg:flex-row lg:justify-between">
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center w-full space-y-3 sm:space-y-5 lg:h-full lg:w-7/12">
          <div className="flex flex-col">
            <h1 className="text-base text-white-1 lg:text-xl">
              Hallo, I am Singgih
            </h1>
            <p className="text-3xl md:text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-l from-[#aa3ff1] to-[#4628F1] animate-text font-plus-jakarta tracking-wide">
              Front End Developer
            </p>
          </div>
          <p className="text-sm lg:text-base text-white-1 sm:w-[75%]">
            Im skilled in PHP, Javascript, Typescript, UI/UX, and familiar with
            tools and technologies such as Git, ReactJs, React Native, NextJs,
            and Laravel. My goal is to help society through innovative
            technology.
          </p>
          <div className="flex flex-row space-x-5">
            <Link href="https://id.linkedin.com/in/singgih-budi-purnadi-620751195?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.google.com%2F">
              <div className="px-5 py-2 text-sm text-center sm:w-48 hover:bg-brand/30 bg-brand text-white-1 sm:text-base rounded-xl">
                Hire Me!
              </div>
            </Link>
            <Link
              href="/cv/SinggihBudiPurnadi.pdf"
              className="flex justify-center px-5 py-2 space-x-3 border sm:w-48 rounded-xl border-brand hover:bg-brand/30">
              <span className="text-sm sm:text-base text-white-1">
                Download CV
              </span>
              <div className="relative w-5 h-5">
                <Image fill src={IconDownload} alt="icon download sindev" />
              </div>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="relative w-72 h-72 sm:w-96 sm:h-96">
          <Image fill src={ProfileHome} alt=" profile sindev" />
        </div>
      </div>
    </section>
  );
};
