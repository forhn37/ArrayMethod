const arr = [1, 2, 3];
console.log(arr.indexOf(2,2)); // 1
console.log(arr.findIndex((element) => element === 2)); // 1
console.log(arr.findIndex(function (element) {
  return element === 2
}))

// ? 반환값은 배열안에서 찾는 값의 인덱스 
// ? 없을때는 -1을 값으로 냄
// ? 없을때인 값 -1을 다양한 조건식으로 확인하여 인덱스가 있는지 없는지 확인함
// ?  만약 배열에 중복된 요소가 있다면, 첫 번째로 발견된 요소의 인덱스를 반환
// ? indexof와 findindex의 차이점 
// ? parameter에 되는 것이 element냐? predicate냐?