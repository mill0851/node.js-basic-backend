var express = require("express");
const fs = require("fs");
const cors = require("cors");
const { body, validationResult } = require('express-validator');
var app = express();

app.use(express.json());
app.use(cors());


app.post("/register",
    [
        body("email").not().isEmpty().withMessage("Email is required"),
        body("password").not().isEmpty().withMessage("Password is required"),
        body("confirmPassword").not().isEmpty().withMessage("Confirm Password is required")
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const usersData = fs.readFileSync("users.json");
            const users = JSON.parse(usersData).users;
            users.push(req.body);
            fs.writeFileSync("users.json", JSON.stringify({ users }));
            return res.status(200).json({ message: "User registered successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

