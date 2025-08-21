import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  attempts: [],
};
const attemptsSlice = createSlice({
  name: "attempts",
  initialState,
  reducers: {
    setAttempts: (state, { payload: attempts }) => {
      state.attempts = attempts;
    },

    addAttempt: (state, { payload: attempt }) => {
      const newAttempt: any = {
        _id: uuidv4(),
        quiz: attempt.quiz,
        user: attempt.user,
        number: attempt.number,
        answer: attempt.answer,
        points: attempt.points,
      };
      state.attempts = [...state.attempts, newAttempt] as any;
    },
    deleteAttempt: (state, { payload: attemptId }) => {
      state.attempts = state.attempts.filter((q: any) => q._id !== attemptId);
    },
    updateAttempt: (state, { payload: attempt }) => {
      state.attempts = state.attempts.map((a: any) =>
        a._id === attempt._id ? attempt : a
      ) as any;
    },
    editAttempt: (state, { payload: attemptId }) => {
      state.attempts = state.attempts.map((a: any) =>
        a._id === attemptId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const {
  addAttempt,
  deleteAttempt,
  updateAttempt,
  editAttempt,
  setAttempts,
} = attemptsSlice.actions;
export default attemptsSlice.reducer;
