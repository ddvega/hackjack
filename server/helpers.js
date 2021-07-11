export const newError = (name) => {
  const e = new Error(name);
  e.name = name;
  return Promise.reject(e);
};

export const sendError = (res, status, msg) => {
  res.status(status).send({ Error: msg });
};

export const msg = {
  noEntity: 'Entity does not exist!',
};

export const StatusCode = Object.freeze({
  SuccessPost: 201,
  SuccessGet: 200,
  SuccessDelete: 204,
  BadRequest: 400,
  Error: 500,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
});
