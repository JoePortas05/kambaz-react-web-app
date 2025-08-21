import mongoose from "mongoose";

const MCQChoiceSchema = new mongoose.Schema({
  text: String,
  correct: Number,
});

const multipleChoiceSchema = new mongoose.Schema({
  choices: [MCQChoiceSchema],
});

const trueFalseSchema = new mongoose.Schema({
  answer: Boolean,
});

const fillInBlankSchema = new mongoose.Schema({
  answer: String,
});

const questionSchema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizzesModel" },
    question: String,
    type: {
      type: String,
      enum: ["True Or False", "Fill In The Blank", "Multiple Choice"],
      default: "Multiple Choice",
    },
    points: Number,
    mcInfo: multipleChoiceSchema,
    tfInfo: trueFalseSchema,
    blankInfo: fillInBlankSchema,
  },
  { collection: "questions" }
);

export default questionSchema;
