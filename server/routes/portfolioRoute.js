const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');


// router object
const router = express.Router();

// routes
router.post("/sentEmail", sendEmailController);

// export
module.exports = router;