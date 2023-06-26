"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../components//Form";
const CreatePage = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  //1.51.59
  return <div>Page</div>;
};

export default CreatePage;
