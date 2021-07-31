class ValidationsErrors {
  public readonly errors: object[];

  public readonly statusCode: number;

  constructor(errors: object[], statusCode = 400) {
    this.errors = errors;
    this.statusCode = statusCode;
  }
}

export default ValidationsErrors;
