import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
import routes from './routes';
import { getCorsOptions, getVersionURL } from './config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(getCorsOptions()));
app.use(express.json());

app.use(getVersionURL(), routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} with version ${getVersionURL()}`);
});