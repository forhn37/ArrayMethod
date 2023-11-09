const numbers = [1, 2, 3, 4];

const hasEvenNumber = numbers.some(function(element) {
  return element % 2 === 0;
});

console.log("배열에 짝수가 포함되어 있는가?", hasEvenNumber); // 배열에 짝수가 포함되어 있는가? true

// ! array.some(predicate())