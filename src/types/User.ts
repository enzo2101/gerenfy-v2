export type User = {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: Avatar;
  type: string;
  created: string; // Pode ser uma string de data, se precisar ser analisada, ou um objeto Date
  modified: string; // Pode ser uma string de data, se precisar ser analisada, ou um objeto Date
  role: string;
};


export type Avatar = {
  id: number;
  max: string;
  medium: string;
  low: string;
}

export type Token = {
  access: string;
  refresh: string;
}