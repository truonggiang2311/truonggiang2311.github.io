let Alert = document.body.querySelector(".Alert");
let button = document.body.querySelector("button");
button.onclick = function () {
  let p = document.createElement("p");
  p.innerHTML="Hello A Ba Dep Chai";
  Alert.append(p);
  let time = setInterval(function () {
  Alert.removeChild(p)
},2000)
}