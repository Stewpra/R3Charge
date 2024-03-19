function getTimeUnits(time) {
  function getHours(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    return hours;
  }

  function moduloFromHour(totalSeconds) {
    let modulo = totalSeconds % 3600;
    return modulo;
  }

  function getMinutes(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    return minutes;
  }

  function moduloFromMinutes(totalSeconds) {
    let modulo = totalSeconds % 60;
    return modulo;
  }

  const totalHours = getHours(time);
  const remainingFromHours = moduloFromHour(time);

  const totalMinutes = getMinutes(remainingFromHours);
  const remainingFromMinutes = moduloFromMinutes(remainingFromHours);

  const totalSeconds = remainingFromMinutes;
  return { totalHours, totalMinutes, totalSeconds };
}
