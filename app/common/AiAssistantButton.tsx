import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AiAssistantModal from "./AiAssistantModal";

type Props = {
  onClick: () => void;
  experienceId: any;
};

function AiAssistantButton({ onClick, experienceId }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="cursor-pointer bg-fuchsia-800 rounded-[50px] h-[20px] w-[120px] flex items-center justify-center p-1"
          onClick={() => onclick}
        >
          <p className="text-white text-sm">Ai Assistant</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <AiAssistantModal experienceId={experienceId}/>
      </DialogContent>
    </Dialog>
  );
}

export default AiAssistantButton;
