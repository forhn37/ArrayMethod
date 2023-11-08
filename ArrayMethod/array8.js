var fruits = ["사과", "바나나", "오렌지"];
var result = fruits.join(" ");

console.log(result); // "사과 바나나 오렌지"


// ! array.join(separator);
// ! separator: 배열 요소를 연결할 때 사용할 문자열 구분자를 지정합니다. 이 구분자는 요소 사이에 삽입됩니다.
// ! 문자열을 빈칸없이 합치고 싶을 때 seperator : ""(빈문자열)
// ! seperator 생략시 ,(콤마)로 연결됨
// ! 문자열을 한칸씩 띄고 싶을 때는 seperator : " "(한칸)