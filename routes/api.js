import express from 'express';
import { create, deleteQuestion, info, questionList, update } from '../controllers/Api/QuestionController.js';
import { login, logout } from '../controllers/Api/AuthController.js';
import { verifyAdminByToken } from '../middleware/AdminAuthMiddleware.js';
import { homeData } from '../controllers/Api/HomeController.js';
import { examCreate, examDelete, examInformation, examList, examUpdate } from '../controllers/Api/ExamController.js';

const apiRoutes = express.Router();
apiRoutes.use((req, res, next) => {
    if (req.path !== '/admin/login') {
        verifyAdminByToken(req,res,next)
    } else {
      next();
    }
  });



//Start Auth
apiRoutes.post('/admin/login',login);
apiRoutes.get('/admin/logout',logout);

//End Auth


//start Home
apiRoutes.get('/home',homeData);

//End Home

//Start Question Route

apiRoutes.get('/question/all-questions',questionList);
apiRoutes.get('/question/:id/information',info);
apiRoutes.post('/question/create',create);
apiRoutes.put('/question/:id/update',update);
apiRoutes.delete('/question/:id/delete',deleteQuestion);

//End Question Route



//Start Exam Route

apiRoutes.get('/exam/all-exams',examList);
apiRoutes.get('/exam/:id/information',examInformation);
apiRoutes.post('/exam/create',examCreate);
apiRoutes.put('/exam/:id/update',examUpdate);
apiRoutes.delete('/exam/:id/delete',examDelete);

//End Exam Route



export default apiRoutes;