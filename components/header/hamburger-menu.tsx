"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HamburgerMenuProps {
  links: {
    element: React.ReactNode;
    href: string;
    label: string;
  }[];
}

export default function HamburgerMenu({ links }: HamburgerMenuProps) {
  return (
    <div className="sm:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Toggle menu">
            <Menu className="size-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0">
          {links.map(({ element, href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {element}
              <span>{label}</span>
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
