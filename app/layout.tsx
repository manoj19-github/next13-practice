import React, { FC, ReactNode } from "react";
import "../styles/globals.css";
import Nav from "./components/Nav";
import Provider from "./components/Provider";

export const metadata = {
  title: "Prompopedia",
  description: "Discover & share AI Prompts",
};
const RootLayout: FC<IRootLayout> = ({ children, session }): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

interface IRootLayout {
  children: ReactNode;
  session: any;
}
export default RootLayout;
