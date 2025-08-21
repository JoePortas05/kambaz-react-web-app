import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ATTEMPTS_API = `${REMOTE_SERVER}/api/attempts`;

export const getAttempts = async (qid: string, user: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/quizzes/${qid}/attempts`,
    { params: { user: user } }
  );
  return response.data;
};

export const getRecentAttempt = async (qid: string, user: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/quizzes/${qid}/attempts/recent`,
    { params: { user: user } }
  );
  return response.data;
};

export const getUsingAttempt = async (qid: string, user: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/quizzes/${qid}/attempts/using`,
    { params: { user: user } }
  );
  return response.data;
};

export const createAttempt = async (qid: string, payload: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/quizzes/${qid}/attempts`,
    payload
  );
  return response.data;
};

export const deleteAttempt = async (attemptId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ATTEMPTS_API}/${attemptId}`
  );
  return response.data;
};

export const updateAttempt = async (attempt: any) => {
  const { data } = await axiosWithCredentials.put(
    `${ATTEMPTS_API}/${attempt._id}`,
    attempt
  );
  return data;
};
