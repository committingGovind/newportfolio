import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

import { useRecoilValue } from "recoil";

import { navbaratom } from "../store/atoms/navbar";

import { useEffect } from "react";

const navigation = [
  { name: "Top", href: "#intro" },
  { name: "Education & Skills", href: "#education" },
  { name: "Experience", href: "#workexp" },
  { name: "Projects", href: "#projects" },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1Gi1nfV_38_twcvfphXVpNlvgqEHIKHgy/view?usp=sharing",
    target: "_blank",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  const [currentNav, setCurrentNav] = useState("#intro");

  const handleNavClick = (href) => {
    setCurrentNav(href);
  };

  const hoverTab = useRecoilValue(navbaratom);
  // const inView = useInView(hoverTab.ref, { once: false });

  useEffect(() => {
    setCurrentNav("#" + hoverTab.id);
  }, [hoverTab]);

  //in view code:

  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <Disclosure
          as="nav"
          className="bg-[#191919] bg-opacity-80 backdrop-blur-sm rounded-xl mt-5 fixed w-[100%] md:w-[80%] z-50 shadow-xl"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="h-10 w-auto"
                        src="https://cdn.dribbble.com/users/1413861/screenshots/4562896/media/070f8dc6bfefb7670ccde7779c5cb3c2.gif"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target={item.target ? item.target : "_parent"}
                            onClick={() => handleNavClick(item.href)}
                            className={classNames(
                              currentNav === item.href
                                ? "bg-green-600 text-[#222]"
                                : "text-gray-300 hover:bg-green-600 hover:text-[#222]",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={
                              currentNav === item.href ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex pointer-events-none rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5 " />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-10 w-auto sm:rounded-lg"
                            src="https://avatars.githubusercontent.com/u/43186300?v=4"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      ></Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
