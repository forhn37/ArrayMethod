// 테스트 함수: 숫자가 5보다 큰지 확인
function isGreaterThanFive(element) {
  return element > 5;
}

// 배열 생성
const numbers = [1, 3, 7, 2, 9, 4];

// filter 메서드 사용
const numbersGreaterThanFive = numbers.filter(isGreaterThanFive);

// 결과 출력
console.log("5보다 큰 숫자들:", numbersGreaterThanFive);
