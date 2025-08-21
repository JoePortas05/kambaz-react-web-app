import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  question: { type: String, ref: "QuestionModel" },
  mcChoice: Number,
  tfChoice: Boolean,
  blankAnswer: String,
});

const schema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizzesModel" },
    user: { type: String, ref: "UserModel" },
    number: Number,
    answer: [answerSchema],
    points: Number,
  },
  { collection: "attempts" }
);
export default schema;
