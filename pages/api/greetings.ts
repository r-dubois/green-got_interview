import { NextApiRequest, NextApiResponse } from "next";
import { HTTPCode } from "@constants/httpCodes";
import { httpError } from "@apiFunctions/HTTPError";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    if (req.query.first_name != null) {
      /**
       * Returns a simple "Hello ${first_name}!" in the payload key of a JSON object.
       */
      res
        .status(HTTPCode.OK)
        .json({ greeting: `Hello ${req.query.first_name}!` });
    } else {
      /**
       * Handles BAD_REQUEST error.
       */
      httpError(
        res,
        HTTPCode.BAD_REQUEST,
        "Bad request: first_name parameter is missing."
      );
    }
  } else {
    /**
     * Handles METHOD_NOT_ALLOWED error.
     */
    httpError(
      res,
      HTTPCode.METHOD_NOT_ALLOWED,
      `Method not allowed: ${req.method} instead of GET.`
    );
  }
}
