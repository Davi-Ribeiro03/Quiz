"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Console } from "console";
import Button from "@/components/button/Button";
import Loader from "@/components/loader/Loader";

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
    if (nivel === "facil") setQuestions(dados.data.facil);
    else if (nivel === "medio") setQuestions(dados.data.medio);
    if (nivel === "dificil") setQuestions(dados.data.dificil);
  };

  const verificaCorreta = (question: String, index: Number) => {
    console.log(index);
    if (question.includes(`${questions[questionsIndex].resposta_correta}`)) {
      return "bg-[#00EE00] hover:bg-[#00EE00]";
    }

    if (
      !question.includes(`${questions[questionsIndex].resposta_correta}`) &&
      index === indexOfChoseOption
    ) {
      return "bg-[#EE0000] hover:bg-[#EE0000]";
    }
  };

  useEffect(() => {
    verificaOptions();
    buscaQuestions();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="max-w-[80%] min-w-[80%]  max-h-[95%] sm:min-w-[40%] w-auto h-auto sm:min-h-[80%] bg-bg_card  shadow-2xl rounded-2xl p-8 relative">
        <span className="text-white absolute right-3 top-2 opacity-60">
          Pergunta {questionsIndex + 1} de {questions?.length}
        </span>

        {questions.length === 0 ? (
          <Loader />
        ) : (
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
                  className={`text-sm sm:text-lg text-white font-bolf my-4 sm:my-6  px-2 py-2 rounded-xl cursor-pointer 
              ${
                verificaResposta
                  ? verificaCorreta(question, index)
                  : "bg-main hover:bg-[#404c64]"
              }`}
                >
                  {question}
                </div>
              ))}
          </>
        )}

        <section className="flex gap-2 mt-12 justify-center ">
          {questionsIndex !== questions?.length - 1 && (
            <Button
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
            </Button>
          )}

          {questionsIndex === questions?.length - 1 && (
            <Button>Finalizar</Button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Questions;
