const StudentResult = require('../Model/ResultSchema');

const GetStudentResult = async (req, res) => {
    try {
        const { ToTalScore, ObtainScore, UserId } = req.body;

        // Validate input
        if (!ToTalScore || !ObtainScore || !UserId) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Create and save the result
        const result = new StudentResult({
            ToTalScore,
            ObtainScore,
            UserId
        });

        await result.save();

        // Send response with success message
        res.status(201).json({
            success: true,
            message: "Student result saved successfully",
            data: result
        });

    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "An error occurred while saving the result" });
    }
};

module.exports = { GetStudentResult };
