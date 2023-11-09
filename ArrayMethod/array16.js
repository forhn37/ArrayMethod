const numbers = [1, 2, 3, 4];

const doubleArrayWithPrevious = numbers.map(function (element, index, array) {
  // 만약 인덱스가 0보다 크면 현재 요소와 이전 요소를 더하고, 그렇지 않으면 현재 요소만 사용
  if (index > 0) {
    console.log(`현재 요소: ${element}, 이전 요소: ${array[index - 1]}`);
    return element + array[index - 1];
  } else {
    console.log(`현재 요소: ${element} (첫 번째 요소)`);
    return element;
  }
});

console.log("이전 요소와 현재 요소를 더한 값들:", doubleArrayWithPrevious);


// ? 매개변수의 첫번째 : 콜백함수 혹은 함수 선언문도 가능
// ? 매개변수의 두번째 : 인덱스, 인덱스도 연산에 사용가능
// ? 매개변수의 세번째 : 배열, 배열전체도 인덱스를 활용해 연산에 사용가능