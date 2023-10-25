import React from "react";

type Props = {
  icon: any;
  onClick: () => void;
};

function IconContainer({ icon: Icon, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-fuchsia-800 rounded-[50%] h-[20px] w-[20px] flex items-center justify-center"
    >
      <Icon className="" stroke="white" fill="black" />
    </div>
  );
}

export default IconContainer;
