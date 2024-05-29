import ApplicationError from './applicationError.js';

export default class AuthenticationError extends ApplicationError {
  constructor(message) {
    super(message || 'Unauthorized.', 401);
  }
};