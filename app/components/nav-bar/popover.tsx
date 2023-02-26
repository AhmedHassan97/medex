import { Popover } from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomPopover({ title }: { title: string }) {
  const [popOverOpen, setPopoverOpen] = useState<boolean>(false);
  return (
    <div
      className={classNames(
        popOverOpen ? "border-b-4 border-custom-yellow" : "",
        "relative"
      )}
    >
      <Popover.Button
        style={{
          fontSize: 13,
        }}
        onMouseEnter={() => setPopoverOpen(true)}
        onMouseLeave={() => setPopoverOpen(false)}
        className={
          "group inline-flex items-center rounded-md bg-white text-custom-primary text-xs font-bold hover:text-custom-yellow text-center py-3"
        }
      >
        {title}
      </Popover.Button>
      {popOverOpen && (
        // <Transition
        //   as={Fragment}
        //   enter="transition ease-out duration-200"
        //   enterFrom="opacity-0 translate-y-1"
        //   enterTo="opacity-100 translate-y-0"
        //   leave="transition ease-in duration-150"
        //   leaveFrom="opacity-100 translate-y-0"
        //   leaveTo="opacity-0 translate-y-1"
        // >
        <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                >
                  <item.icon
                    className="h-6 w-6 flex-shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        // </Transition>
      )}
    </div>
  );
}
