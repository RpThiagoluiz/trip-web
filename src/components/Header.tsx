"use client";

import {useState} from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { status, data } = useSession();

  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href="/">
        <div className="relative h-[32px] w-[182px]">
          <Image src="/logo.png" alt="Trips Logo" fill />
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button className="text-primary text-sm font-semibold" onClick={() => signIn()}>
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative">
          <AiOutlineMenu size={16} onClick={() => setMenuIsOpen(!menuIsOpen)} className="cursor-pointer" />

          <Image height={35} width={35} src={data.user.image!} alt={`${data.user.name!} profile image`} className="rounded-full shadow-md" />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
              <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
