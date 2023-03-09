import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import clsx from "classnames";
import { Link, useLocation } from "react-router-dom";

import Logo from "../logo";

export type NavbarProps = JSX.IntrinsicElements["nav"] & {};

type NavbarItem = {
  name: string;
  href: string;
  current?: boolean;
};

const DisclosurePanel: React.FC<{ navigation: NavbarItem[] }> = ({
  navigation,
}) => (
  <Disclosure.Panel className="sm:hidden shadow-sm">
    <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
      {navigation.map((item) => (
        <NavbarLink key={item.name} item={item} />
      ))}
    </div>
  </Disclosure.Panel>
);

type NavbarLinkProps = {
  item: NavbarItem;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ item }) => (
  <Link
    to={item.href}
    className={clsx(
      "transition-all duration-200",
      item.current
        ? "font-bold text-zinc-900 underline underline-offset-8"
        : "text-zinc-600 font-semibold",
      "hover:underline hover:underline-offset-8 px-3 py-2 rounded-md text-md font-medium"
    )}
    aria-current={item.current ? "page" : undefined}
  >
    {item.name}
  </Link>
);

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { pathname } = useLocation();

  const isCurrentPath = useCallback(
    (path: string) => pathname === path,
    [pathname]
  );

  const navigation = [
    { name: "Users", href: "/users", current: isCurrentPath("/users") },
    {
      name: "Games",
      href: "/games",
      current: isCurrentPath("/games"),
    },
  ] as NavbarItem[];

  return (
    <Disclosure as="nav" className={clsx("relative z-50", className)}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="inline-flex items-center" to="/">
                  <Logo />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <NavbarLink key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
