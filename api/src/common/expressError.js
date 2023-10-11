export default class ExpressError extends Error {
  constructor(status, message) {
    super(message);
    this.message = message;
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getMessage() {
    return this.message;
  }
}
