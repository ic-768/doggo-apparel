"use client";

import React from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";

const MotionLinkProps = (props: LinkProps & { className?: string }) => (
  <Link {...props} />
);

MotionLinkProps.displayName = "MotionLink";
const MotionLink = motion.create(MotionLinkProps);

export default MotionLink;
