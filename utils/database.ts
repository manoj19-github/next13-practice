import mongoose from "mongoose";
let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log(`MONGODB is already connected`);
    return;
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL!, {
      dbName: `ms-docs`,
    });
    isConnected = true;
    console.log(`database connection established`);
  } catch (error) {
    console.log(`database connection error: ${error}`);
  }
};
