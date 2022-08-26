const ftoc = farenheit => {
  const farenheitTocelcius = (farenheit - 32) / 1.8;
  return Math.round(farenheitTocelcius * 10) / 10;
};

const ctof = celcius => {
  const celciusToFarenheit = (celcius * 1.8) + 32;
  return Math.round(celciusToFarenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
