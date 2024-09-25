class AppError {
  public readonly statusCode: number;
  public readonly message: string;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export interface IAppError {
  statusCode: number;
  message: string;
}

export default AppError;