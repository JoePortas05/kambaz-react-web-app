import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    _id: String,
    description: String,
    title: String,
    course: { type: String, ref: "CourseModel", required: true },

    type: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    published: { type: Boolean, default: false },
    points: Number,

    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },

    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    attempts: { type: Number, default: 1 },
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockAfterAnswering: { type: Boolean, default: false },
    due: Date,
    from: Date,
    until: Date,
  },
  { collection: "quizzes" }
);

export default schema;
