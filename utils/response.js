const successResponse = (response, message, payload, status = 200) => {
  return response.status(status).json({
    status,
    message,
    payload,
  });
};

const errorResponse = (response, message, status = 400) => {
  return response.status(status).json({
    status,
    message,
  });
};

export { successResponse, errorResponse };
