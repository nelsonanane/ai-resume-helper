import React from 'react'
import IconContainer from '../assets/Icons/IconContainer'
import RemoveIcon from '../assets/Icons/RemoveIcon'
import DragIcon from '../assets/Icons/DragIcon'
import PlusIcon from '../assets/Icons/PlusIcon'

type Props = {
    className: string;
    onClick: (step:string, id:any) => void;
    id: any;
}

function ControlsIconGroup({className, onClick, id}: Props) {
  return (
    <div
    className={`absolute right-5 mt-[-15px] flex justify-center gap-2 ${className}`}
  >
    <IconContainer
      icon={RemoveIcon}
      onClick={() => onClick("remove", id)}
    />
    <IconContainer
      icon={PlusIcon}
      onClick={() => onClick("plus", id)}
    />
    <IconContainer
      icon={DragIcon}
      onClick={() => onClick("drag", id)}
    />
  </div>
  )
}

export default ControlsIconGroup