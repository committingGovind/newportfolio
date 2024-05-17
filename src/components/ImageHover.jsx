import { motion } from "framer-motion";
import { StartButton } from "./StartButton";

export function ImageHover() {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: [null, 1.1, 1.05] }}
      transition={{ duration: 0.2 }}
    >
      <StartButton />
    </motion.div>
  );
}
