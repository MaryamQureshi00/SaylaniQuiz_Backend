

const StudentResult = require('../Model/ResultSchema');

const GetStudentResult = async (req, res) => {
    try {
        const { title,TotalScore, ObtainScore, studentId } = req.body;

        // Validate input
        if (!title || !ObtainScore || !studentId ||!TotalScore) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Create and save the result
        const result = new StudentResult({
            title,
            ObtainScore,
            TotalScore,
            studentId
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

const StduentResults = async (req, res) => {
    try {
        const email = req.query.studentId;

        const user = await StudentResult.findOne({studentId: email });

        console.log(email);
        console.log(user);

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: "No User Found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while logging in" });
    }
};







module.exports = { GetStudentResult,StduentResults };
