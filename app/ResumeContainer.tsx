"use client";

import React, {useRef} from "react";

import { Card } from "@/components/ui/card";
import { useConfiguration } from "./store/useConfiguration";
import AnaTemplate from "./resume-templates/AnaTemplate";
import { useReactToPrint } from 'react-to-print';  

const getPageMargins = () => {
  return `@page { margin: 0.3in 0 0.3in 0 !important; }`;
};

export default function ResumeContainer() {
  const state = useConfiguration((state: any) => state);
  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  console.log("state", state);

  const handleBeforeContent = () => { 
    const img = document.getElementsByTagName("img")
    console.log(img)
   
    document.getElementById("image-select") ? document.getElementById("image-select")!.style.display = "none" : '';
      console.log('image', img)
      console.log(document.getElementById("image-select"))
 
  }

  return (
    <div className="flex justify-center m-5">
       <button onClick={handlePrint}>Print this out!</button>
        <style>{getPageMargins()}</style>
      <Card className="rounded-sm" >
        <div className="w-[1190px] min-h-[auto] p-16 " ref={componentRef}>
        <AnaTemplate />
        </div>
      </Card>
    </div>
  );
}
