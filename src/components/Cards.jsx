import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Pill } from "./Pill";

export function Cards() {
  const [selectedId, setSelectedId] = useState("");
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const items = [
    {
      id: "1",
      title: "Payments App",
      subtitle: "E2E Full Stack Application",
      functionality:
        "This app replicates the workflow of a payments app where the user is allowed to sign up, sign in, maintain money in wallet and make transfer payments to other users on the app.",
      description: [
        "Frontend: Used React to build an interactive UI with signup, signin, authentication & transaction features by employing hooks for state management, axios for backend connections and Tailwind for styling.",
        "Backend: Implemented CRUD operations using TypeScript with postgres for data storage using prisma as ORM and docker for deployment.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgresSQL",
        "Prisma",
        "Tailwind CSS",
        "Docker",
      ],
    },
    {
      id: "2",
      title: "Medium Clone",
      subtitle: "Full Stack App",
      functionality:
        "This app allows for functionality similar to medium website where users are allowed to read & write blog posts and share it with other users on the app.",
      description: [
        "Frontend: The website implemented using React and bootstrapped using Vite allows users to signup, authenticate, write blogs & publish and browse blogs.",
        "Backend: The backend is implemented using TS with Prisma as ORM for db connections & schema definition, JWT for authentication through middlewares and cloudflare workers for deployment.",
      ],
      techStack: [
        "React — TypeScript",
        "Cloudflare workers",
        "Tailwind CSS",
        "Prisma",
        "Postgres",
        "JWT",
      ],
    },
    {
      id: "3",
      title: "PlatePalette",
      subtitle: "Recepie finding app",
      functionality:
        "This app allows you to find recepeis of various dishes, allows you to bookmark them for further use, so let's make some good food!",
      description: [
        "Frontend: PlatePalette is a web application that simplifies finding and organizing recipes, making it convenient for users to plan their meals and manage their ingredients. Data is fetched dynamically using an API call which allows users to change the number of servings in real time.",
        "Backend: Built using MVC Architecture, the app uses LocalStorage API to store data locally, DOM Manipulation to change data on the page dynamically, and Pagination to display data on multiple pages.",
      ],
      techStack: ["JavaScript", "HTML5", "CSS3"],
    },
  ];

  return (
    <motion.div className="bg-[##222] flex items-center sm:justify-center justify-start ml-16 sm:ml-0" >
      <div className="grid sm:grid-cols-2 h-auto w-[60lvw] gap-8 sm:m-16 mt-10">
        {items.map((item) => (
          <motion.div
            layout
            className={`card bg-[#191919] rounded-lg shadow-2xl p-4 w-[80lvw] sm:w-full cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === item.id ? "card-selected" : ""
            }`}
            layoutId={`card-container-${item.id}`}
            onClick={() => {
              setSelectedId(item.id);
              setisOpen(true);
            }}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ opacity: selectedId == item.id ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="card-content">
              <div className="flex justify-center">
                <motion.h2 className="text-xl mx-auto font-bold mt-3 mb-2 text-blue-400 font-mono bg-[#222] p-4 rounded-2xl">
                  {item.title}
                </motion.h2>
              </div>
              <motion.h5 className="text-sm mb-1 text-slate-400 p-2 text-balance mt-3 font-mono ml-4 font-thin">
                {item.functionality}
              </motion.h5>
              <ol className="flex flex-wrap ml-5">
                {item.techStack.map((tech, index) => {
                  return <Pill key={index} skill={tech} isTrue={false} />;
                })}
              </ol>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedId && isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => {
            setisOpen(false);
            setSelectedId("");
          }}
        >
          {items.map(
            (item) =>
              item.id === selectedId && (
                <motion.div
                  layout
                  className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                  layoutId={`card-container-${item.id}`}
                  key={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  //   exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    transition={{ duration: 0.4 }}
                    layout
                    className="relative"
                  >
                    <motion.button
                      className="absolute top-2 right-2 py-1 px-1 text-center text-black bg-red-400  rounded-full"
                      onClick={() => {
                        setSelectedId("");
                        setisOpen(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.button>
                    <motion.h2
                      transition={{ duration: 0.6 }}
                      className="text-xl font-bold mb-2 text-purple-600"
                    >
                      {item.title}
                    </motion.h2>
                    <motion.h5
                      transition={{ duration: 0.6 }}
                      className="text-sm font-bold mb-1 text-gray-700"
                    >
                      {item.subtitle}
                    </motion.h5>
                    <motion.p
                      transition={{ duration: 0.6 }}
                      className="text-md text-gray-700 mb-4"
                    >
                      {item.description.map((desc, index) => {
                        const splitWork = desc.split(":");

                        return (
                          <p className="font-thin md:text-xl md:font-thin md:text-gray-600 p-2">
                            <span className="md:text-xl md:font-thin md:text-gray-600">
                              {index + 1 + ".)"}{" "}
                            </span>
                            <span className="underline md:no-underline md:mb-4 font-medium md:text-xl md:font-mono md:text-thin md:text-blue-400">
                              {splitWork[0] + ":"}
                            </span>
                            {splitWork[1]}
                          </p>
                        );
                      })}
                    </motion.p>
                    <motion.p
                      className="text-md text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      //   exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    ></motion.p>
                  </motion.div>
                </motion.div>
              )
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
