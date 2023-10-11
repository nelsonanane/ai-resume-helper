import React, { useState } from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useResumeData } from "../store/useResumeData";

type Props = {
  experienceId: any;
};

function AiAssistantModal({ experienceId }: Props) {
    const { experiences } = useResumeData((state: any) => state);
    const experience = experiences.find((ex: any) => ex.id === experienceId)
  const [role, setRole] = useState<string>(experience.title);
  const [current, setCurrent] = useState<boolean>(experience.duration?.toLowerCase()
      .includes("current")
  ); 

  const handleOpenAiSubmit = async () => { 
    const response = await fetch("api/openaicompletion", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title:role, current}),
    });
    console.log("response", await response.json());
  }

  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-sky-500">AI Writing Assistant</DialogTitle>
        <DialogDescription>
          Enter your role and select bullet point templates to help you get
          started.
        </DialogDescription>
      </DialogHeader>
      <div className="flex gap-5 mt-5 w-full justify-between items-center">
        <div className="flex w-[350px] flex-col items-start justify-between rounded-md px-4 py-3 sm:flex-row sm:items-center">
          <Input placeholder="Enter role" value={role} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[280px] ml-[-300px] absolute">
              <DropdownMenuGroup>
                {experiences
                  .filter((ex: any) => ex.title !== role)
                  .map((ex: any) => (
                    <DropdownMenuItem
                      onSelect={(e: any) => setRole(e.target.innerHTML)}
                      key={ex.id}
                    >
                      {ex.title}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            onCheckedChange={(checked: boolean) => setCurrent(checked)}
            checked={current}
          />
          <Label htmlFor="airplane-mode">Current Role</Label>
        </div>
        <Button type="submit" onClick={handleOpenAiSubmit}>Go</Button>
      </div>
    </div>
  );
}

export default AiAssistantModal;
