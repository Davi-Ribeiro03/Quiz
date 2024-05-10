

import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const buscaQuestions = async (option:string, nivel:string):Promise<QuestionsProps[]> => {

    const response: QuestionsResponse = await axios.get(
        `https://quiz-servidor.vercel.app/${option}`
      );
      if (nivel === "facil") return response.data.facil;
      else if (nivel === "medio") return response.data.medio;
      else if (nivel === "dificil") return response.data.dificil;
      else return []

  };


export function useQuestionsData(option:string, nivel:string){
    const query = useQuery({
        queryFn: () => buscaQuestions(option,nivel),
        queryKey:['questions-data']
    })

    return query
}