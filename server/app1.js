import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Hola soy una variable de entorno", process.env.PORT);
  console.log(`app listening on port ${PORT}!`);
});

export default app;