import BaseError from './baseError';

export default class AuthorizationError extends BaseError {
  constructor(message) {
    super(message || 'Forbidden.', 403);
  }
}