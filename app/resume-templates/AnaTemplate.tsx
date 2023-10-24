import React from "react";
import ContactInfo from "../../components/features/ContactInfo";
import Summary from "../../components/features/Summary";
import { Separator } from "@/components/ui/separator";
import ExperienceSection from "../../components/features/ExperienceSection";
import SideSection from "../../components/features/SideSection";

type Props = {};

export default function AnaTemplate({}: Props) {
  return (
    <div className="flex h-[100%]">
      <div className="w-[65%]">
        <ContactInfo />
        <Summary />
        <Separator className="my-5 w-[95%]"/>
        <ExperienceSection />
      </div>
      <div className="w-[35%] border-l-[1px]">
        <SideSection />
      </div>
    </div>
  );
}
