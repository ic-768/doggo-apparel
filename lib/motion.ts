export const fadeIntoView = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1 } },
  viewport: { once: true, margin: "-30px" },
};

export const tapScale = {
  whileTap: { scale: 0.95 },
};
