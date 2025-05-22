const validate = (schema, property = 'body') => (req, res, next) => {
  const { error } = schema.validate(req[property], {
    abortEarly: false,
    allowUnknown: false,
  });
  if (error) {
    const errors = error.details.map((detail) => ({
      field: detail.path.join('.'),
      message: detail.message.replace(/"/g, ''),
    }));

    return res.status(400).json({
      success: false,
      errors,
    });
  }
  next();
};

module.exports = { validate };
