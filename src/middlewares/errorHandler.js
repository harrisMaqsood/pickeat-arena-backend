const errorHandler = (err, req, res) => {
  console.error(err.stack);
  return res.status(500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
  });
};

module.exports = { errorHandler };
