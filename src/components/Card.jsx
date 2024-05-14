import React from "react";
import { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";

import { motion, useAnimation, useInView } from "framer-motion";
import { Pill } from "./Pill";

export function Card({ props }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const [originalColor, setOriginalColor] = useState(
    document.body.style.backgroundColor
  );

  useEffect(() => {
    if (inView) {
      document.body.style.transition = "background-color 1s";
      document.body.style.backgroundColor = props.color;
      console.log(inView);
    } else {
      document.body.style.transition = "background-color 0.2s";
      document.body.style.backgroundColor = "#222";
    }
  }, [inView]);

  const courses = props.courses;

  return (
    <div className="h-[80lvh] flex items-center justify-center sticky top-0">
      <div
        ref={ref}
        style={{ background: props.color }}
        className="h-[300px] w-[600px] rounded-3xl p-4 -translate-y-5 shadow-2xl shadow-black backdrop-brightness-50 filter"
      >
        <div>
          <div className="flex items-center justify-center mt-3">
            <a
              href={props.link}
              target="_blank"
              className="flex transition transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <h1 className="text-slate-50 mr-2 text-xl underline">
                  {props.title}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex justify-between mt-12">
            <div className="ml-4 text-slate-50">
              <div>
                <span className="text-lg">{props.degree}</span>
                <br></br>
                <span className="font-thin">Course Duration:{props.dur}</span>
                <br></br>
                <span className="font-thin">Percentage: {props.cgpa}</span>
                <div></div>
              </div>
              <div className="mt-4">
                <span className="">Course Work:</span>
              </div>
              <div className="mt-2">
                <ol className="flex justify-center items-center">
                  {courses.map((course, index) => {
                    return <Pill skill={course} />;
                  })}
                </ol>
              </div>
            </div>
            <div className="mr-2">
              <img
                src={props.wallpaper}
                className="h-[160px] w-[210px] rounded-3xl"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
