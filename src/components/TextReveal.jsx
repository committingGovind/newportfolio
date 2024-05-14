import { motion, useAnimation, useInView } from "framer-motion";

import React, { useEffect, useRef } from "react";

export function TextReveal({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
      console.log(inView);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--accent)",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
}
