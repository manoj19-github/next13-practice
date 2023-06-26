import React from "react";
import Feed from "./components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share AI Prompts
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        PromotoPedia is an open source AI prompting tool for modern world to
        discover, create and share creative Prompts
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default Home;
