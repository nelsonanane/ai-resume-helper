"use client";

import * as React from "react";

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
import { ColorPicker } from "./ColorPicker";
import FontInput from "./FontInput";
import FontSize from "./FontSizeToggle";
import { PackageOpen } from "lucide-react";
import { DownloadCloud } from "lucide-react";
import { Save } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const Navigator = ({ onDownload }: any) => {
  return (
    <div className="flex justify-center mt-5 sticky top-0 bg-white z-50">
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
          <NavigationMenuItem>
            <NavigationMenuTrigger className={menuCopyClass}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/QRMLOGO2.jpg"
                        alt="Company logo"
                        width={150}
                        height={50}
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Quick Resume Maker
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Reshape Your Resume, Reshape Your Destiny – Witness the
                        Magic of Success Unfolding.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/about"
                  title="About"
                  className="cursor-pointer"
                >
                  Get more information about Quick Resume Makers
                </ListItem>
                <ListItem
                  href="/faq"
                  title="Frequently Asked Questions"
                  className="cursor-pointer"
                >
                  Have questions about your resume before you begin? Any other
                  questions about our services? Find resources here
                </ListItem>
                <ListItem
                  href="/contact"
                  title="Contact Us"
                  className="cursor-pointer"
                >
                  Have question or just want to provide feedback. Find contact
                  form here
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
                <PackageOpen className="text-cyan-700" />
                <p className={menuCopyClass}>Open</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-center gap-1.5">
                <Save className={IconClass} />
                <p className={menuCopyClass}>Save</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer" onClick={onDownload}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex justify-center gap-1.5">
                <DownloadCloud className={IconClass} />
                <p className={menuCopyClass}>Download</p>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
} 


export default Navigator;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
        href={'#'}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
