"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import background from "../../background_stars.jpg";
import background_mobile from "../../background_stars_mobile.jpg";
import { useIsVisible } from "react-is-visible";

const Page = () => {
  const nodeRef = useRef();
  const nodeRef2 = useRef();
  const isVisible = useIsVisible(nodeRef);
  const isVisible2 = useIsVisible(nodeRef2);
  const [init, setInit] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const initPage = () => {
    setTimeout(() => {
      setInit(true);
    }, 500);
  };

  window &&
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

  const html = (
    <div>
      <div className="text-white text-3xl relative h-screen max-h-screen overflow-hidden">
        <div className="top-0 relative left-0 h-full w-full p-4 lg:p-10 flex justify-center items-center">
          <div className="w-full h-full sm:hidden lg:block">
            <Image
              style={{ transform: `scale(${1 + scrollY / 1000})` }}
              className="absolute z-0"
              src={background}
              alt="background"
              fill
              onLoadingComplete={initPage}
            />
          </div>
          <div className="w-full h-full sm:block lg:hidden">
            <Image
              style={{ transform: `scale(${1 + scrollY / 1000})` }}
              className="absolute z-0"
              src={background_mobile}
              alt="background"
              fill
              onLoadingComplete={initPage}
            />
          </div>
          <div className={`absolute z-2 left-8 ${init ? "top-8" : "-top-24"}`}>
            <h1
              className={`text-5xl lg:text-6xl font-semibold relative transition-all duration-500 text-white ease-in-out ${
                init ? "-top-0" : "-top-24"
              }`}
            >
              Jamstack Dev
            </h1>
          </div>
          <div
            className={`relative z-2 transition-all duration-500 ease-in-out ${
              init ? "-right-0" : "-right-[1000px]"
            }`}
          >
            <div className="text-6xl lg:text-8xl leading-normal font-semibold flex justify-end">
              <div className="lg:w-10/12 text-right">
                Turning visions into reality with modern web development.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2000px] bg-black text-white py-10">
        <div className="p-10">
          <div
            // @ts-ignore
            ref={nodeRef}
          >
            <h2
              className={`text-5xl lg:text-6xl font-semibold relative transition-all duration-500 ease-in-out ${
                isVisible ? "-left-0" : "-left-[1000px]"
              }`}
            >
              Past Work
            </h2>
          </div>
        </div>
        <div
          // @ts-ignore
          ref={nodeRef2}
        >
          <div
            className={`relative p-10 bg-green-700 text-white text-6xl transition-all duration-1000 ease-in-out font-semibold w-5/12 rounded-r-md ${
              isVisible2 ? "-left-0" : "-left-[1000px]"
            }`}
          >
            landvisions.com
          </div>
        </div>
      </div>
    </div>
  );
  return html;
};

export default Page;
