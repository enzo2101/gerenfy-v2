import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Accept": "application/json; version=v1_web",
    "Content-Type": "application/json",
},
})

export const useApi = () => ({

  validateToken: async (token: string) => {

    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }

    const response = await api.get("/auth/profile/", config);
    return response.data;
  },

  signin: async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login/", {
        email,
        password,
      });
      if(response) {
        return response.data;
      }
    }
    catch (error) {
      console.log(error);
    }
  },
});
