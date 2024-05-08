"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Console } from "console";

const Questions = () => {
  const router = useRouter();
  const { option, nivel } = useSelector(
    (state: { optionsQuiz: { option: string; nivel: string } }) =>
      state.optionsQuiz
  );
  const [questions, setQuestions] = useState<questionsProps[]>([]);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [indexOfChoseOption, setIndexOfChoseOption] = useState(0);
  const [verificaResposta, setVerificaResposta] = useState(false);

  const verificaOptions = () => {
    if (!option || !nivel) {
      router.push("/");
    }
  };

  const buscaQuestions = async () => {
    const dados: questionsResponse = await axios.get(
      `https://quiz-servidor.vercel.app/${option}`
    );
    console.log(dados);
    if (nivel === "facil") setQuestions(dados.data.facil);
    else if (nivel === "medio") setQuestions(dados.data.medio);
    if (nivel === "dificil") setQuestions(dados.data.dificil);
  };

  const verificaCorreta = (question: String, index: Number) => {
    if (
      question.includes(`${questions[questionsIndex].resposta_correta}`) &&
      verificaResposta === true
    ) {
      return "bg-green-600 hover:bg-green-600";
    }

    if (
      !question.includes(`${questions[questionsIndex].resposta_correta}`) &&
      verificaResposta === true &&
      index === indexOfChoseOption
    ) {
      return "bg-red-400 hover:bg-red-400";
    }

    if (
      !question.includes(`${questions[questionsIndex].resposta_correta}`) &&
      verificaResposta === true
    ) {
      return "opacity-80";
    }
  };

  useEffect(() => {
    verificaOptions();
    buscaQuestions();
    console.log("helloo");
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="max-w-[80%] min-w-[80%] min-h-[80%] max-h-[95%] sm:min-w-[40%] w-auto h-auto sm:min-h-[80%] bg-bg_card  shadow-2xl rounded-2xl p-8 relative">
        <span className="text-white absolute right-3 top-2 opacity-60">
          Pergunta {questionsIndex + 1} de {questions?.length}
        </span>
        <h3 className="text-xl sm:text-2xl text-white font-medium">
          {questions && questions[questionsIndex]?.pergunta}
        </h3>

        {questions &&
          questions[questionsIndex]?.itens.map((question, index) => (
            <>
              <div
                role="button"
                key={index}
                onClick={() => {
                  setVerificaResposta(true);
                  setIndexOfChoseOption(index);
                  // if (
                  //   question.includes(
                  //     `${questions[questionsIndex].resposta_correta}`
                  //   )
                  // ) {
                  //   setRespostaCorreta(true);
                  // }
                }}
                className={`text-sm sm:text-lg text-white font-bolf my-4 sm:my-6 bg-main px-2 py-2 rounded-xl cursor-pointer hover:bg-[#404c64]
              ${verificaCorreta(question, index)}`}
              >
                {question}
              </div>
            </>
          ))}

        <button
          className="w-[200px] absolute bottom-5 right-1/2 translate-x-1/2  bg-main text-center rounded-2xl py-4 text-white font-bold "
          onClick={() => {
            if (questionsIndex < questions?.length - 1) {
              console.log(questionsIndex);
              console.log(questions?.length);
              setVerificaResposta(false);
              setQuestionsIndex((prev) => prev + 1);
            }
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Questions;
