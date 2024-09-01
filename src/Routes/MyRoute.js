

const express = require('express');
const cont = require('../Control/announcementControl');

const router = express.Router();

// Create announcement
router.post("/postAnnouncement", cont.postRequest);

// Get all announcements
router.get("/getAnnouncement", cont.getALLRequest);

// edit announcement

router.post("/editAnnouncement/", cont.editRequest);

//  delete announcement 

router.delete("/deleteAnnouncement", cont.deleteRequest);

module.exports = router;

// edit announcement

module.exports = router;
