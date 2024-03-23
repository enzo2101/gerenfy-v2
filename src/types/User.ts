export type User = {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: {
    id: number;
    max: string;
    medium: string;
    low: string;
  },
  type: string;
  created: string; // Pode ser uma string de data, se precisar ser analisada, ou um objeto Date
  modified: string; // Pode ser uma string de data, se precisar ser analisada, ou um objeto Date
  role: string;
};