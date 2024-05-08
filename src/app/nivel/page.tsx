import OptionsCard from "@/components/optionsCard/OptionsCard";
import Link from "next/link";
import React from "react";

const Nivel = () => {
  return (
    <div>
      <h1 className="text-white text-6xl font-normal text-center pt-8">
        Welcome to the <strong className="font-extrabold">Quiz</strong>
      </h1>
      <Link href="/">Voltar</Link>
      <p className="w-full text-center text-xl pt-32 text-white font-medium">
        Select the desired level
      </p>
      {/* {optionsQuiz} */}

      <OptionsCard
        options={["Fácil", "Médio", "Dificil"]}
        href="/questions"
        category="nivel"
      />
    </div>
  );
};

export default Nivel;
