import { motion } from "framer-motion";

export function StartButton({}) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative px-5 py-5 rounded-3xl radial-gradient w-[200px] h-[80px]"
      onClick={() => {
        alert("Response sent successfully!");
      }}
    >
      <span className="text-gray-200 text-2xl tracking-wide font-thin relative linear-mask">
        Send Here
      </span>

      <span className="block absolute inset-0 rounded-3xl p-px linear-overlay" />
    </motion.button>
  );
}
