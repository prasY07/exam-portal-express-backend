
export const questionResource = async(allQuestions) => {
    return allQuestions.map((question) => {
        return {
           id: question._id, 
           name: question.name,
           option_one: question.option_one,
           option_two: question.option_two,
           option_three: question.option_three,
           option_four: question.option_four,
           option_four: question.option_four,
        };
      });
}

export const singleQuestionResource = async(question) => {
      return {
         id: question._id, 
         name: question.name,
         option_one: question.option_one,
         option_two: question.option_two,
         option_three: question.option_three,
         option_four: question.option_four,
         option_four: question.option_four,
      
      };
}
