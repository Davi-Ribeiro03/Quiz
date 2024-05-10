export const verificaItemEscolhido = (questions:QuestionsProps[], questionsIndex:number, indexOfChoseOption:number ,question: String, index: Number) => {
    console.log('hello')
    if (
      question.includes(
        `${
          questions !== undefined && questions[questionsIndex].resposta_correta
        }`
      )
    ) {
      return "bg-right";
    }

    if (
      !question.includes(
        `${
          questions !== undefined && questions[questionsIndex].resposta_correta
        }`
      ) &&
      index === indexOfChoseOption
    ) {
      return "bg-wrong";
    }

    return 'bg-main'
  };