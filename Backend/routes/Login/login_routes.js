import { Router } from "express";
import {verifyUser , user_auth} from "../../controllers/auth/user.js";
import user_logout from "../../controllers/auth/logout.js";

const router = Router();

router.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", user_id: req.user_id, position: req.position });
  });

router.post('/', user_auth);
router.get('/logout', user_logout);

export default router;