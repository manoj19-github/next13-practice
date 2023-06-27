import React, { FC } from "react";
import { IPost } from "@interfaces/IPosts";
import Link from "next/link";
interface IForm {
  type: string;
  post: IPost;
  setPost: any;
  handleSubmit: any;
  submitting: boolean;
}
const Form: FC<IForm> = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> Post
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world and let your
        imaginatuion run wild with any AI-powered platforms
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gay-700">
            Your AI Prompt
          </span>
        </label>
        <textarea
          value={post.prompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPost((prev: IPost) => ({ ...prev, post: e.target.value }))
          }
          placeholder="write your prompt here...."
          className="form_textarea"
          required
        ></textarea>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gay-700">
            Tag
          </span>
          <span>(#product,#development,#nationality)</span>
        </label>
        <input
          value={post.prompt}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPost((prev: IPost) => ({ ...prev, tag: e.target.value }))
          }
          placeholder="#tag"
          className="form_textarea"
          required
        />
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}....` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
