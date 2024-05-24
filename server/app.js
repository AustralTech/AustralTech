import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import compression from "compression";
import helmet from "helmet";
import session from "express-session";

import { sequelize } from "./src/config/database.js";
import "./src/db/models/appointment.js";
import "./src/db/models/doctor.js";
import "./src/db/models/specialities.js";
import "./src/db/models/schedule.js";
import "./src/db/models/user.js";
import "./src/db/associations.js";

import indexRouter from "./src/routes/index.js";
import { createAdminUser } from "./src/controllers/auth.controller.js";

import validateEnv from "./src/config/validators/env.js";

import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();
const app = express();

// Database connection and generation
const authenticateDatabase = async () => {
  try {
    await sequelize.sync({ /*force: true*/ });
    console.log('Connection to the database has been established successfully.');
    await createAdminUser();
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    throw error;
  }
};

const main = async () => {
  try {
    await authenticateDatabase();
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  }
};

main();

validateEnv;

// HTTP security headers
app.use(helmet());
app.use(helmet.ieNoOpen());
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000;
app.use(helmet.hsts({
  maxAge: sixtyDaysInSeconds,
}));
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));

// Sets cookies security settings
const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    sameSite: 'strict',
    secure: true,
  },
};
app.use(session(sess));

// Middleware de compresión
app.use(compression({
  filter: (req, res) => {
    // Detection of supported content type
    return /json|text|html|xml|rss|css|javascript|svg/.test(res.getHeader('Content-Type'));
  },
}));

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());

// Cors configuration
const whitelist = process.env.CORS.split(' ');
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      logger.api.error('Not allowed by CORS', { origin });
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.use('/api', indexRouter);

export default app;