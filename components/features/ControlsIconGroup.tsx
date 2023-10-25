import React from "react";
import IconContainer from "@/app/assets/Icons/IconContainer";
import RemoveIcon from "@/app/assets/Icons/RemoveIcon";
import DragIcon from "@/app/assets/Icons/DragIcon";
import PlusIcon from "@/app/assets/Icons/PlusIcon";
import { ACTION_OPTIONS } from "./SideSection";
import AiAssistantButton from "./AiAssistantButton";

type Props = {
  className: string;
  onClick: (step: string, id: any) => void;
  id: any;
  withAIAssistant?: boolean;
};

function ControlsIconGroup({ className, onClick, id, withAIAssistant }: Props) {
  return (
    <div
      className={`absolute right-5 mt-[-15px] flex justify-center gap-2 ${className}`}
    >
      {withAIAssistant && (
        <AiAssistantButton
          onClick={() => onClick(ACTION_OPTIONS.ASSISTANT, id)}
          experienceId={id}
        />
      )}
      <IconContainer
        icon={RemoveIcon}
        onClick={() => onClick(ACTION_OPTIONS.REMOVE, id)}
      />
      <IconContainer
        icon={PlusIcon}
        onClick={() => onClick(ACTION_OPTIONS.PLUS, id)}
      />
      <IconContainer
        icon={DragIcon}
        onClick={() => onClick(ACTION_OPTIONS.DRAG, id)}
      />
    </div>
  );
}

export default ControlsIconGroup;
