import { HTTPCode } from "@constants/httpCodes";

/**
 * General format used for an HTTP error.
 */
export interface IHTTPError {
  error: {
    code: HTTPCode;
    message: string;
  };
}
