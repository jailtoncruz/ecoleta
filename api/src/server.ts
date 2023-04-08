import path from 'path';
import express from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate'
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use('/api/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
  console.log("API Ecoleta iniciada na porta " + 3333)
});