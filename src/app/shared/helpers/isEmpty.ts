export const isEmpty = (val: any): boolean => {
  if (typeof val === "string") {
    return val.trim().length === 0 || val === null;
  }
  return val.length === 0 || val === null;
};
