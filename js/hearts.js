function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const emojis = ["❤️","💋","😘"];
  heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (Math.random()*8 +2)+"s";
  document.body.appendChild(heart);
  setTimeout(()=> heart.remove(),10000);
}

// Observe final screen visibility
const finalScreen = document.querySelector('.screen[data-screen="yes"]');
const observer = new MutationObserver(() => {
  if(finalScreen.style.display !== "none"){
    for(let i=0;i<80;i++) createHeart();
  }
});
observer.observe(finalScreen,{ attributes:true, attributeFilter:['style'] });
