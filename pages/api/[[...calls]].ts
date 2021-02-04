import { NextApiRequest, NextApiResponse } from "next";
import { HTTPCode } from "@constants/httpCodes";
import { httpError } from "@apiFunctions/HTTPError";

/**
 * One endpoint to manage all non-existing API routes.
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  httpError(res, HTTPCode.NOT_FOUND, "Not found");
}
