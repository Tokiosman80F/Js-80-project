window.onload = () => {
  main();
};

function main() {
  const backGround = document.querySelector("body");
  const btn = document.querySelector("#change-btn");

  btn.addEventListener("click", clickbtn);
  function clickbtn() {
    const genColor = genRGB();
    backGround.style.backgroundColor = genColor;
  }
}

function genRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
