"use client";

import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionDivProps = React.HTMLProps<HTMLParagraphElement> & MotionProps;

const DivWithFramerProps = forwardRef<HTMLParagraphElement, MotionDivProps>(
  (props, ref) => <div ref={ref} {...props} />,
);

DivWithFramerProps.displayName = "MotionDiv";

const MotionDiv = motion.create(DivWithFramerProps);

export default MotionDiv;
