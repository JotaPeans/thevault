export class UnauthorizedError extends Error {
  constructor() {
      super("Você não possui autorização para executar esta ação!");

      // Set the prototype explicitly.
      Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}