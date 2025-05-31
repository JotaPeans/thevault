export class UnknowError extends Error {
  constructor() {
      super("Unknow Error");

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, UnknowError.prototype);
  }
}