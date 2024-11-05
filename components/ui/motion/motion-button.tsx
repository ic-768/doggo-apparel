"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "../button";

const ButtonWithFramerProps = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button ref={ref} {...props} />,
);

ButtonWithFramerProps.displayName = "MotionButton";
const MotionButton = motion(ButtonWithFramerProps);

export default MotionButton;
