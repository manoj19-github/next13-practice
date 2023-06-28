"use client";
import React, { useState, useEffect, FC } from "react";
import PropmptCard from "./PropmptCard";
import IPrompt from "@interfaces/IPrompt";
interface IPromptCardList {
  data: IPrompt[];
  handleTagClick: Function;
}
const PromptCardList: FC<IPromptCardList> = ({
  data,
  handleTagClick,
}): JSX.Element => {
  return (
    <div className="mt-16 prompt_layout">
      {data.length > 0 ? (
        data.map((self, index) => (
          <PropmptCard key={index} post={self} handleTagClick={() => {}} />
        ))
      ) : (
        <div className="text-center">No data found</div>
      )}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [posts, setPosts] = useState<IPrompt[]>([]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/prompt`);
      const data = await response.json();
      setPosts(data);
    })();
  }, []);
  return (
    <section className="feed">
      <form onSubmit={() => {}} className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
