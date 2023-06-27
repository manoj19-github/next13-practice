import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt.model";
import User from "@models/user.model";
export const POST = async (req: Request) => {
  const { userEmail, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const userExists = await User.findOne({ email: userEmail });
    if (!userExists) throw new Error(`User ${userEmail} does not exist`);
    const newPrompt = new Prompt({
      creator: userExists._id,
      tag,
      prompt,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 200 });
  } catch (error) {
    console.log("error occured", error);
    return new Response(JSON.stringify(error), { status: 400 });
  }
};
