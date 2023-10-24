"use client";

import React from "react";

import { Card } from "@/components/ui/card"; 
import AnaTemplate from "./resume-templates/AnaTemplate";

const getPageMargins = () => {
  return `@page { margin: 0.3in 0 0.3in 0 !important; }`;
};

export default function ResumeContainer({ componentRef }: any) {
  return (
    <div className="flex justify-center m-5"> 
      <style>{getPageMargins()}</style>
      <Card className="rounded-sm">
        <div className="w-[1190px] min-h-[1459px] p-16 " ref={componentRef}>
          <AnaTemplate />
        </div>
      </Card>
    </div>
  );
}
