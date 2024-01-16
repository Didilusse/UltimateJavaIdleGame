 //localStorage.setItem("cps", cps);
// // var = localStorage.getItem("key");
let cps = localStorage.getItem("cps");
var date = new Date();
//JB stands for JavaBucks
let JB = localStorage.getItem("currency");
let JB_display = 0;
const JB_per_millisecond = 0.001;
let last_time = null;
let total_time = 0;

window.onload = function () {
    JB_display = document.getElementById("currency_time");
}

function updateMyGame(delta_time, total_time) {
  JB += JB_per_millisecond * delta_time;
  JB_display.innerHTML = JB.toFixed(0);
}
setInterval(function gameLoop() {
  const current_time = Date.now();
  if (last_time === null) {
    last_time = current_time;
  }
  const delta_time = current_time - last_time;
  total_time += delta_time;
  last_time = current_time;
  updateMyGame(delta_time, total_time);
}, 1000);

function click(){
    JavaBucks = JavaBucks++;
}
