const formatNumberToPrice = (number) => {
  const numberToDigit = number.toFixed(2);
  const turningIntoString = numberToDigit.toString();
  const numberFormatedToPrice = turningIntoString.replace('.', ',');
  return numberFormatedToPrice;
};

export default formatNumberToPrice;
