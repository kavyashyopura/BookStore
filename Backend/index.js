import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000
const URI = "mongodb://127.0.0.1:27017/bookStore"
// connect to mongo db
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongodb")
} catch (error) {
    console.log("error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})