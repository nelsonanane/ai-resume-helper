"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const menuCopyClass = "font-bold text-cyan-700 opacity-70";

type Props = {};

function HomeNavigator({}: Props) {
    
  return (
    <nav className="flex justify-center mt-5 sticky top-0 bg-white z-50 mx-5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="cursor-pointer mr-10">
            <Link href="/">
              <Image
                src="/QRMLOGO2.jpg"
                alt="Company logo"
                width={180}
                height={61}
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <Link href="/about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex justify-center gap-1.5">
                  <p className={menuCopyClass}>About</p>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <Link href="/faq">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex justify-center gap-1.5">
                  <p className={menuCopyClass}>Faq&apos;s</p>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <Link href="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex justify-center gap-1.5">
                  <p className={menuCopyClass}>Contact</p>
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default HomeNavigator;
