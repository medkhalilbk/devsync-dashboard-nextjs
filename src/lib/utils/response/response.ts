import { ApiResponse } from "./type/apiResponse";
import { ErrorCodeEnum } from "./type/errorCodeEnum";
import { ErrorPayload } from "./type/errorPayloadInterface";
import { ResponseTypeEnum } from "./type/responseTypeEnum";

export function successRespondWrapper<T>(type: ResponseTypeEnum, payload: T): ApiResponse<T> {
  return {
    statusCode: 200,
    type,
    payload,
  };
}

export function respondErr(
  status: ErrorCodeEnum,
  type: ResponseTypeEnum,
  errorPayload: ErrorPayload,
): ApiResponse<ErrorPayload> {
  return {
    statusCode: status,
    type,
    payload: errorPayload,
  };
}
