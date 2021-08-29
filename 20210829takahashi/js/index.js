// JavaScript 確認テスト　問題１
console.log('問題１');
const array = [2, 4, 7, 5, 4, 3, 8];
const result1 = array.filter(function (item, index) {
  return array.indexOf(item) === index;
});
console.log(result1);

// JavaScript 確認テスト　問題2
console.log('問題2');
const judgeYear = [2020, 2021];
judgeYear.forEach(function (year) {
  if (leapYear(year)) {
    console.log(`${year}年はうるう年です`);
  } else {
    console.log(`${year}年はうるう年ではありません`);
  }
});
// 関数　うるう年判定
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};


