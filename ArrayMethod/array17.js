const number = [1, 2, 3, 4];

numbers.forEach(function(element) {
  const squared = element * element;
  console.log(`${element}의 제곱은 ${squared}`);
});


const numbers = [1, 2, 3, 4];

const result = numbers.forEach(function(element) {
  console.log(element * 2);
});

console.log("forEach 메서드의 리턴값:", result); // forEach 메서드의 리턴값: undefined
// ? forEach는 return을 무시하고 순회하기 때문에 리턴값은 무조건 undefined;