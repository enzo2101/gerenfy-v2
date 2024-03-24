export const FormatDate = (date: string) => {
  const dateTime = new Date(date);
  
  return new Intl.DateTimeFormat("pt-BR").format(dateTime)
};
