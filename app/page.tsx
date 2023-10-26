"use client";
import React, { useEffect, useRef } from "react"; 
import ResumeContainer from "./ResumeContainer";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const componentRef = useRef<any>(); 

  const handleBeforeContent = () => {
    if (typeof document !== "undefined") {
      const img = document.getElementsByTagName("img");
      console.log(img);

      document.getElementById("image-select")
        ? (document.getElementById("image-select")!.style.display = "none")
        : "";
      console.log("image", img);
      console.log(document.getElementById("image-select"));
    }
  };

  return (
    <div>
      <ResumeContainer />
    </div>
  );
}
