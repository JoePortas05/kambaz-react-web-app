import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  questions: [],
};
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, { payload: questions }) => {
      state.questions = questions;
    },

    addQuestion: (state, { payload: question }) => {
      const newQuestion: any = {
        _id: uuidv4(),
        quiz: question.quiz,
        question: question.question,
        type: question.type,
        points: question.points,
        mcInfo: question.mcInfo,
        tfInfo: question.tfInfo,
        blankInfo: question.blankInfo,
      };
      state.questions = [...state.questions, newQuestion] as any;
    },
    deleteQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.filter(
        (q: any) => q._id !== questionId
      );
    },
    updateQuestion: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
      ) as any;
    },
    editQuestion: (state, { payload: questionId }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === questionId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});
export const {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  editQuestion,
  setQuestions,
} = questionsSlice.actions;
export default questionsSlice.reducer;
