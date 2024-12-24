import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClothingItem } from "@/lib/types";

import FeaturesList from "./features-list";
import InstructionsList from "./instructions-list";
import Policies from "./policies";

export default function DetailTabs({ item }: { item: ClothingItem }) {
  return (
    <div>
      <Tabs defaultValue="features" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>
        <TabsContent value="policies">
          <Policies />
        </TabsContent>
        <TabsContent value="instructions">
          <InstructionsList />
        </TabsContent>
        <TabsContent value="features">
          <FeaturesList item={item} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
