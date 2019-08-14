export const getDayString = epochTimeSeconds => {

  // epoch is multiplied by 1000 to convert to milliseconds
  const day = new Date(epochTimeSeconds * 1000).getDay();

  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "NA";
  };

};
