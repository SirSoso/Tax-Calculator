import axios, { type AxiosInstance } from "axios";

const PORT = 5001;
const baseURL = `http://localhost:${PORT}`;

export const instanceDB: AxiosInstance = axios.create({ baseURL });
