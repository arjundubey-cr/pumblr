import express from 'express';
import bodyParser, { OptionsJson, OptionsUrlencoded } from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30mb', extended: true } as OptionsJson));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true } as OptionsUrlencoded));
app.use(cors());

// https://mongodb.com/cloud/atlas
const CONNECTION_URL =
  'mongodb+srv://arjundubey:tacMP15@cluster0.nhyxa.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port : ${PORT}`);
    })
  )
  .catch((error) => console.error(error.message));
