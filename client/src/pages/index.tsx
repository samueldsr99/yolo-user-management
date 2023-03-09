import { useMemo } from "react";

import Button from "../components/common/button";
import Carousel from "../components/carousel/Carousel";
import { CarouselItemProps } from "../components/carousel/CarouselItem";
import BaseLayout from "../layouts/BaseLayout";
import { useListGames } from "../lib/api/hooks/games.hook";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const { data: games, isLoading } = useListGames();

  const carouselItems = useMemo(
    () =>
      games?.map(
        (game) =>
          ({
            id: game.id,
            href: `games/${game.id}`,
            alt: game.name,
            title: game.name,
            content: game.description,
            imageUrl: game.imageUrl,
          } as CarouselItemProps)
      ) ?? [],
    [games]
  );

  return (
    <div className="">
      <h1 className="md:text-center text-6xl font-bold text-slate-800">
        Welcome <br />
      </h1>
      <h2 className="md:text-center text-2xl font-semibold text-slate-600">
        The best Users / Games management service out there.
      </h2>
      <div className="mt-12 flex flex-col items-center justify-center gap-12">
        {isLoading ? <>Loading</> : <Carousel items={carouselItems} />}
        <Link to="/games">
          <Button size="lg">Browse games</Button>
        </Link>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <BaseLayout>
      <Hero />
      <div className="h-44" />
    </BaseLayout>
  );
};

export default HomePage;
