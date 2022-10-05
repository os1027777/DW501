//boom.js

var board = new Array(400);
board.fill(0); //배열에 채우기

for (var i = 0; i < 200; ) {
  let pos = Math.floor(Math.random() * 400);
  if (board[pos] != 1) {
    board[pos] = 1;
    i++;
  }
}

window.onload = function () {
  var table = "<table>";
  for (var i = 0; i < 20; i++) {
    table += "<tr>";
    for (var k = 0; k < 20; k++) {
      table += "<td class=bm data-idx=" + (i * 20 + k) + "></td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("wrap").innerHTML = table;

  var bm = document.getElementsByClassName("bm");

  //alert(bm.length);
  //bm[0].style.background = 'red';
  for (var i in bm) {
    bm[i].addEventListener("click", function () {
      let n = this.dataset.idx;
      if (board[n] == 1) {
        this.style.background =
          "url(./image501/boom.png) no-repeat center center";
        this.style.backgroundSize = "cover";
        // this.innerHTML = "<img src='./image501/boom.png'>";
      } else this.style.background = "rgb(230,230,230)";
    });
  }
};
