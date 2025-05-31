export class UserNotFoundError extends Error {
  constructor() {
      super("User not found");

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }
}