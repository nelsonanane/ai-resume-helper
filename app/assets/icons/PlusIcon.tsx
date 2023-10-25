import React from "react";

type Props = {
  className: string;
  stroke: string;
  fill: string;
};

function PlusIcon({ className, stroke, fill = "none" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke}
      className={`w-6 h-6 p-[3px] ${className}`} 
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

export default PlusIcon;
