import express from 'express';
import * as authController from '../controller/auth.controller.js';
import * as validationRule from '../middlewares/validation.middlewares.js';


const router = express.Router();

// @route   POST /api/auth/register

router.post('/register' , validationRule.registerUserValidationRules, authController.register);




export default router;