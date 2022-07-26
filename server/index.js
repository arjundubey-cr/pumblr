import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// https://mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://arjundubey:tacMP15@cluster0.nhyxa.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`)
    })
  )
  .catch((error) => console.error(error.message))

//mongoose.set("useFindAndModify", false)
