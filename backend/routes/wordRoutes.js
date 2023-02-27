import express from 'express';
import { AddWord, GetAllWord } from '../controllers/wordController.js';

const router = express.Router()
router.put('/addWord', AddWord)
router.post('/getAllWord', GetAllWord)
export default router