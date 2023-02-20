"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import background from "../background_galaxy.jpg";
import background_mobile from "../background_galaxy_mobile.jpg";
import { useIsVisible } from "react-is-visible";
import RecentProjects from "@/app/components/home/RecentProjects";
import classNames from "classnames";

const Page = () => {
  const [count, setCount] = useState(0);
  const [init, setInit] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!init) return;
    if (count === 0 && init) {
      // setTimeout(() => {
      setCount(count + 1);
      // }, 3000);
      // return;
    } else {
      setTimeout(() => {
        setCount(count + 1);
      }, 14000);
      return;
    }
  }, [init, count]);

  const backgroundClasses = classNames({
    "transform transition-all duration-[15000ms] ease-in-out": true,
    "scale-x-100 scale-y-100": count % 2 === 1 && count % 3 !== 0,
    "scale-x-150": count % 2 === 0 && count % 4 !== 0,
    "scale-y-120 scale-x-120": count % 3 === 0,
    "scale-y-150 scale-x-110": count % 4 === 0,
  });

  const initPage = () => {
    setInit(true);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }

  const html = (
    <div>
      <div className="text-white text-3xl relative h-screen max-h-screen overflow-hidden">
        <div className="top-0 relative left-0 h-full w-full p-4 lg:p-10 flex justify-center items-center">
          <div className="w-full h-full sm:hidden lg:block">
            <Image
              // style={{ transform: `scale(${1 + (scrollY / 1000) * 0.5})` }}
              className={`absolute z-0 ${backgroundClasses}`}
              src={background}
              alt="background"
              fill
              onLoadingComplete={initPage}
            />
          </div>
          <div className="w-full h-full sm:block lg:hidden">
            <Image
              className={`absolute z-0 ${backgroundClasses}`}
              src={background_mobile}
              alt="background"
              fill
              onLoadingComplete={initPage}
            />
          </div>
          <div
            className={`z-2 left-0 top-0 transition-all duration-500 py-6 px-8 z-10 w-full absolute ${
              init ? "top-0" : "-top-24"
            }
            `}
          >
            <h1
              className={`text-5xl lg:text-6xl font-semibold relative text-white ease-in-out w-full`}
            >
              Jamstack Dev
            </h1>
          </div>
          <div
            className={`relative z-2 transition-all duration-500 ease-in-out ${
              init ? "-right-0" : "-right-[1000px]"
            }`}
          >
            <div className="text-6xl lg:text-7xl leading-tight md:leading-normal font-semibold flex justify-end px-8 md:px-0">
              <div className="lg:w-10/12 text-right">
                Modern Web Development.
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentProjects />
      {/*<WhatWeDo />*/}
      {/*<Tools />*/}
      {/*<WhoWeAre />*/}
    </div>
  );
  return html;
};

export default Page;
