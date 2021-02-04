export enum HTTPCode {
  OK = 200, // The request has succeeded.
  BAD_REQUEST = 400, // The server could not understand the request due to invalid syntax.
  NOT_FOUND = 404, // The server can not find the requested resource.
  METHOD_NOT_ALLOWED = 405, // The method received in the request-line is known by the origin server but not supported by the target resource.
}
