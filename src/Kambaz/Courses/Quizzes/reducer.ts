import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quizzes: db.quizzes,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: uuidv4(),
        title: quiz.title,
        course: quiz.course,
        modules: quiz.modules,
        available: quiz.available,
        due: quiz.due,
        points: quiz.points,
        description: quiz.description,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((m: any) => m._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((m: any) =>
        m._id === quiz._id ? quiz : m
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
