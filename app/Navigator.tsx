"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import OpenIcon from "./Assets/Icons/OpenIcon";
import SaveIcon from "./Assets/Icons/SaveIcon";
import { DownloadIcon } from "@radix-ui/react-icons";
import { ColorPicker } from "./common/ColorPicker";
import FontInput from "./common/FontInput";
import FontSize from "./common/FontSizeToggle";

const menuCopyClass = "font-bold text-cyan-700 opacity-70";
const IconClass = " text-cyan-700 opacity-70";

const components: { id: number; title: string; component: any }[] = [
  {
    id: 1,
    title: "Change Color Theme",
    component: <ColorPicker />,
  },
  {
    id: 2,
    title: "",
    component: (
      <p>Pick a color theme that will reflect through out your resume.</p>
    ),
  },
  {
    id: 3,
    title: "Change Font",
    component: <FontInput />,
  },
  {
    id: 4,
    title: "",
    component: (
      <p>
        Change the font of your resume to further personalized to your needs and
        stand out
      </p>
    ),
  },
  {
    id: 5,
    title: "Change Font Size",
    component: <FontSize />,
  },
  {
    id: 6,
    title: "",
    component: <p>Change the font size of resume</p>,
  },
];

export default function Navigator() {
  return (
    <div className="flex justify-center mt-5 sticky top-0 bg-white z-50">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={menuCopyClass}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={menuCopyClass}>
              Customize
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.id} title={component.title}>
                    {component.component}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-center gap-1.5">
                <OpenIcon className={IconClass} />
                <p className={menuCopyClass}>Open</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-center gap-1.5">
                <SaveIcon className={IconClass} />
                <p className={menuCopyClass}>Save</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-center gap-1.5">
                <DownloadIcon className={IconClass} />
                <p className={menuCopyClass}>Download</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = ({ className, title, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild onSelect={(e) => e.preventDefault()}>
        <div
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

ListItem.displayName = "ListItem";
