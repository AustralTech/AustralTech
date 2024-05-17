import ApplicationError from './applicationError.js';

export default class BadRequest extends ApplicationError {
  constructor(message) {
    super(message || 'Bad request.', 400);
  }
};