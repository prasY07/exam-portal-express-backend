
export const examResource = async(allExams) => {
    return allExams.map((singleExam) => {
        return {
           id: singleExam._id,
           name: singleExam.name, 
        };
      });
}

export const singleExamResource = async(singleExam) => {
      return {
         id: singleExam._id, 
         name: singleExam.name, 
      };
}
