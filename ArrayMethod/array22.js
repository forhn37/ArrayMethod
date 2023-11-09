const fruits = ['apple', 'banana', 'orange'];

const includesBanana = fruits.includes('banana', 2);
console.log(includesBanana); // true

const includesGrape = fruits.includes('grape');
console.log(includesGrape); // false

// ? indexof와 다른 점은 indexof는 그 요소가 없을때 -1을 리턴하고 -1이면 우리는 요소가 없다고 판단
// ? includes는 -1이라는 간접값이 아닌 true라는 직접적인 값을 준다. 