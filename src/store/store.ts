import { configureStore } from '@reduxjs/toolkit'
import optionsQuizSlice from "./reducers/options"

const store =  configureStore({
    reducer: {
        optionsQuiz: optionsQuizSlice
    }
  })

export default store