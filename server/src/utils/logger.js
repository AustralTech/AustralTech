import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as path from 'path';
import moment from 'moment';

const logDirectory = path.resolve(new URL('../logs/', import.meta.url).pathname);
const logFileName = `${process.env.APP}-%DATE%.log`;

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
};

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;

    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
      }`;
  }),
);

const transport = new winston.transports.DailyRotateFile({
  filename: path.join(logDirectory, logFileName),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const appendTimestamp = winston.format(
  (info) => Object.assign(info, { timestamp: moment().format() }),
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  levels: customLevels.levels,
  format: winston.format.combine(
    formatter,
    winston.format.splat(),
    winston.format.metadata(),
    appendTimestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  transports: [
    transport,
    new winston.transports.Console(),
  ]
});

winston.addColors(customLevels.colors);

export default logger;