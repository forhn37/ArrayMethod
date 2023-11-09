// 테스트 함수: 숫자가 5보다 큰지 확인
function isGreaterThanFive(element) {
  return element > 5
}
// 위의 연산자의 리턴값은 true || false
// 배열 생성
const numbers = [1, 3, 7, 2, 9, 4];
const othernumbers = [1, 2, 3, 4];
// find 메서드 사용
const firstNumberGreaterThanFive = numbers.find(isGreaterThanFive);
const testnumber = othernumbers.find(isGreaterThanFive);
// 결과 출력
console.log("첫 번째로 5보다 큰 숫자:", firstNumberGreaterThanFive);
console.log(testnumber);

console.log(isGreaterThanFive())