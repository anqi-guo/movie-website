import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Sign in</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/">About</Link>
        </li>
      </ul>
      <Link href="/" className="flex gap-1 items-center">
        <span className="text-2xl bg-amber-500 rounded-lg py-1 px-2 font-bold">
          IMDb
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
