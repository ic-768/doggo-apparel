"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type MotionPProps = React.HTMLProps<HTMLParagraphElement> & MotionProps;

const PWithFramerProps = (props: MotionPProps) => <p {...props} />;

PWithFramerProps.displayName = "MotionP";

const MotionP = motion.create(PWithFramerProps);

export default MotionP;
