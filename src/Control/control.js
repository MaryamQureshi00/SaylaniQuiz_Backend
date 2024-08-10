const User = require('../Model/userSchema'); 
// User Signup or post new user
const userSignup = async (req, res) => {
    try {
        const { username, contact_no, email, password } = req.body;
        const data = { username, contact_no, email, password };
        const user = new User(data);

        console.log(user);

        await user.save();
        res.status(201).send({    
            message: "User successfully signed up",
            user
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while signing up" });
    }
};

// User Login or get user by email
const loginUser = async (req, res) => {
    try {
        const email = req.query.email;

        const user = await User.findOne({ email });

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

// Get All Users
const getALLRequest = async (req, res) => {
    try {
        const allUsers = await User.find(); // This will give all users in the schema we defined
        res.status(200).send({
            message: "All users retrieved successfully",
            allUsers
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while retrieving users" });
    }
}

module.exports={ userSignup, loginUser,getALLRequest
}

