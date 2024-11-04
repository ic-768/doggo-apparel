"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIntoView } from "@/lib/motion";
import { imageProps } from "@/lib/constants";
import Link from "next/link";

interface BrowseCardProps {
  image: string | StaticImageData;
  name: string;
  description: string;
  price: number;
  id: number;
}

export default function BrowseCard({
  image,
  name,
  description,
  price,
  id,
}: BrowseCardProps) {
  return (
    <Link className="h-full" href={`/${id}`}>
      <motion.div
        {...fadeIntoView}
        whileHover={{ rotate: 1 }}
        className="h-full"
      >
        <Card className="h-full">
          <CardHeader>
            <Image alt="name" src={image} {...imageProps} />
          </CardHeader>
          <CardContent>
            <CardTitle>{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Badge variant="secondary" className="text-lg font-semibold">
              ${price.toFixed(2)}
            </Badge>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
