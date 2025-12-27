export const shortenUrl = (url: string): string => {
  if (!url) return url;
  try {
    let shortened = url.replace(/^https?:\/\//i, "");
    shortened = shortened.replace(/^www\./i, "");
    shortened = shortened.replace(/\/$/, "");
    return shortened;
  } catch {
    return url;
  }
};
