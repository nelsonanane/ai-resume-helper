import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useConfiguration } from "../../app/store/useConfiguration";

export default function FontSizeToggle() {
  const {fontSize, setFontSize} = useConfiguration((state:any) => state)
  
  return (
    <Tabs defaultValue={fontSize} className="w-[150px] m-5" onValueChange={(val) => setFontSize(val)}>
      <TabsList className="grid w-full h-full grid-cols-3">
        <TabsTrigger value="14px" className="text-lg">
          A
        </TabsTrigger>
        <TabsTrigger value="16px" className="text-2xl">
          A
        </TabsTrigger>
        <TabsTrigger value="18px" className="text-3xl">
          A
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
