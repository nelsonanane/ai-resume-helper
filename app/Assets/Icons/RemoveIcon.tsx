import React from "react";

type Props = {
  className: string;
  stroke: string;
  fill: string;
};

function RemoveIcon({ className, stroke, fill = "none" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke}
      className={`w-6 h-6 ${className}`} 
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
}

export default RemoveIcon;
