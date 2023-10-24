import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfiguration } from "../../app/store/useConfiguration";

const fontOptions = [
  {
    id: 1,
    value: "Poppins",
    selected: true,
  },
  {
    id: 2,
    value: "Nonito",
    selected: false,
  },
  {
    id: 3,
    value: "Merriweather",
    selected: false,
  },
  {
    id: 4,
    value: "Space Mono",
    selected: false,
  },
  {
    id: 5,
    value: "Karla",
    selected: false,
  },
  {
    id: 6,
    value: "Fira Sans",
    selected: false,
  },
  {
    id: 7,
    value: "Syne",
    selected: false,
  },
  {
    id: 8,
    value: "Work Sans",
    selected: false,
  },
  {
    id: 9,
    value: "Josefin Sans",
    selected: false,
  },
];

export default function FontInput() {
    const {font, setFont} = useConfiguration((state:any) => state)

    console.log('font', font)
    
  return (
    <select
      id="typography"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(event: any) => setFont(event?.target.value)}
      value={font}
    >
      {fontOptions.map((option) => (
        <option selected={option.selected} key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
