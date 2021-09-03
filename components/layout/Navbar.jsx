import React, { useContext } from "react";
import Link from "next/link";
import Button from "../Button";
import AuthContext from "../../stores/authContext";
// if logged in show logout button

const Navbar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  // we can wait for the authReady before rendering the navbar
  return (
    <div className="flex justify-between mb-8 border-red-800 border-2 p-2 items-center">
      <div>
        <Link href="/">
          <a className="border border-green-500">LOGO</a>
        </Link>
      </div>

      {authReady && (
        <div className="space-x-4 flex items-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/GuidesPage">
            <a>Guides</a>
          </Link>

          {user === null && <Button click={login}>Login/Signup</Button>}
          {user && <div>{user.email}</div>}
          {user !== null && <Button click={logout}>Logout</Button>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
