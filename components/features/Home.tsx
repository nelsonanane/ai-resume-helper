"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

function Home({}: Props) {
  return (
    <div className="relative ">
      <Image
        src="/homepage-background.png"
        alt="home page background"
        height={1440}
        width={1440}
        className="h-[calc(100vh-50px)] sm:h-[calc(100vh-75px)] w-full -z-100 absolute"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute sm:right-[100px] top-[100px] md:top-[300px] sm:w-[500px]">
        <h1 className="text-orange-50 text-5xl md:text-7xl drop-shadow-[5px_5px_10px_#000000] body-text font-Font-Sans text-center sm:text-right w-[390px] sm:w-[510px]">
          Quick Resume{" "}
        </h1>{" "}
        <h2 className="text-red-400 text-3xl md:text-5xl text-right drop-shadow-[5px_5px_10px_#000000] body-text font-Font-Sans -mt-[10px]  mr-6 sm:mr-0">
          Maker
        </h2>
        <div className="flex-col-reverse flex justify-between sm:items-center sm:ml-16 sm:flex-row mt-6">
          <Button
            className="h-12 w-46 rounded-lg text-lg drop-shadow-[5px_5px_10px_#000000] sm:mt-[100px] self-center mt-6"
            asChild
          >
            <Link href={"/resume"}>Start building now</Link>
          </Button>
          <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center sm:mr-40 sm:-mt-12 self-center">
            <svg
              className="w-6 h-6 text-violet-500 sm:rotate-45"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
        <p className="text-2xl leading-tight text-white mt-12 ml-12 w-[300px] sm:w-[100%] sm:m-12 font-bold drop-shadow">
          <strong className="font-extrabold text-red-200">
            Time is Money:
          </strong>{" "}
          Have a polished resume in seconds, leaving you more time to prepare
          for interviews and network.
        </p>
      </div>
    </div>
  );
}

export default Home;
