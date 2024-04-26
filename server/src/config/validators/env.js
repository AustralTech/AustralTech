import { cleanEnv, str, email, json, port, host } from 'envalid';

const validateEnv = cleanEnv(process.env, {
  APP: str(),
  PORT: port(),
  FRONTEND_PORT: port(),
  ENVIRONMENT: str({ choices: ['development', 'test', 'production', 'staging'] }),
  DB_HOST: host(),
  DB_PORT: port(),
  DB_USERNAME: str(),
  DB_PASSWORD: str(),
  DB_DATABASE: str(),
  DB_DIALECT: str(),
  LOG_LEVEL: str({ choices: ['debug', 'info', 'error'] }),
  CORS: str(),
})

export default validateEnv;