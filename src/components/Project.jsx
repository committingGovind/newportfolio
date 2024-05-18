import { motion, spring, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Project({ props }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="mt-10 flex justify-center">
      <div className="max-w-[50lvw] bg-black p-4 rounded-2xl">
        <motion.div
          transition={{
            layout: {
              duration: 2,
              type: "spring",
            },
          }}
          layout
          onClick={() => setisOpen(!isOpen)}
          className=" ml-8 p-4"
        >
          <motion.h1 layout="position" className="text-4xl">
            Hi there
          </motion.h1>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, z: 10 }}
              transition={{ duration: 2 }}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                velit enim minima a assumenda, nisi laudantium aperiam alias
                dicta similique.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, explicabo?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt labore sint aliquam quos est reiciendis quia
                doloremque, aperiam minima ex sunt magni quisquam, debitis
                quidem? Iste libero dolor voluptate ab omnis quam animi?
                Voluptatem id laboriosam vero tempora, commodi expedita nihil.
                Obcaecati culpa aperiam, ducimus molestias repellendus
                consequatur libero vero beatae magni repellat fugiat distinctio
                in aut id, illo reiciendis aliquid quas, voluptas veritatis
                doloribus error adipisci suscipit esse! Dolorum iusto sint ipsum
                voluptate cumque nobis eligendi, quae vero harum, quisquam illum
                quaerat vel magni labore, aliquid porro omnis doloremque eaque
                unde deleniti suscipit. Repellendus, impedit qui. Fuga, nemo
                nostrum!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
