// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({
    success: true,
    message: "Create new bootcamp",
  });
};

// @desc    GET one bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Show bootcamp with id ${bootcampId}`,
  });
};

// @desc    Update one bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Update bootcamp with id ${bootcampId}`,
  });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Delete bootcamp with id ${bootcampId}`,
  });
};

/**

 * get one
 * update one
 * delete one
 */
