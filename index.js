const calcAge = (age) => {
  const YEAR_DAYS = 365;
  let nDay = (age !== 0) ? (YEAR_DAYS * age) : 0;
  return nDay;
}

console.log(calcAge(0));

/*
calcAge(65) ➞ 23725
calcAge(0) ➞ 0
calcAge(20) ➞ 7300 
*/