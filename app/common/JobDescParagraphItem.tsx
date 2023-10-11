import React, { useState } from "react";
import IconContainer from "../assets/Icons/IconContainer";
import DragIcon from "../assets/Icons/DragIcon";
import RemoveIcon from "../assets/Icons/RemoveIcon";
import { DescriptionItem } from "../models/DescriptionItem";

type Props = { 
  desc: DescriptionItem;
  onBlur: (e: any) => void;
  onClick: () => void;
};

const ParagraphItem = (props: Props) => {
  const [showParagraphControls, setShowParagraphControls] = useState(false);
  return (
    <div
      className="flex justify-between relative w-full"
      onMouseEnter={() => setShowParagraphControls(true)}
      onMouseLeave={() => setShowParagraphControls(false)}
      key={props.desc.id}
    >
      <p
        contentEditable
        onBlur={props.onBlur}
        placeholder={props.desc.placeholder}
        className="w-full"
      ></p>
      {showParagraphControls && (
        <div className="w-[50px] flex gap-1 absolute top-[-15px] right-0">
          <IconContainer
            icon={RemoveIcon}
            onClick={props.onClick}
          />
          <IconContainer icon={DragIcon} onClick={() => console.log("click")} />
        </div>
      )}
    </div>
  );
};

export default ParagraphItem
