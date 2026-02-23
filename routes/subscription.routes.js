import express from 'express';
import { postsubscriptionCon } from '../controllers/subscriptionCon.js';

const router = express.Router();

router.post ('/subscription', postsubscriptionCon);

export default router;
