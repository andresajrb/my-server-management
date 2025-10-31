import express from 'express';
import cors from 'cors';

import routes from './routes';
import { getCorsOptions, getVersionURL, env } from './config';

const app = express();

app.use(cors(getCorsOptions()));
app.use(express.json());

app.use(getVersionURL(), routes);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT} with version ${getVersionURL()}`);
});