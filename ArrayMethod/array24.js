const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat(2);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// ? flat, map, flatmap을 따로 떨어뜨리지 말고 같이 암기
// ? flat : 평탄화
// ? map : 실행 후 새배열로 만듬
// ? flatmap : 둘의 작용을 다함