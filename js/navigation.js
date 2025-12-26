const screens = document.querySelectorAll('.screen');
const nextBtns = document.querySelectorAll('.next');

// Show first screen on load
screens.forEach(screen => screen.style.display = 'none');
document.querySelector('.screen[data-screen="1"]').style.display = 'flex';

nextBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const nextScreen = btn.dataset.next;
    screens.forEach(screen => screen.style.display = 'none');
    document.querySelector(`.screen[data-screen="${nextScreen}"]`).style.display = 'flex';
  });
});
