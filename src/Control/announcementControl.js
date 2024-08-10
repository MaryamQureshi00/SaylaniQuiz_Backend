


const Announcement = require('../Model/announcementSchema');

// Get All Announcements
const getALLRequest = async (req, res) => {
    try {
        const allAnnouncements = await Announcement.find(); // Fetch all announcements
        res.status(200).json({
            message: "All announcements retrieved successfully",
            allAnnouncements
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "An error occurred while retrieving announcements" });
    }
}

// Create a New Announcement
const postRequest = async (req, res) => {
    const { announcement } = req.body;
    try {
        if (!announcement) {
            return res.status(400).json({ error: "Announcement field is required" });
        }

        await Announcement.create({ announcement });
        res.status(201).json({
            success: true,
            message: "Announcement created successfully",
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: "Announcement could not be created",
        });
    }
}

module.exports = { getALLRequest, postRequest };




