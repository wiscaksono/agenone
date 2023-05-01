import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

interface AccordionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function Accordion({ number, title, children }: AccordionProps) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Disclosure as="div">
      <Disclosure.Button
        onClick={() => setActive(!active)}
        className="bg-[#F8F8F8] rounded-[20px] flex md:gap-10 gap-3 w-full md:px-[60px] md:py-[54px] p-6 text-left md:text-4xl text-xl md:font-semibold font-bold focus:outline-none focus-visible:ring-0 relative z-10"
      >
        <span
          className={clsx(
            active ? "primary-400 text-transparent bg-clip-text" : "text-black",
            "transition-all"
          )}
        >
          {number}
        </span>
        <div className="flex items-center justify-between flex-1">
          <span
            className={clsx(
              active
                ? "primary-400 text-transparent bg-clip-text"
                : "text-gray-700",
              "transition-all"
            )}
          >
            {title}
          </span>
          <FiArrowRight
            className={clsx(
              active ? "text-green-500 rotate-90" : "text-gray-700",
              "transition-all md:w-10 md:h-10 w-6 h-6"
            )}
          />
        </div>
      </Disclosure.Button>
      <Transition
        enter="transition ease-out"
        enterFrom="transform -translate-y-10 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition ease-out"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-10 opacity-0"
      >
        <Disclosure.Panel className="md:pl-[140px] md:pr-[60px] md:-mt-[54px] -mt-6 md:py-[54px] p-6 bg-[#F8F8F8] rounded-b-[20px]">
          {children}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}

export default Accordion;
