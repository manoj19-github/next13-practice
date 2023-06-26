"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  console.log("session : ", session);
  const [providers, setProviders] = useState<any>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      console.log("response: " + response);
      setProviders(response);
    })();
  }, []);
  return (
    <nav className="flex-between w-full mb-16">
      <Link href="/" className="flex gap-2 flex-center items-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain mt-3"
        />
        <p className="logo_text mt-2">PromptoPedia</p>
      </Link>
      <div className="sm:flex hidden mt-2">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              className="outlined_btn"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image as string}
                width={30}
                height={40}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {!!providers &&
              Object.values(providers).map((provider: any, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile nav */}
      <div className="sm:hidden flex relative mt-1">
        {session?.user ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.svg"
              width={30}
              height={40}
              alt="profile"
              className="rounded-full"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
            {openMenu ? (
              <div className="">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setOpenMenu(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setOpenMenu((prev) => !prev)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setOpenMenu(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <>
            {!!providers &&
              Object.values(providers).map((provider: any, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
