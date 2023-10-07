import {
  IconClock,
  IconDownload,
  IconFigma,
  IconProjectWeb,
  LineArt,
  ProfileHome2,
} from "assets/icon/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const AboutHome = () => {
  return (
    <section
      id="about"
      className="relative justify-between w-full lg:h-screen bg-main-dark">
      <div className="absolute rotate-180 w-72 h-72 sm:w-96 sm:h-96 -bottom-4 lg:-top-32 -right-40">
        <Image fill src={LineArt} alt="line sindev" />
      </div>
      <div className="flex flex-col items-center justify-center max-w-6xl px-4 py-20 mx-auto space-y-12 sm:space-y-24 sm:py-24 lg:space-y-0 lg:justify-between lg:flex-row-reverse xl:px-0">
        <div className="flex flex-col justify-center w-full space-y-8 sm:space-y-12 lg:h-full lg:w-6/12">
          <div className="flex flex-col space-y-1 sm:space-y-2">
            <h2 className="text-2xl font-bold md:text-4xl text-brand font-plus-jakarta tracking-wide">
              About Me
            </h2>
            <p className="text-sm lg:text-base text-white-1">
              My name is Singgih, a frontend developer for websites and mobile
              applications. I have successfully developed blockchain-based
              websites and achieved sales targets during ICO and private sales.
              I am proficient in programming languages such as PHP, JavaScript,
              and TypeScript, and have a good understanding of UI/UX.
              Additionally, I am familiar with tools and technologies such as
              Git, ReactJs, React Native, and Laravel. My goal is to use
              technology to help improve peoples lives. Please feel free to
              contact me via the details listed on my CV.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            <div className="flex flex-row items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand/30">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                  <Image fill src={IconClock} alt="clock sindev" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold sm:text-lg text-brand">
                  2 Years+
                </span>
                <span className="text-sm sm:text-base text-white-1">
                  Experiences
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand/30">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                  <Image fill src={IconProjectWeb} alt="clock sindev" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold sm:text-lg text-brand">
                  10 Projects+
                </span>
                <span className="text-sm sm:text-base text-white-1">
                  Front End Dev
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand/30">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                  <Image fill src={IconFigma} alt="clock sindev" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold sm:text-lg text-brand">
                  5 Projects+
                </span>
                <span className="text-sm sm:text-base text-white-1">UI/UX</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <Link href="https://www.linkedin.com/in/singgih-budi-purnadi/">
              <div className="px-5 py-2 text-sm text-center sm:w-48 hover:bg-brand/30 bg-brand text-white-1 sm:text-base rounded-xl">
                Hire Me!
              </div>
            </Link>
            <button className="flex justify-center px-5 py-2 space-x-3 border sm:w-48 rounded-xl border-brand hover:bg-brand/30">
              <span className="text-sm sm:text-base text-white-1">
                Download CV
              </span>
              <div className="relative w-5 h-5">
                <Image fill src={IconDownload} alt="icon download sindev" />
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-72 h-72 sm:w-96 sm:h-96">
          <Image fill src={ProfileHome2} alt="profile sindev" />
        </div>
      </div>
    </section>
  );
};
