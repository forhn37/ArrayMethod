// 테스트 함수: 숫자가 5보다 큰지 확인
function isGreaterThanFive(element) {
  return element > 10;
}

// 배열 생성
const numbers = [1, 3, 7, 2, 9, 4];

// findIndex 메서드 사용
const firstIndexGreaterThanFive = numbers.findIndex(isGreaterThanFive);

// 결과 출력
console.log("첫 번째로 5보다 큰 숫자의 인덱스:", firstIndexGreaterThanFive);
