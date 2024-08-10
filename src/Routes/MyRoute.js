

const express = require('express');
const cont = require('../Control/announcementControl');

const router = express.Router();

// Create announcement
router.post("/postAnnouncement", cont.postRequest);

// Get all announcements
router.get("/getAnnouncement", cont.getALLRequest);

module.exports = router;
