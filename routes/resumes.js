const express = require('express');
const router = express.Router();

// @route     GET  api/resumes
// @desc      Get all user's resumes
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route     POST  api/resumes
// @desc      Get all user's resumes
// @access    Private
router.post('/', (req, res) => {
  res.send('Add resume');
});

// @route     PUT  api/resumes/:id
// @desc      Update resume
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update resume');
});

// @route     DELETE  api/resumes/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
