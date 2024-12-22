"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type MotionLiProps = React.HTMLProps<HTMLLIElement> & MotionProps;

const LiWithFramerProps = (props: MotionLiProps) => <li {...props} />;

LiWithFramerProps.displayName = "MotionLi";

const MotionLi = motion.create(LiWithFramerProps);

export default MotionLi;
