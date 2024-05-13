"use client";

import React from "react";

interface AskAndQuestionsProps {
  questions: QuestionsProps[] | undefined;
  questionsIndex: number;
  indexOfChoseOption: number;
  setIndexOfChoseOption: Function;
  setVerificaResposta: Function;
  verificaResposta: Boolean;
}

const AskAndQuestions = ({
  questions,
  questionsIndex,
  indexOfChoseOption,
  setIndexOfChoseOption,
  setVerificaResposta,
  verificaResposta,
}: AskAndQuestionsProps) => {
  const verificaItemEscolhido = (question: String, index: Number) => {
    console.log(index);
    if (
      question.includes(
        `${questions && questions[questionsIndex].resposta_correta}`
      )
    ) {
      console.log("retornou verde");
      return "bg-right";
    }

    if (
      !question.includes(
        `${questions && questions[questionsIndex].resposta_correta}`
      ) &&
      index === indexOfChoseOption
    ) {
      console.log("retornou vermelho");
      return "bg-wrong";
    }
  };

  return (
    <>
      <h3 className="text-xl sm:text-2xl text-white font-medium">
        {questions && questions[questionsIndex]?.pergunta}
      </h3>

      {questions &&
        questions[questionsIndex]?.itens.map((question, index) => (
          <div
            key={index}
            onClick={() => {
              setIndexOfChoseOption(index);
              setVerificaResposta(true);
            }}
            className={`text-sm sm:text-lg text-white font-normal my-4 sm:my-6  px-2 py-2 rounded-xl cursor-pointer 
              ${
                verificaResposta
                  ? verificaItemEscolhido(question, index)
                  : "bg-main"
              }`}
          >
            {question}
          </div>
        ))}
    </>
  );
};

export default AskAndQuestions;
