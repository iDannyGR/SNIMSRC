import { Request } from 'express';

export interface systemResponse<T> {
  msg: string;
  data: T;
}

export interface RequestWithUser extends Request {
  user: {
    email: string;
    role: string;
  };
}
