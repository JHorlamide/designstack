import { Disclosure } from "@headlessui/react";
import { QA } from "../content";

export default function Example() {
  return (
    <div className="w-full pt-16">
      <div className="mx-auto w-full max-w-md md:max-w-7xl rounded-2xl p-2">
        {QA.map((qa) => (
          <Disclosure key={qa.no}>
            {({ open }) => (
              <div
                className={`${open ? "bg-light-blue md:bg-light-gray" : ""}`}
              >
                <Disclosure.Button
                  className={`flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <div className="flex space-x-3 md:space-x-10">
                    <span
                      className={`${
                        open ? "text-black" : "text-gray"
                      } text-lg md:text-[36px]`}
                    >
                      {qa.no}
                    </span>
                    <span
                      className={`${
                        open ? "text-black" : "text-white"
                      } md:text-[26px] md:align-top`}
                    >
                      {qa.question}
                    </span>
                  </div>

                  {open ? (
                    <img
                      src="/minus_circle.svg"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500 md:h-[52px] md:w-[52px]`}
                    />
                  ) : (
                    <img
                      src="/plus_circle.svg"
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500 md:h-[52px] md:w-[52px]`}
                    />
                  )}
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-justify text-gray whitespace-pre-line md:ml-[75px] md:text-lg md:max-w-4xl">
                  {qa.answer}
                </Disclosure.Panel>

                <div className="bg-gray h-[1px] my-2"></div>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
