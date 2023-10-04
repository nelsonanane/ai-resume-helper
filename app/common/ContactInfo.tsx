import React from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { cn } from "@/lib/utils"

type Props = {};

function ContactInfo({}: Props) {
  const state = useConfiguration((state: any) => state);
  console.log('fontsize: ' + state.fontSize)

  return (
    <div>
      <Badge className={cn(`p-6 pt-1 pb-1 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`)} style={{backgroundColor: state.color}}>
        CONTACT
      </Badge>
      <div className="mt-3 flex gap-1 flex-col">
        <div className="flex gap-10 ">
          <div className="flex gap-7 justify-center">
            <p className="font-bold">Phone:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter phone number"
            ></p>
          </div>
          <div className="flex gap-7 justify-center">
            <p className="font-bold">Email:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter email address"
            ></p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-3 justify-center">
            <p className="font-bold">Location:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter city and state"
            ></p>
          </div>
          <div className="flex gap-3 justify-center">
            <p className="font-bold">Website:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter website/linkedin"
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
