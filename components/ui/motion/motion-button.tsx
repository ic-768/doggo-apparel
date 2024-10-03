"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../button";

interface MotionButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ButtonWithFramerProps = forwardRef<HTMLButtonElement, MotionButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />,
);

ButtonWithFramerProps.displayName = "MotionButton";
const MotionButton = motion(ButtonWithFramerProps);

export default MotionButton;
