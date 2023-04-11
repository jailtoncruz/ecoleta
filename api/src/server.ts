import express from 'express';
import cors from 'cors';
import { resolve } from 'path';
import { errors } from 'celebrate';
import routes from './routes';
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use('/api/uploads', (req, res, next) => {
  const folder = resolve(__dirname, '..', 'uploads')
  return express.static(folder)(req, res, next)
});

app.use(errors());

app.listen(3333, () => {
  console.log("API Ecoleta iniciada na porta " + 3333)
});