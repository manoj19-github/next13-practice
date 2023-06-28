"use client";
import IPrompt from "@interfaces/IPrompt";
import React, { FC, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
interface IPromptCard {
  post: IPrompt;
  handleTagClick: Function;
}
const PromptCard: FC<IPromptCard> = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState<string>("");
  const handleCopy: Function = (text: string): void => {
    setCopied(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            alt="user_image"
            width={45}
            height={45}
            className="rounded-full object-contain"
            src={post.creator.image}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-satoshi text-gray-900 font-bold">
            {post.creator.username}
          </h3>
          <p className="font-inter text-sm text-gray-500">
            {post.creator.email}
          </p>
        </div>
      </div>
      <div className="copy_btn" onClick={() => handleCopy(post.prompt)}>
        <Image
          src={
            copied === post.prompt
              ? `/assets/icons/tick.svg`
              : `/assets/icons/copy.svg`
          }
          alt="copy"
          width={20}
          height={22}
        />
      </div>
      <p className="my-4 font-satoshi text-sm text-gay-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
    </div>
  );
};

export default PromptCard;
