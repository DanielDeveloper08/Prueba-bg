export interface GeneralResponse<T> {
    statusCode: number;
    message: string;
    data: T;
    token?: string;
  }