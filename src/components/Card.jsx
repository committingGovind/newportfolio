import React, { useEffect, useRef } from "react";

import { useInView } from "framer-motion";
import { Pill } from "./Pill";

export function Card({ props, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      document.body.style.transition = "background-color 1s";
      document.body.style.backgroundColor = props.color;
      // document.body.style.backgroundColor = "#fafafa";

      console.log(inView);
    } else {
      document.body.style.transition = "background-color 0.2s";
      document.body.style.backgroundColor = "#222";
    }
  }, [inView]);

  const courses = props.courses;

  return (
    <div
      className="min-h-lvh lg:h-100lvh  flex items-center justify-center sticky"
      style={{ top: `calc(-10% + ${i * 25}px)` }}
    >
      <div
        ref={ref}
        style={{ background: props.color }}
        className="lg:h-[50lvh] lg:w-[50lvw] h-[30%] w-[100%] rounded-md p-4 -translate-y-5 lg:shadow-xl shadow-2xl shadow-black backdrop-brightness-50 filter"
      >
        <div>
          <div className="flex items-center justify-center mt-3 lg:mt-10 lg:transition lg:transform lg:hover:scale-105 lg:hover:text-green-500">
            <a
              href={props.link}
              target="_blank"
              className="flex transition transform"
            >
              <div className="flex items-center justify-center">
                <h1 className="text-slate-50 lg:hover:text-green-500 mr-2 sm:text-xl underline lg:text-2xl lg:underline-offset-4 lg:font-thin lg:font-mono">
                  {props.title}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex justify-between mt-10 lg:mt-20">
            <div className="ml-2 text-slate-50 lg:ml-5">
              <div>
                <span className="text-lg lg:text-xl lg:font-mono lg:font-thin">
                  {props.degree}
                </span>
                <br></br>
                <span className="font-thin lg:text-xl lg:mt-20">
                  Course Duration: {props.dur}
                </span>
                <br></br>
                <span className="font-thin lg:text-xl lg:mt-24">
                  Percentage: {props.cgpa}
                </span>
                <div></div>
              </div>
              <div className="mt-4 lg:mt-10">
                <span className="lg:text-2xl lg:font-mono">Course Work:</span>
              </div>
              <div className="mt-2 lg:mt-4">
                <ol className="flex justify-start items-center">
                  {courses.map((course, index) => {
                    return <Pill skill={course} key={index} />;
                  })}
                </ol>
              </div>
            </div>
            <div className="mr-1 lg:-mt-3">
              <img
                src={props.wallpaper}
                className="h-[160px] w-[160px] lg:h-[250px] lg:w-[300px] rounded-3xl"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
