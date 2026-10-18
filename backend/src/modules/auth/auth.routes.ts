//definicicion del entpoint
import {Router} from 'express';
import {register} from './auth.controller.js';

const router = Router();

//definicion del endpoint POST /api/auth/register
router.post('/register', register);

export default router;