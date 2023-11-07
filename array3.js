var fruits = ["사과", "바나나", "오렌지"];
var firstFruit = fruits.shift();
// ! 형식은 pop()과 같다 
// ! 알아야 할 것은 앞이냐(shift) 뒤냐이다(pop)
console.log(fruits); // ["바나나", "오렌지"]
console.log(firstFruit); // "사과"