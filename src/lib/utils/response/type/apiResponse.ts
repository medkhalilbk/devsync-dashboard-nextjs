import type { ResponseTypeEnum } from './responseTypeEnum';

export interface ApiResponse<T> {
  statusCode: number;
  type: ResponseTypeEnum;
  payload: T;
}
