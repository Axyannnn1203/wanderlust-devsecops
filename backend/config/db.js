import mongoose from 'mongoose';

export default async function connectDB() {
  const url = process.env.MONGO_URI;

  if (!url) {
    console.error("❌ MONGO_URI is not defined. Please check your environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(url);
    console.log(`✅ Database connected: ${url}`);
  } catch (err) {
    console.error(`❌ MongoDB connection failed: ${err.message}`);
    process.exit(1);
  }
}
