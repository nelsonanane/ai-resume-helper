"use client";
import React, { useEffect, useRef } from "react"; 
import { useReactToPrint } from "react-to-print";
import Navigator from "../../components/features/Navigator";
import ResumeContainer from "../ResumeContainer";

export default function Home() {
  const componentRef = useRef<any>();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });

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
      <Navigator onDownload={handleDownload} />
      <ResumeContainer componentRef={componentRef} />
    </div>
  );
}
