"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type MotionHeadingProps<T extends HeadingLevels> = MotionProps &
  Omit<React.ComponentProps<T>, "ref"> & {
    as?: T;
  };

const HWithFramerProps = <T extends HeadingLevels = "h1">({
  ...props
}: MotionHeadingProps<T>) => {
  const Component = props.as || "h1";
  return <Component {...props} />;
};

// Wrapping in `motion` for animation
const MotionH = motion.create(HWithFramerProps);

export default MotionH;
