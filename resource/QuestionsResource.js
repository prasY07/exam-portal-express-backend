
export const questionResource = async(allQuestions) => {
    return allQuestions.map((singleQuestion) => {
        return {
           id: singleQuestion._id, 
           question: singleQuestion.question,
           option_one: singleQuestion.option_one,
           option_two: singleQuestion.option_two,
           option_three: singleQuestion.option_three,
           option_four: singleQuestion.option_four,
           correct_option: singleQuestion.correct_option,
        };
      });
}

export const singleQuestionResource = async(singleQuestion) => {
      return {
         id: singleQuestion._id, 
         question: singleQuestion.question,
         option_one: singleQuestion.option_one,
         option_two: singleQuestion.option_two,
         option_three: singleQuestion.option_three,
         option_four: singleQuestion.option_four,
         correct_option: singleQuestion.correct_option
      
      };
}
