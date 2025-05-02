import Link from "next/link";
import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
        </li>
        <li className="hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/">About</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl bg-amber-500 rounded-lg py-1 px-2 font-bold">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
