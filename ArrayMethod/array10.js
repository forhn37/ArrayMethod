// const arr = [3, 1, 2];
// console.log(arr); // [3, 1, 2]
// const array = arr.sort();
// console.log(array)
// console.log(arr); // [1, 2, 3]


// ! sort()의 기본 사용시 유니코드의 순서인 오름차순으로 정리
// ! 기존 배열 정렬됨
// ! 배열에 sort() 메서들 사용한 리턴값도 정렬된 배열. 


const arr1 = [10, 2, 5, 1, 9];

arr1.sort((a, b) => a - b);
console.log(arr1); // [1, 2, 5, 9, 10]

// ? 매개변수로 콜백의 실행문을 a-b로 적용시 오름차순

const arr2 = [10, 2, 5, 1, 9];

arr2.sort((a, b) => b - a);
console.log(arr2); // [10, 9, 5, 2, 1]

// ? 매개변수로 콜백의 실행문을 b-a로 적용시 내림차순 
