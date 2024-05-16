import BaseError from './baseError';

export default class BadRequesError extends BaseError {
  constructor(message) {
    super(message || 'Bad request.', 400);
  }
}