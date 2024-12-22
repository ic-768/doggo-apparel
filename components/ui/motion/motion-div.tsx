"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type MotionDivProps = React.HTMLProps<HTMLParagraphElement> & MotionProps;

const DivWithFramerProps = (props: MotionDivProps) => <div {...props} />;

DivWithFramerProps.displayName = "MotionDiv";

const MotionDiv = motion.create(DivWithFramerProps);

export default MotionDiv;
