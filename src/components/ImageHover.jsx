import { motion } from "framer-motion";

export function ImageHover() {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    >
      <img
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/43186300?v=4"
      ></img>
    </motion.div>
  );
}
