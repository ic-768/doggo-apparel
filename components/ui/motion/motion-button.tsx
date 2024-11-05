"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "../button";

const MotionButtonProps = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />,
);

MotionButtonProps.displayName = "MotionButton";
const MotionButton = motion.create(MotionButtonProps);

export default MotionButton;
