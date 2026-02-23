import express from 'express';
import {postusersCon} from '../controllers/usersCon.js';

const router = express.Router();

router.post('/users', postusersCon)

export default router;