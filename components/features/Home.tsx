"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

function Home({}: Props) {
  return (
    <div className="relative">
      <Image
        src="/homepage-background.png"
        alt="home page background"
        height={1440}
        width={1440}
        className="h-[calc(100vh-75px)] w-full -z-100 absolute"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute right-[100px] top-[200px] md:top-[400px] w-[500px]">
        <h1 className="text-orange-50 text-7xl drop-shadow-[5px_5px_10px_#000000] body-text font-Font-Sans text-right">
          Quick Resume{" "}
        </h1>{" "}
        <div className="flex justify-between items-center ml-16">
          <Button
            className="h-12 w-46 rounded-lg text-lg drop-shadow-[5px_5px_10px_#000000] mt-[100px] "
            asChild
          >
            <Link href={"/resume"}>Start building now</Link>
          </Button>
          <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ">
            <svg
              className="w-6 h-6 text-violet-500 rotate-45"
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

          <h1 className="text-red-400 text-5xl text-right drop-shadow-[5px_5px_10px_#000000] body-text font-Font-Sans -mt-16">
            Maker
          </h1>
        </div>
        <p className="text-2xl leading-tight text-white m-12">
        <strong>Time is Money:</strong> Have a polished resume in seconds, leaving you more time to prepare for interviews and network.
        </p>
      </div>
    </div>
  );
}

export default Home;
