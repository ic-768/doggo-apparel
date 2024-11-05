"use client";

import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionPProps = React.HTMLProps<HTMLParagraphElement> & MotionProps;

const PWithFramerProps = forwardRef<HTMLParagraphElement, MotionPProps>(
  (props, ref) => <p ref={ref} {...props} />,
);

PWithFramerProps.displayName = "MotionP";

const MotionP = motion(PWithFramerProps);

export default MotionP;
