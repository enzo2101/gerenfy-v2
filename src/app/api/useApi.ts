export const useApi = () => ({
  signin: async (email: string, password: string) => {
    const response = await fetch(
      "",
      {
        method: "POST",
        headers: { key: "Accept", value: "application/json; version=v1_web" },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );
  },
});
