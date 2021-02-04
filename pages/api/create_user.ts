import { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "@customTypes/IUser";
import { HTTPCode } from "@constants/httpCodes";
import { httpError } from "@apiFunctions/HTTPError";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    if (req.body.firstName != null && req.body.lastName != null) {
      /**
       * Returns firstName and lastName keys fully capitalized into the payload key of a JSON object.
       */
      res.status(HTTPCode.OK).json({
        FIRSTNAME: req.body.firstName.toUpperCase(),
        LASTNAME: req.body.lastName.toUpperCase(),
      } as IUser);
    } else {
      /**
       * Handles BAD_REQUEST errors.
       */
      var errorMessage = "Bad request: ";
      if (req.body.firstName == null && req.body.lastName == null) {
        errorMessage += "firstName and lastName keys are missing.";
      } else if (req.body.firstName == null) {
        errorMessage += "firstName key is missing.";
      } else {
        errorMessage += "lastName key is missing.";
      }
      httpError(res, HTTPCode.BAD_REQUEST, errorMessage);
    }
  } else {
    /**
     * Handles METHOD_NOT_ALLOWED error.
     */
    httpError(
      res,
      HTTPCode.METHOD_NOT_ALLOWED,
      `Method not allowed: ${req.method} instead of POST.`
    );
  }
}
