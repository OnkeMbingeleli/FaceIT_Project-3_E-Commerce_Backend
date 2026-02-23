import express from 'express';
import {postorderCon} from '../controllers/orderCon.js';

const router = express.Router();

router.post('/orders',postorderCon);

export default router;