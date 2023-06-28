"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "../components/Profile";
import IPrompt from "@interfaces/IPrompt";

const Page = () => {
  const [posts, setPosts] = useState<IPrompt[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${session?.user?.email}`);
      const data = await response.json();
      setPosts(data);
    })();
  }, []);
  const handleEdit: Function = async (): Promise<void> => {};

  const handleDelete: Function = async (): Promise<void> => {};
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Page;
