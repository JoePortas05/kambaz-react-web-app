import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;

export const getQuizzes = async (cid: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${cid}/quizzes`
  );
  return response.data;
};

export const getQuizById = async (qid: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${qid}`);
  return response.data;
};

export const createQuiz = async (cid: string, payload: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/courses/${cid}/quizzes`,
    payload
  );
  return response.data;
};

export const deleteQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.delete(
    `${QUIZZES_API}/${quizId}`
  );
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const { data } = await axiosWithCredentials.put(
    `${QUIZZES_API}/${quiz._id}`,
    quiz
  );
  return data;
};
