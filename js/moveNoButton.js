function moveRandomEl(elm){
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 70 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 70 + 10) + "%";
  elm.style.backgroundColor = "red"; // make background red on move
}

const moveRandomBtns = document.querySelectorAll('#move-random');
moveRandomBtns.forEach(btn => {
  btn.addEventListener("mouseenter", e => moveRandomEl(e.target));
});
