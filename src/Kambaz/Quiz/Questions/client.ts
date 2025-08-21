import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;

export const getQuestions = async (qid: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/quizzes/${qid}/questions`
  );
  return response.data;
};

export const createQuestion = async (qid: string, payload: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/quizzes/${qid}/questions`,
    payload
  );
  return response.data;
};

export const deleteQuestion = async (questionId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUESTIONS_API}/${questionId}`
  );
  return response.data;
};

export const updateQuestion = async (question: any) => {
  const { data } = await axiosWithCredentials.put(
    `${QUESTIONS_API}/${question._id}`,
    question
  );
  return data;
};
