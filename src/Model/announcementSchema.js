

const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
    announcement: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
