import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const createQuestion = (question) => {
  const newQuestion = { ...question, _id: uuidv4() };
  return model.create(newQuestion);
};

export const findAllQuestions = () => model.find();

export const findQuestionById = (questionId) => model.findById(questionId);

export const findQuestionsByQuiz = (quiz) => model.find({ quiz: quiz });

export const updateQuestion = (questionId, question) =>
  model.updateOne({ _id: questionId }, { $set: question });

export const deleteQuestion = (questionId) =>
  model.deleteOne({ _id: questionId });
