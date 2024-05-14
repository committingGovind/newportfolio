import { motion } from "framer-motion";
import { ImageHover } from "./ImageHover";

export function Imagepop() {
  return (
    <motion.div
      className="imageloadbox"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/43186300?v=4"
      ></img>
      {/* <ImageHover /> */}
    </motion.div>
  );
}
