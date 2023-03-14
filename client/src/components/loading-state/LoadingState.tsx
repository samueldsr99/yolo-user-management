import * as React from "react";
import { Transition } from "@headlessui/react";

import Spinner from "../common/spinner";

export type LoadingStateProps = { open?: boolean };

const LoadingState: React.FC<LoadingStateProps> = ({ open }) => {
  return (
    <Transition
      className="border rounded-md group"
      as="div"
      show={open}
      appear
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <div className="fixed top-1/2 left-1/2">
        <Spinner />
      </div>
    </Transition>
  );
};

export default LoadingState;
