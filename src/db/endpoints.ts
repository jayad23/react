import axios from "axios";

export const getUsers = () => axios.get(import.meta.env.VITE_GH_API);