import {createSlice} from "@reduxjs/toolkit";

const initialState={
    option: '',
    nivel: ''
}

const optionsQuizSlice = createSlice({
    name:"optionsQuiz",
    initialState,
    reducers:{
        setOption(state,{payload}) {
             state.option = payload
             return state
        },
        setNivel(state, {payload}){
            state.nivel = payload
            return state

        }
    }
})

export const {setOption, setNivel} = optionsQuizSlice.actions;
export default optionsQuizSlice.reducer;