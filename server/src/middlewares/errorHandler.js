import logger from '../utils/logger.js';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  logger.error(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong. Please try again.',
      status: err.status || 500,
      path: req.path
    }
  });
};

export default errorHandler;