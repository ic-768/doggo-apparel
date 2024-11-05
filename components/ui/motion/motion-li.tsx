"use client";

import React, { forwardRef } from "react";
import { motion, MotionProps } from "framer-motion";

type MotionLiProps = React.HTMLProps<HTMLLIElement> & MotionProps;

const LiWithFramerProps = forwardRef<HTMLLIElement, MotionLiProps>(
  (props, ref) => <li ref={ref} {...props} />,
);

LiWithFramerProps.displayName = "MotionLi";

const MotionLi = motion(LiWithFramerProps);

export default MotionLi;
