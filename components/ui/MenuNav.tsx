import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const MenuNav = () => {
  return (
    <div>
      <section
        id="menu"
        className="sticky top-2 z-50 w-full h-auto flex flex-row items-center rounded-md justify-between bg-transparent backdrop-blur-md px-5"
      >
        <div>
          <Link href="/">
            <h5 className="text-yellow-500 text-lg font-semibold">TimoBest</h5>
          </Link>
        </div>
        <div>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Home
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    Projects
                  </p>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <p className="px-4 py-2 text-base font-semibold text-yellow-500 rounded-md cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-black">
                    About
                  </p>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </div>
  );
};

export default MenuNav;
