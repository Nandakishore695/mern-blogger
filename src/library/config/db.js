import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGOOSE_CONNECTION_URL
  try {    
    await mongoose.connect(uri); 
  } catch (error) {
    process.exit(1);
  }
};
export default connectDb;