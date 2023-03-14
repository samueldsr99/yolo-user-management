import * as React from "react";

import CarouselItem from "./CarouselItem";
import type { CarouselItemProps } from "./CarouselItem";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export type CarouselProps = {
  items?: CarouselItemProps[];
  duration?: number;
};

const Carousel: React.FC<CarouselProps> = ({ items = [], duration = 5 }) => {
  const [activeItemIndex, setActiveItemIndex] = React.useState(0);
  const amount = React.useMemo(() => items.length, [items.length]);

  const handleGoNext = () => {
    setActiveItemIndex((prev) => (prev + 1) % amount);
  };
  const handleGoPrev = () => {
    setActiveItemIndex((prev) => (prev - 1 + amount) % amount);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      handleGoNext();
    }, duration * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return amount > 0 ? (
    <div className="relative flex items-center max-w-[600px] overflow-x-hidden">
      <button
        className="absolute h-full left-0 z-10 pl-4"
        onClick={handleGoPrev}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <CarouselItem
        key={items[activeItemIndex].id}
        {...items[activeItemIndex]}
      />
      <button
        className="absolute h-full right-0 z-10 pr-4"
        onClick={handleGoNext}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  ) : (
    <div>No Items</div>
  );
};

export default Carousel;
