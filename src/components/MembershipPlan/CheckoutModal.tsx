import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface IProps {
  actionType: string;
  isOpen: boolean;
  link: string;
  closeModal: () => void;
}

export default function CheckoutModal({
  actionType,
  isOpen,
  link,
  closeModal,
}: IProps) {
  let content;

  if (actionType === "subscribe") {
    content = (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray"
        >
          Please click on the button below to subscribe
        </Dialog.Title>

        <div className="mt-8">
          <a
            href={link}
            target="_blank"
            className={`inline-flex justify-center rounded-md border border-light-blue bg-light-blue px-4 py-2 text-sm font-medium text-blue`}
            onClick={closeModal}
          >
            Continue
          </a>
        </div>
      </>
    );
  } else if (actionType === "cancel") {
    content = (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray"
        >
          Please click on the button below to cancel subscription
        </Dialog.Title>

        <div className="mt-8">
          <a
            href={link}
            target="_blank"
            className={`inline-flex justify-center rounded-md border border-red bg-red px-4 py-2 text-sm font-medium text-white`}
            onClick={closeModal}
          >
            Continue
          </a>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray"
        >
          Please click on the button below to add new card.
        </Dialog.Title>

        <div className="mt-8">
          <a
            href={link}
            target="_blank"
            className={`inline-flex justify-center rounded-md border border-light-blue bg-light-blue px-4 py-2 text-sm font-medium text-white`}
            onClick={closeModal}
          >
            Continue
          </a>
        </div>
      </>
    );
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {content}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
