"use client";

import { setNivel, setOption } from "@/store/reducers/options";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const OptionsCard = ({
  options,
  href,
  category,
}: {
  options: string[];
  href: string;
  category: string;
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap flex-row justify-evenly  pt-10 gap-4 md:gap-[auto]">
      {options.map((option, index) => (
        <Link href={href} key={`${option}-${index}`}>
          <div
            className="flex justify-center items-center  bg-bg_card w-[300px] h-16 text-white rounded-2xl shadow-lg text-xl font-bold cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              if (category === "option")
                dispatch(setOption(option.toLocaleLowerCase()));
              if (category === "nivel")
                dispatch(
                  setNivel(
                    option
                      .toLocaleLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  )
                );
            }}
          >
            {option}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OptionsCard;
