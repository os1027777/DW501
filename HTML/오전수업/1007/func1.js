// 진행 순서
// total함수 실행 -> score_input 함수의 kor,mat,eng 변수값을 total에 전달
// -> total함수에서 kor,mat,eng의 합을 tot변수에 저장
// -> tot변수의 값 total 함수 실행 위치로 반환 (return)
// -> score_input함수에서 total함수로부터 반환된 값 tot변수에 저장
// -> score_input함수에서 avg함수 실행 -> score_input함수의 tot변수에 저장
// -> score_input함수의 tot변수를 avg함수에 전달
// -> avg함수에서 전달받은 데이터를 tot변수에 저장

// return -> 반환값은 1개만 가능하다. 여러개를 반환하고 싶은 경우 배열을 사용할 것

function score_input() {
  var kor = 99;
  var mat = 89;
  var eng = 79;
  // 총점과 평균 구하기
  total(kor, mat, eng);

  return [kor, mat, eng];
}

function total(kor, mat, eng) {
  // 총점계산
  var tot = kor + mat + eng;
  avg(tot);
}

function avg(tot) {
  // 평균계산
  var res = tot / 3;
  result_print(res);
}

function result_print(res) {
  // 결과출력
  document.write("평균 :" + res);
}
