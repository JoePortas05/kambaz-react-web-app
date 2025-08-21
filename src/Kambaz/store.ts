import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import quizzesReducer from "./Courses/Quiz/Quizzes/reducer";
import questionsReducer from "./Courses/Quiz/Questions/reducer";
import attemptsReducer from "./Courses/Quiz/Attempts/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    quizzesReducer,
    questionsReducer,
    attemptsReducer,
  },
});
export default store;
