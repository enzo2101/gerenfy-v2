import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Accept": "application/json; version=v1_web",
    "Content-Type": "application/json"
},
})

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    const response = await api.post("/auth/login/", {
      email,
      password,
    });
    console.log(response.data)
  },
});
