"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HamburgerMenuProps {
  links: Array<{
    element: React.ReactNode;
    href: string;
    label: string;
  }>;
}

export default function HamburgerMenu({ links }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="px-2">
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-48 p-0">
          {links.map(({ element, href, label }) => (
            <DropdownMenuItem key={href} asChild>
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {element}
                <span>{label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
