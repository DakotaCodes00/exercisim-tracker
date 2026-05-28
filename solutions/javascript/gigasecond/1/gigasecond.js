//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  let futureDate = new Date(startDate);
  futureDate.setTime(futureDate.getTime() + (1000000000*1000));
  return futureDate;
};
