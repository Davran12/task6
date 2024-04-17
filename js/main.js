// ! ------------------ DOM -----------------
// ! #1
let h3 = document.querySelectorAll("h3");
h3.forEach((elem) => {
  elem.innerText += "!!!";
});
// ! #2
let h = document.querySelectorAll("h3");
h.forEach((elem) => {
  elem.style.color = "green";
});
// ! #3
let ul = document.createElement("ul");
for (let i = 1; i <= 30; i++) {
  let li = document.createElement("li");
  li.innerText = i + "-овечка";
  ul.appendChild(li);
}
document.body.appendChild(ul);
// ! #4
let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
  spans[i].classList.add("active");
}
// ! Задание Native JS
// ! #1
let div = document.querySelector(".container");
window.addEventListener("keydown", (e) => {
  if (e.key.toUpperCase() == "R") {
    div.style.backgroundColor = "red";
  } else if (e.key.toUpperCase() == "G") {
    div.style.backgroundColor = "green";
  } else if (e.key.toUpperCase() == "B") {
    div.style.backgroundColor = "Blue";
  } else if (e.key.toUpperCase() == "W") {
    div.style.backgroundColor = "White";
  }
  if (e.key.toUpperCase() == "B" && e.shiftKey) {
    div.style.backgroundColor = "black";
  } else if (e.key.toUpperCase() == "G" && e.shiftKey) {
    div.style.backgroundColor = "gray";
  }
});
// ! #2
let btn5 = document.querySelector("#btn5");
let i = 1;
function clickBtn() {
  i *= 2;
  console.log(i);
}
btn5.addEventListener("click", clickBtn);
// ! #4
let body1 = document.querySelector("body");
let select = document.querySelectorAll("select");
function color() {
  select.forEach((elem) => {
    elem.addEventListener("change", (e) => {
      body1.style.backgroundColor = `${e.target.value}`;
    });
  });
}
color();
