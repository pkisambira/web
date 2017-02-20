
function add() {
  var x =document.getElementById('x').value;
  var y =document.getElementById('y').value;
  var result =document.getElementById('result');
  result.innerHTML = parseInt(x) + parseInt(y);
}
function clock() {
  time.innerHTML= new Date();
}
setInterval(clock,2000);
