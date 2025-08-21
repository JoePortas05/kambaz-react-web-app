import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const createAttempt = (attempt) => {
  const newAttempt = { ...attempt, _id: uuidv4() };
  return model.create(newAttempt);
};

export const findAllAttempts = () => model.find();

export const findAttemptsById = (attemptId) => model.findById(attemptId);

export const findAttemptsByStudentAndQuiz = (quiz, user) =>
  model.find({ quiz: quiz, user: user });

export const findBestAttemptByStudentAndQuiz = (quiz, user) =>
  model.findOne({ quiz: quiz, user: user }).sort({ points: -1 });

export const findMostRecentByStudentAndQuiz = (quiz, user) =>
  model.findOne({ quiz: quiz, user: user }).sort({ number: -1 });

export const updateAttempt = (attemptId, attempt) =>
  model.updateOne({ _id: attemptId }, { $set: attempt });

export const deleteAttempt = (attemptId) => model.deleteOne({ _id: attemptId });
