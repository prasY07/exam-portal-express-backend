import express from 'express';
import { questionList } from '../controllers/QuestionController.js';

const webRoutes = express.Router();
webRoutes.get('/question/all-questions',questionList);

export default apiRoutes;