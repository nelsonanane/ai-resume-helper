"use client";
import React, { useEffect, useRef } from "react";
import Navigator from "./Navigator";
import ResumeContainer from "./ResumeContainer";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const componentRef = useRef<any>();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    handleBeforeContent()
  }, []);

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
