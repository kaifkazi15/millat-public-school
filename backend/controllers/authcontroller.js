const login = async (req, res) => {
    const { email, password } = req.body;
    
    // Testing credentials
    if (email === "student@test.com" && password === "123456") {
        return res.status(200).json({ message: "Login Successful", role: "student" });
    } else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
};

module.exports = { login };