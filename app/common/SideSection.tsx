import { Badge } from "@/components/ui/badge";
import React, { useRef, useState } from "react";
import { useConfiguration } from "../store/useConfiguration";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { CameraIcon } from "@radix-ui/react-icons";

type Props = {};

export default function SideSection({}: Props) {
  const [image, setImage] = useState<any>();
  const state = useConfiguration((state: any) => state);
  const ref = useRef<HTMLInputElement>(null);

  const openFileExplorer = () => {
    console.log('something should be open')
    ref && ref.current && ref.current.click();
  };

  const setProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setImage(e.target.files[0]);
  };

  console.log("image", image);

  return (
    <div>
      {image ? (
        <Avatar
          className="w-[120px] h-[120px] absolute mt-[-20px] ml-[-60px] cursor-pointer" 
          onClick={openFileExplorer}
          id="avatar"
        >
          <AvatarImage src={URL.createObjectURL(image)} /> 
        </Avatar>
      ) : (
        <>
          <div
            className="w-[120px] h-[120px] absolute mt-[-20px] ml-[-60px] rounded-[50%] bg-neutral-400 cursor-pointer grid place-content-center"
            onClick={openFileExplorer}
            id="image-select"
          >
            <div className="flex flex-col items-center">
              <CameraIcon className="w-[30px] h-[30px] align-middle stroke-gray-200" />{" "}
              <p className="text-gray-200 font-bold">Select</p>
            </div>
          </div>
        </>
      )}
      <input
        type="file"
        id="inputfoto2"
        accept="image/*"
        className="hidden"
        value={''}
        ref={ref}
        onChange={setProfilePic}
      />

      <div className="mt-[5rem] ml-[5rem]">
        <div>
          <p
            className="px-1 text-3xl font-light"
            contentEditable
            placeholder="First Name"
          ></p>
          <p
            className="px-1 text-3xl font-bold"
            contentEditable
            placeholder="Last Name"
          ></p>
        </div>
        <p
          contentEditable
          placeholder="Enter your profession"
          className="px-1 text-lg font-medium"
        ></p>
      </div>
      <div className="mt-[6rem] ml-[3rem]">
        <Badge
          className={`p-6 py-1 my-2 mt-10 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
          style={{backgroundColor: state.color}}
        >
          EDUCATION
        </Badge>
        <div className="flex gap-2 justify-center mb-5">
          <div
            className={`w-[10px] h-[10px] bg-[${state.color}] rounded-[50%] ml-[-23px] z-10 mt-[16px]`}
            style={{backgroundColor: state.color}}
          />
          <div className="mt-2">
            <p
              contentEditable
              placeholder="Enter your degree"
              className="px-1 mb-1 font-semibold text-lg"
            ></p>
            <div className="border-l-2 ml-[-15px] h-[90%]">
              <div className="ml-[15px]">
                <p
                  contentEditable
                  placeholder="Enter your major"
                  className="px-1 mb-1 text-zinc-600 font-medium"
                ></p>
                <div className="flex gap-2">
                  <p
                    contentEditable
                    placeholder="Enter your university"
                    className="px-1 mb-1 font-light"
                  ></p>
                  <div className="border-2 h-[15px] self-center"></div>
                  <p
                    contentEditable
                    placeholder="Enter the location"
                    className="px-1 mb-1 font-light"
                  ></p>
                </div>
                <p
                  className="p-1 w-[150px] h-[30px]"
                  contentEditable
                  placeholder="From - Until"
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center mb-5">
          <div
            className={`w-[10px] h-[10px] bg-[${state.color}] rounded-[50%] ml-[-23px] z-10 mt-[16px]`}
            style={{backgroundColor: state.color}}
          />
          <div className="mt-2">
            <p
              contentEditable
              placeholder="Enter your degree"
              className="px-1 mb-1 font-semibold text-lg"
            ></p>
            <div className="border-l-2 ml-[-15px]">
              <div className="ml-[15px]">
                <p
                  contentEditable
                  placeholder="Enter your major"
                  className="px-1 mb-1 text-zinc-600 font-medium"
                ></p>
                <div className="flex gap-2">
                  <p
                    contentEditable
                    placeholder="Enter your university"
                    className="px-1 mb-1 font-light"
                  ></p>
                  <div className="border-2 h-[15px] self-center"></div>
                  <p
                    contentEditable
                    placeholder="Enter the location"
                    className="px-1 mb-1 font-light"
                  ></p>
                </div>
                <p
                  className="p-1 w-[150px] h-[30px]"
                  contentEditable
                  placeholder="From - Until"
                ></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Badge
            className={`p-6 py-1 my-2 mt-10 text-[${state.fontSize}] rounded-2xl bg-[${state.color}]`}
            style={{backgroundColor: state.color}}
          >
            SKILLS
          </Badge>
          <div className="mt-3">
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              ReactJS
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              CSS/HTML5
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              Jenkins
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              Git
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              NodeJS
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              Javascript
            </p>
            <p
              contentEditable
              placeholder="Enter your major"
              className="px-1 mb-1 text-zinc-600 font-medium"
            >
              Java
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
