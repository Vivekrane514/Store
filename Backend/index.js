import express from "express"
import mangoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRouter from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config()
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

// connect to mongodb
try {
    mangoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connect to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

//defining routes
app.use("/book", bookRouter)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})