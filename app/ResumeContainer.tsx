"use client";

import * as React from "react";

import { Card } from "@/components/ui/card";
import { useConfiguration } from "./store/useConfiguration";
import AnaTemplate from "./resume-templates/AnaTemplate";

export default function ResumeContainer() {
  const state = useConfiguration((state: any) => state);

  console.log("state", state);

  return (
    <div className="flex justify-center m-5">
      <Card className="w-[1190px] min-h-[1683px] p-16 rounded-sm">
        <AnaTemplate />
      </Card>
    </div>
  );
}
