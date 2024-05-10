"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Console } from "console";
import Button from "@/components/button/Button";
import Loader from "@/components/loader/Loader";
import { OptionsQuizProps } from "../interfaces/storeProps";
import { useQuestionsData } from "../hooks/useQuestionsData";
import AskAndQuestions from "@/components/askandQuestions/AskAndQuestions";
import { verificaOptions } from "@/utils/verificaOptions";

const Questions = () => {
  const router = useRouter();
  const { option, nivel } = useSelector(
    (state: OptionsQuizProps) => state.optionsQuiz
  );
  const { data: questions, isLoading } = useQuestionsData(option, nivel);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [indexOfChoseOption, setIndexOfChoseOption] = useState(0);
  //Esse state é usado para fazer um controle, ao selecionar o item, o state mudará para true, dessa forma irá desparar a função que analisa a resposta
  const [verificaResposta, setVerificaResposta] = useState(false);

  useEffect(() => {
    verificaOptions(option, nivel, router);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="max-w-[80%] min-w-[80%]  max-h-[95%] sm:min-w-[40%] w-auto h-auto  bg-bg_card  shadow-2xl rounded-2xl p-8 relative">
        <span className="text-white absolute right-3 top-2 opacity-60">
          Pergunta {questionsIndex + 1} de {questions?.length}
        </span>

        {isLoading ? (
          <Loader />
        ) : (
          <AskAndQuestions
            questions={questions}
            questionsIndex={questionsIndex}
            indexOfChoseOption={indexOfChoseOption}
            setIndexOfChoseOption={setIndexOfChoseOption}
            setVerificaResposta={setVerificaResposta}
            verificaResposta={verificaResposta}
          />
        )}

        <section className="flex gap-2 mt-12 justify-center ">
          {questions !== undefined &&
            questionsIndex !== questions.length - 1 && (
              <Button
                onClick={() => {
                  if (
                    questions !== undefined &&
                    questionsIndex < questions?.length - 1
                  ) {
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

          {questions !== undefined &&
            questionsIndex === questions?.length - 1 && (
              <Button>Finalizar</Button>
            )}
        </section>
      </div>
    </div>
  );
};

export default Questions;
