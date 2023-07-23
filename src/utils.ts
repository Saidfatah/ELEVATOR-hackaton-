export const formatSalary = (salary: number, currency: string) => {
  if (salary >= 1e6) {
    const million = (salary / 1e6).toFixed(1);
    return million.endsWith('.0') ? `${Math.floor(salary / 1e6)} M${currency}` : `${million} M${currency}`;
  } else if (salary >= 1e3) {
    const thousand = (salary / 1e3).toFixed(1);
    return thousand.endsWith('.0') ? `${Math.floor(salary / 1e3)} K${currency}` : `${thousand} K${currency}`;
  } else {
    return `${salary} ${currency}`;
  }
};