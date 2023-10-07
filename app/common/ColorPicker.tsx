import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Input } from "@/components/ui/input";
import { useConfiguration } from "../store/useConfiguration";

const radioItems = [
  {
    id: "r1",
    value: "#0773e8",
  },
  {
    id: "r2",
    value: "#b92a78",
  },
  {
    id: "r3",
    value: "#f3840b",
  },
  {
    id: "r4",
    value: "#2ab993",
  },
  {
    id: "r5",
    value: "#252525",
  },
];

export function ColorPicker() {
  const { color, setColor } = useConfiguration((state: any) => state);

  console.log("color", color);
  return (
    <RadioGroup
      defaultValue={color}
      className="flex flex-row mt-2"
      onValueChange={(val) => setColor(val)}
    >
      {radioItems.map((item) => (
        <div className="flex items-center space-x-2" key={item.id}>
          <RadioGroupItem
            value={item.value}
            id={item.id}
            // className={`bg-[${item.value}]`}
            style={{backgroundColor: item.value}}
          />
        </div>
      ))}
    </RadioGroup>
  );
}
