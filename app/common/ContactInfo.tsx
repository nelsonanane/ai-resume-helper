import React from "react";
import { Badge } from "@/components/ui/badge";
import { useConfiguration } from "../store/useConfiguration";
import { cn } from "@/lib/utils"
import { useResumeData } from "../store/useResumeData";

type Props = {};

function ContactInfo({}: Props) {
  const state = useConfiguration((state: any) => state);
  const resume = useResumeData<any>((state:any) => state?.resume)
  const setContact = useResumeData<any>((state:any) => state?.setContact)
  console.log('resume: ' + resume)

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
              onBlur={(e:any)=> setContact(e.target.innerHTML, 'phone')}
            >{resume?.contact?.phone}</p>
          </div>
          <div className="flex gap-7 justify-center">
            <p className="font-bold">Email:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter email address"
              onBlur={(e:any)=> setContact(e.target.innerHTML, 'email')}
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
              onBlur={(e:any)=> setContact(e.target.innerHTML, 'location')}
            ></p>
          </div>
          <div className="flex gap-3 justify-center">
            <p className="font-bold">Website:</p>
            <p
              contentEditable
              className="px-1"
              placeholder="Enter website/linkedin"
              onBlur={(e:any)=> setContact(e.target.innerHTML, 'website')}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
