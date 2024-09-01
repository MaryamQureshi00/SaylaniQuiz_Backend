


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


// Edit an Existing Announcement
const editRequest = async (req, res) => {
    const { id } = req.query;
    const { announcement } = req.body;
console.log(id)
    try {
        if (!announcement) {
            return res.status(400).json({ error: "Announcement field is required" });
        }

        let result = await Announcement.findById(id); 
        if (!result) {
            return res.status(404).json({ error: "Announcement not found" });
        }
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, { announcement });

        if (!updatedAnnouncement) {
            return res.status(404).json({ error: "Announcement not successfully updated" });
        }

        res.status(200).json({
            success: true,
            message: "Announcement updated successfully",
            updatedAnnouncement
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: "Announcement could not be updated",
        });
    }
}

// Delete an Announcement
const deleteRequest = async (req, res) => {
    const { id } = req.query;

    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

        if (!deletedAnnouncement) {
            return res.status(404).json({ error: "Announcement not found" });
        }

        res.status(200).json({
            success: true,
            message: "Announcement deleted successfully",
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: "Announcement could not be deleted",
        });
    }
}




module.exports = { getALLRequest, postRequest,editRequest,deleteRequest };







