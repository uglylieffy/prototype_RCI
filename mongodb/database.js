import mongoose from "mongoose";

let isConnected = false // Track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log("MongoDB is connected successfully!")
    return
  }

  try {
    // pass in the URL at MONGO_URL
    await mongoose.connect(process.env.MONGO_URL, {
      // database name edit here <<<
      dbName: "3dViewer_RCI",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true

    console.log("MongoDB connected")
  } catch (err) {
    console.log(err)
  }
}