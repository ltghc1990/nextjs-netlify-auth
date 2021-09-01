import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between mb-8 border-red-800 border-2 p-2">
      <div>
        <Link href="/">
          <a className="border border-green-500">LOGO</a>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/GuidesPage">
          <a>Guides</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
