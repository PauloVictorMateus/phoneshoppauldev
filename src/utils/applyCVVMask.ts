export const applyCVVMask = (value: string) => {
  return value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1");
};
