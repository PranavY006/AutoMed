import expressAsyncHandler from "express-async-handler"


const user_logout = expressAsyncHandler(async (req, res) => {
        res.clearCookie('token');
        return res.json({ Status: "Success", Message: "Logged out successfully." });
      });

export default user_logout;