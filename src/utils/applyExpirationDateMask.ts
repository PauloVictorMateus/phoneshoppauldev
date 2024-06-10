export const applyExpirationDateMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .slice(0, 5);
};
