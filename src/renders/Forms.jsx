import { ImageHover } from "../components/ImageHover";

export function Forms() {
  return (
    <div className="relative min-w-lvw flex justify-center items-center rounded-sm z-0">
      <div className="sm:h-[60%] h-[30%] z-0 w-[90lvw] sm:w-[50%] overflow-hidden text-white  rounded-3xl pt-4 pl-5 pr-5 sm:pt-16 sm:pl-16 sm:pr-16 sm:pb-7 m-0 shadow-2xl shadow-black">
        <div className="grid items-center">
          <div className="flex items-center justify-center mt-5 sm:mt-0">
            <span className="text-slate-50 text-lg sm:text-2xl z-0 border-solid border-4 border-blue-400 p-2 sm:p-4 rounded-lg font-mono font-thin">
              Like what you see?
            </span>
          </div>
          <span className="mt-16 text-md sm:text-xl font-serif font-thin">
            Your Name
          </span>
          <input
            placeholder="Name"
            required
            type="text"
            className="w-[100%] shadow-sm shadow-green-500 sm:max-w-lvw bg-gray-700 text-md sm:text-xl p-4 focus:ring-blue-500 focus:border-blue-500  mt-4 font-serif font-thin rounded-2xl"
          ></input>
          <span className="mt-8 text-md sm:text-xl font-serif font-thin">
            Your Email
          </span>
          <input
            placeholder="Email"
            required
            type="email"
            className="w-[100%] shadow-sm shadow-green-500 sm:max-w-lvw bg-gray-700 text-md sm:text-xl p-4 focus:ring-blue-500 focus:border-blue-500   mt-4 font-serif font-thin rounded-2xl "
          ></input>
          <label
            for="message"
            class="block mt-8 text-md sm:text-xl font-serif font-thin"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            required
            class="block p-2.5 mt-4 w-full shadow-sm shadow-green-500 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="sm:ml-28 ml-16 sm:mt-8 mt-6 sm:mb-0 mb-4">
          <ImageHover />
        </div>
      </div>
    </div>
  );
}
