"use client";
import React, { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Provider: FC<IProvider> = ({ children, session }): JSX.Element => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

interface IProvider {
  children: ReactNode;
  session: any;
}
export default Provider;
