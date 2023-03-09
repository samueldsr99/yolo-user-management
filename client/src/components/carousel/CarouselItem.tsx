import * as React from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export type CarouselItemProps = {
  id: number;
  imageUrl: string;
  alt: string;
  href: string;
  title: string;
  content: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  imageUrl,
  alt,
  href,
  title,
  content,
}) => {
  return (
    <Transition
      className="border rounded-md group"
      as="div"
      show
      appear
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="relative">
        <img
          className="h-96 object-cover brightness-40 group-hover:brightness-75 duration-300 rounded-md"
          alt={alt}
          src={imageUrl}
          width={600}
          height={320}
        />
        <div className="absolute bottom-4 left-0 right-0 text-center group-hover:scale-110 duration-200">
          <Link to={href} className="text-2xl text-white font-extrabold">
            {title}
          </Link>
          <p className="mt-4 text-md text-gray-300 font-semibold">{content}</p>
        </div>
      </div>
    </Transition>
  );
};

export default CarouselItem;
