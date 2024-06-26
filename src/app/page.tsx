import OptionsCard from "@/components/optionsCard/OptionsCard";
import axios from "axios";
import React from "react";

const Home = () => {
  return (
    <main>
      <h1 className="text-white text-6xl font-normal text-center pt-8">
        Welcome to the <strong className="font-extrabold">Quiz</strong>
      </h1>
      <p className="w-full text-center text-xl pt-32 text-white font-medium">
        Select the theme below
      </p>

      <OptionsCard
        options={["Frontend", "Backend"]}
        href="/nivel"
        category="option"
      />
    </main>
  );
};

export default Home;
