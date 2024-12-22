"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "../card";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardWithFramerProps = (props: MotionCardProps) => <Card {...props} />;

CardWithFramerProps.displayName = "MotionCard";
const MotionCard = motion.create(CardWithFramerProps);

export default MotionCard;
