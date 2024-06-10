export const applyCreditCardMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d{1,2})/, "$1 $2")
    .replace(/(\d{4})\d+?$/, "$1");
};
