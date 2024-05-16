import BaseError from './baseError';

export default class AuthenticationError extends BaseError {
  constructor(message) {
    super(message || 'Unauthorized.', 401);
  }
}