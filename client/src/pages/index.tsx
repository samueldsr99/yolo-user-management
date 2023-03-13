import { useMemo } from "react";
import { Link } from "react-router-dom";

import Button from "../components/common/button";
import Carousel from "../components/carousel/Carousel";
import { CarouselItemProps } from "../components/carousel/CarouselItem";
import BaseLayout from "../layouts/BaseLayout";
import { useListGames } from "../lib/api/hooks/games.hook";

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 px-4 md:px-8">
        <h1 className="font-bold text-slate-800 text-center text-5xl md:text-6xl lg:text-7xl">
          Player Portal
          <br />
        </h1>
        <h2 className="mt-4 text-center text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600">
          Manage your games and users <br /> like a pro with our powerful
          platform.
        </h2>
      </div>
      <div className="sm:px-20 mt-12 flex justify-center items-center flex-col sm:flex-row gap-4">
        <Link className="w-full md:w-auto" to="/games">
          <Button className="w-full" textCentered size="xl">
            Browse games
          </Button>
        </Link>
        <Link className="w-full md:w-auto" to="/users">
          <Button className="w-full" textCentered variant="secondary" size="xl">
            Try users
          </Button>
        </Link>
      </div>
    </div>
  );
};

const GamesSection: React.FC = () => {
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
    <section className="">
      <h1 className="font-bold text-slate-800 text-4xl md:text-5xl lg:text-6xl">
        Games
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {" "}
        <div className="shrink-0">
          <div className="mt-12 flex flex-col items-center justify-center gap-12">
            {isLoading ? <>Loading</> : <Carousel items={carouselItems} />}
            <Link to="/games">
              <Button size="lg">Browse games</Button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <p className="font-medium text-gray-600 text-xl">
            Welcome to our innovative platform that allows you to create,
            manage, and edit your own games with ease! Our site provides a range
            of powerful tools and features that enable you to design games from
            scratch.
            <br />
            We understand that gamers come in all shapes and sizes, which is why
            we offer a diverse range of games to suit every taste and
            preference. From classic arcade-style games to the latest
            cutting-edge titles, we've got something for everyone.
            <br /> So if you're looking for a flexible and user-friendly
            platform to create, manage, and edit your games, look no further
            than our innovative service. With our powerful tools and features,
            you'll be able to create games that engage and delight your players,
            and make your mark in the exciting world of game development. <br />{" "}
            <strong>(by ChatGPT)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <GamesSection />
      <div className="h-44" />
    </BaseLayout>
  );
};

export default HomePage;
