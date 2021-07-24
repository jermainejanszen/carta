export const secondsToHours = (time: number): string => {
  const hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60).toString();
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  let seconds = Math.floor((time % 3600) % 60).toString();
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return `${hours}:${minutes}:${seconds}`;
};
