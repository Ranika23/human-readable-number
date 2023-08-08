module.exports = function toReadable (number) {
  const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const twentyToNinety = ['0', '1', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number < 10) return oneToNine[number];
  if (number > 9 && number < 20) return tenToNineteen[number % 10];
  if (number > 19 && number < 100 && number % 10 != 0) return twentyToNinety[Math.floor(number/10)] + ' ' + oneToNine[number % 10];
  if (number > 19 && number < 100 && number % 10 == 0) return twentyToNinety[Math.floor(number/10)]
  if (number > 99 && number < 1000 && number % 100 > 19 && number % 10 != 0) return oneToNine[Math.floor(number/100)] + ' hundred ' + twentyToNinety[(Math.floor(number/10)) % 10] + ' ' + oneToNine[number % 10];
  if (number > 99 && number < 1000 && number % 100 < 20 && number % 100 > 9) return oneToNine[Math.floor(number/100)] + ' hundred ' + tenToNineteen[number % 10];
  if (number > 99 && number < 1000 && number % 100 < 10 && number % 10 != 0 ) return oneToNine[Math.floor(number/100)] + ' hundred ' + oneToNine[number % 10];
  if (number > 99 && number < 1000 && number % 100 == 0) return oneToNine[Math.floor(number/100)] + ' hundred';
  if (number > 99 && number < 1000 && number % 100 != 0  && number % 10 == 0) return oneToNine[Math.floor(number/100)] + ' hundred ' + twentyToNinety[(Math.floor(number/10)) % 10];
}
