"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Card } from "../card";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardWithFramerProps = forwardRef<HTMLDivElement, MotionCardProps>(
  (props, ref) => <Card ref={ref} {...props} />,
);

CardWithFramerProps.displayName = "MotionCard";
const MotionCard = motion.create(CardWithFramerProps);

export default MotionCard;
