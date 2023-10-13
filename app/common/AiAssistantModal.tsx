import React, { useState } from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { ChevronDownIcon, ReloadIcon } from "@radix-ui/react-icons";

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
import { DescriptionItem } from "../models/DescriptionItem";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  experienceId: any;
};

function AiAssistantModal({ experienceId }: Props) {
  const { experiences, suggestions, setSuggestions, addDescription } =
    useResumeData((state: any) => state);
  const experience = experiences.find((ex: any) => ex.id === experienceId);
  const [role, setRole] = useState<string>(experience.title);
  const [current, setCurrent] = useState<boolean>(
    experience.duration?.toLowerCase().includes("current")
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<any>([]);

  const handleOpenAiSubmit = async () => {
    setLoading(true);
    const response = await fetch("api/openaicompletion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: role, current }),
    });
    const completion = await response.json();
    let suggestions = {};

    setSuggestions({
      ...suggestions,
      [experienceId]: completion.data.choices[0].text
        .split("\n")
        .map(
          (item: any) => new DescriptionItem({ value: item, placeholder: "" })
        ),
    });

    setLoading(false);
  };

  const handleSuggestionClick = (suggestion: any) => {
    experience.description.push(suggestion);
    setChecked([...checked, suggestion.id]);
  };

  console.log("suggestions", suggestions);
  console.log("checked", checked);
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
          <Input
            placeholder="Enter role"
            value={role}
            onChange={(e: any) => setRole(e.target.value)}
          />
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
        <Button
          type="submit"
          onClick={handleOpenAiSubmit}
          disabled={!role || role.length < 4}
        >
          {loading ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Go"
          )}
        </Button>
      </div>
      <div className="max-h-[800px] overflow-x-auto">
        {Object.values<any>(suggestions)[0]?.map((suggestion: any) => (
          <Card
            className={
              "w-full p-2 mt-1 cursor-pointer hover:bg-violet-100 flex justify-between items-center"
            }
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <p>{suggestion.value} </p>
            <Checkbox id="terms" checked={checked.includes(suggestion.id)} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AiAssistantModal;
