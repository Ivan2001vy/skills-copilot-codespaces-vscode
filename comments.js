// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// Create routes
router.post('/posts/:id/comments', commentsCtrl.create);
router.delete('/posts/:id/comments/:commentId', commentsCtrl.delete);

// Export router
module.exports = router;