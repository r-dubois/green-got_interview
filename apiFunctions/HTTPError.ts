import { NextApiResponse } from "next";
import { IHTTPError } from "@customTypes/IHTTPError";
import { HTTPCode } from "@constants/httpCodes";

/**
 * Function that send the error API response.
 */
export function httpError(
  res: NextApiResponse,
  code: HTTPCode,
  message: string
) {
  res.status(code).json({
    error: {
      code: code,
      message: message,
    },
  } as IHTTPError);
}
