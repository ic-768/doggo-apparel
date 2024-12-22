"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "../button";

const MotionButtonProps = (props: ButtonProps) => <Button {...props} />;

MotionButtonProps.displayName = "MotionButton";
const MotionButton = motion.create(MotionButtonProps);

export default MotionButton;
