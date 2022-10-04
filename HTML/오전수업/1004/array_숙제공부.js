//window.onload : html문서의 모든내용이 브라우저에 표시된 이후에 동작
//window객체 : 브라우저
//window에만 onload 있는 거 아님, 모든 객체 (html 태그포함)에 존재
// load -> 불러오기 ,즉 onload는 불러오는 작업이 끝났을 때 동작

var item_list = [
  "핸드폰거치대",
  "급속충전기",
  "C타입케이블",
  "강화유리",
  "스마트폰 링",
  "스마트폰 커버",
];
window.onload = function () {
  var li = document.getElementsByClassName("item");
  // var li = document.querySelectorAll(".item"); 위에든 아래든 다 배열로 가져옴.
  // querySelectorALL 경우 .붙이기!!

  // for ( var i=0; i< li.length; i++)
  for (var i in li) {
    // for ( in) :배열구조에서 사용
    li[i].innerHTML = item_list[i];
  }
};

var item = new Array();
function enroll() {
  var name = document.getElementById("item_name");
  // var name = document.querySelector("#item_name");

  var prop = name.value;
  item.push(prop);

  var price = document.querySelector("#item_price");

  var ul = document.querySelector("#item_list");

  var li = document.createElement("li"); // li 태그 생성

  li.innerHTML = item[item.length - 1];
  // li.innerHTML = item[item.length - 1] + ""+price.value+"원"; // li 태그 안에 제품명 삽입

  var b = document.createElement("b");
  b.innerHTML = price.value + "원";
  li.appendChild(b);

  var bt = Document.createElement("button");
  bt.setAttribute("class", "del_bt");
  bt.setAttribute("onclick", "del_(this)");

  bt.innerHTML = "삭제";
  li.appendChild(bt);

  ul.appendchild(li); // ul 채그 자식으로 li 추가
  // 새 태그(엘리먼트,요소,객체)를 생성하는 방법 :createElement()함수

  // 태그(엘리먼트) 내부에 새로운 내용으로 삽입하는 방법 : innerHTML
  // 태그(엘리먼트) 내부에 새로운 내용을 추가하는 방법 : appendchild
  // 태그(엘리먼트) 내부에 텍스트 형식으로 삽입하는 방법 : appendchild(textnode)
  // # a div
}
function del(obj) {
  var parent_li = obj.parentNode;
  var parent_ul = parent_li.parentNode;
  parent_ul.removeChild(parent_li);
}
/*
  
         document.createElment : 새 태그 생성
         예시) document.createElement("div"); div 생성
  
         appendchild : 지식태그로 추가
         예시) p = document.createElement("p");
         body.appendChild(p); : body에 p태그 추가
  
         setAttribute : 채그에 새속성 추가
         예시) p.setAttribute("id","ppp"); 해당 태그에 id=ppp 삽입
  
         removeChild : 지식 태그 삭제
         예시) body.removeChild(p); : body 채그에서 해당 태그 삭제
  
         */
