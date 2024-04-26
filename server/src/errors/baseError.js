export default class BaseError extends Error {
  constructor(name, message, status, cause, isOperational) {
    super(message || 'Something went wrong. Please try again.');

    this.name = name;
    this.status = status || 500;
    this.cause = cause;
    this.isOperational = isOperational !== undefined ? isOperational : true;
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        status: this.status,
        cause: this.cause,
        isOperational: this.isOperational,
        stack: this.stack
      }
    };
  }
};

export class APIError extends BaseError {
  constructor(name, status, cause, isOperational, message = 'Internal server error') {
    super(name, message, status, cause, isOperational);
  }
}