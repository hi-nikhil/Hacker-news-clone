export const calculateTimeDifference = (storyTime) => {
  const currentTime = new Date().getTime();
  const unixTimeInMillis = storyTime * 1000;
  const timeDifference = currentTime - unixTimeInMillis;

  let durationText;
  let hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  durationText = `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
  if (hoursDifference > 24) {
    hoursDifference = Math.floor(hoursDifference / 24);
    durationText = `${hoursDifference} day${hoursDifference > 1 ? "s" : ""} ago`;
  } else if (hoursDifference <= 0) {
    let minutesDifference = Math.floor(timeDifference / (1000 * 60));
    durationText = `${minutesDifference} minute${minutesDifference > 1 ? "s" : ""} ago`;
  }
  return durationText;
};

export const getHostName = (url) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    let result = hostname;

    if (hostname === "github.com") {
      const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
      if (pathSegments.length > 0) {
        result = `${hostname}/${pathSegments[0]}`;
      }
    }

    return result;
  } catch (error) {
    return null;
  }
};
