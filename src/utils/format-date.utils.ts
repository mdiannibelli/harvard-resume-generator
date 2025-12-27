// Format date from YYYY-MM to "MMM YYYY" format
export const formatDate = (dateString: string, months: string[]): string => {
  if (!dateString || !months) return "";
  const [year, month] = dateString.split("-");
  const monthName = months[parseInt(month) - 1];
  return `${monthName} ${year}`;
};
