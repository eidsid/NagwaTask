import axios from "axios";
let api = "http://localhost:5000/api/";
export const getWords = axios.get(`${api}words`);
export const getRank = (score: number) => axios.post(`${api}rank`, { score });
