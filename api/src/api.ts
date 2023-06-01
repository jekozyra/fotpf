import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (_req, res) => {
  res.status(200).send({ status: 'ok' });
});

app.get('/healthz', (_req, res) => {
  res.send(200);
});

const api = express.Router();

app.get('/hello', (_req, res) => {
  res.status(200).send({ message: 'hello world' });
});

// Version the api
app.use('/api/v1', api);
