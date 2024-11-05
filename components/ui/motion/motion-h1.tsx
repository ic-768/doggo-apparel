"use client";

import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type MotionHeadingProps<T extends HeadingLevels> = MotionProps &
  Omit<React.ComponentProps<T>, "ref"> & {
    as?: T;
  };

const HWithFramerProps = forwardRef(
  <T extends HeadingLevels = "h1">(
    { as, ...props }: MotionHeadingProps<T>,
    ref: React.Ref<HTMLHeadingElement>,
  ) => {
    const Component = as || "h1";
    return <Component ref={ref} {...props} />;
  },
);

HWithFramerProps.displayName = "MotionHeading";

// Wrapping in `motion` for animation
const MotionH = motion(HWithFramerProps);

export default MotionH;
