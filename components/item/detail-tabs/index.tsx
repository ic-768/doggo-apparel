"use client";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClothingItem } from "@/lib/types";

import FeaturesList from "./features-list";
import InstructionsList from "./instructions-list";
import Policies from "./policies";

export default function DetailTabs({ item }: { item: ClothingItem }) {
  const motionProps = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  return (
    <Tabs defaultValue="features" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="instructions">Instructions</TabsTrigger>
        <TabsTrigger value="policies">Policies</TabsTrigger>
      </TabsList>

      <TabsContent value="policies" key="policies">
        <motion.div {...motionProps}>
          <Policies />
        </motion.div>
      </TabsContent>

      <TabsContent value="instructions" key="instructions">
        <motion.div {...motionProps}>
          <InstructionsList />
        </motion.div>
      </TabsContent>

      <TabsContent value="features" key="features">
        <motion.div {...motionProps}>
          <FeaturesList item={item} />
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
