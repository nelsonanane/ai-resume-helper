import React, { useState } from "react";
import IconContainer from "../../app/assets/Icons/IconContainer";
import DragIcon from "../../app/assets/Icons/DragIcon";
import RemoveIcon from "../../app/assets/Icons/RemoveIcon";
import { DescriptionItem } from "../../app/models/DescriptionItem";

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

type Props = {
  desc: DescriptionItem;
  onBlur: (e: any) => void;
  onClick: () => void;
};

// const theme = { 
//   componentStyles: (theme:any) => ({
//     // Adds basic styling to the editor.
//     Editor: {
//       backgroundColor: theme.colors.editor.background,
//       borderRadius: theme.borderRadius,
//       border: `1px solid ${theme.colors.border}`,
//       boxShadow: `0 4px 12px ${theme.colors.shadow}`,
//     },
//     // Makes all hovered dropdown & menu items blue.
//     Menu: {
//       ".mantine-Menu-item[data-hovered], .mantine-Menu-item:hover": {
//         backgroundColor: "blue",
//       },
//     },
//     Toolbar: {
//       ".mantine-Menu-dropdown": {
//         ".mantine-Menu-item:hover": {
//           backgroundColor: "blue",
//         },
//       },
//     },
//   }),
// } satisfies Theme;

const ParagraphItem = (props: Props) => {
  const [showParagraphControls, setShowParagraphControls] = useState(false);
  const editor: BlockNoteEditor = useBlockNote({ 
    domAttributes: { 
      blockContent: { 
        // class: "ml-[-50px]",
      },
    },
  });

  return (
    <div
      className="flex justify-between relative w-full"
      onMouseEnter={() => setShowParagraphControls(true)}
      onMouseLeave={() => setShowParagraphControls(false)}
      key={props.desc.id}
    >
      <p
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={props.onBlur}
        placeholder={props.desc.placeholder}
        className="w-full"
      >{props.desc.value}</p>
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

    // <BlockNoteView editor={editor} theme={"light"} />
  );
};

export default ParagraphItem;
