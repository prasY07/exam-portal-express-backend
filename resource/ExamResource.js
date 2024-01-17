import { questionShortResource } from "./QuestionsResource.js";

export const examResource = async (allExams) => {
   const examsWithQuestions = await Promise.all(
     allExams.map(async (singleExam) => {
      //  const questions = await questionShortResource(singleExam.questions);
       return {
         id: singleExam._id,
         name: singleExam.name
         // questions,
       };
     })
   );
 
   return examsWithQuestions;
 };


export const examShortResource = async (allExams) => {
  const examsWithQuestions = await Promise.all(
    allExams.map(async (singleExam) => {
      return {
        id: singleExam._id,
        name: singleExam.name,
        join_students:10
      };
    })
  );

  return examsWithQuestions;
};
 

export const singleExamResource = async(singleExam) => {
      return {
         id: singleExam._id, 
         name: singleExam.name, 
         questions: singleExam.questions, 
      };
}
