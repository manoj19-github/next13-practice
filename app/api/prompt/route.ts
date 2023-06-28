import Prompt from "@models/prompt.model";
import { connectToDB } from "@utils/database";

export const GET = async (request: Request) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find().populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
