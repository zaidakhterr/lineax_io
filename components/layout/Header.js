import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LineaxLogo from "components/icons/LineaxLogo";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <header className="z-50 mx-auto max-w-7xl bg-white px-6 py-2 md:px-8 md:py-10">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a className="w-32 md:w-40">
              <LineaxLogo className="w-full" />
            </a>
          </Link>

          <div className="hidden items-center justify-end space-x-8 lg:flex">
            <Link href="/#services">
              <a className="transition-opacity hover:opacity-50">SERVICES</a>
            </Link>
            <Link href="/#projects">
              <a className="transition-opacity hover:opacity-50">PROJECTS</a>
            </Link>
            <Link href="/#contact">
              <a className="transition-opacity hover:opacity-50">CONTACT US</a>
            </Link>
            <a
              href="#"
              className="border border-black bg-black px-3 py-2 uppercase text-white"
            >
              Start a project
            </a>
          </div>

          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-md p-2 outline-none lg:hidden"
          >
            <span className="sr-only">Open main menu</span>

            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-[200] lg:hidden"
          onClose={closeModal}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-in duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
            <div className="fixed right-0 w-full">
              <Transition.Child
                as={React.Fragment}
                enter="ease-in duration-200"
                enterFrom="opacity-0 -translate-y-full"
                enterTo="opacity-100 -translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 -translate-y-0"
                leaveTo="opacity-0 -translate-y-full"
              >
                <Dialog.Panel className="pb-6q flex w-full transform flex-col items-start overflow-y-auto overflow-x-hidden bg-white px-6 pt-2 pb-6 uppercase shadow">
                  <div className="relative flex w-full items-center justify-between">
                    <Link href="/">
                      <a className="w-32 md:w-40">
                        <LineaxLogo className="w-full" />
                      </a>
                    </Link>

                    <button
                      onClick={closeModal}
                      className="inline-flex items-center justify-center rounded-md p-2 outline-none md:hidden"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <Link href="/#services">
                    <a
                      className="w-full p-3 text-right transition-opacity hover:opacity-50"
                      onClick={closeModal}
                    >
                      SERVICES
                    </a>
                  </Link>
                  <Link href="/#projects">
                    <a
                      className="w-full p-3 text-right transition-opacity hover:opacity-50"
                      onClick={closeModal}
                    >
                      PROJECTS
                    </a>
                  </Link>
                  <Link href="/#contact">
                    <a
                      className="w-full p-3 text-right transition-opacity hover:opacity-50"
                      onClick={closeModal}
                    >
                      CONTACT US
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="ml-auto bg-black p-3 uppercase text-white"
                  >
                    Start a project
                  </a>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Header;
