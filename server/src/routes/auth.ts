import { error } from "console";
import express from "express";
import { body, validationResult } from "express-validator";

//easy way to import router
const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("Email is invalid"),
  body("password").isLength({ min: 5 }).withMessage("Password is invallid"),
  async (req, res) => {
    const vaildationErrors = validationResult(req);

    if (!vaildationErrors.isEmpty()) {
      const errors = vaildationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      res.json({ errors });
    }
    const { email, password } = req.body;
    res.json({ email, password });
  }
);

export default router;
