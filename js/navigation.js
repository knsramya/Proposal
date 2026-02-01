const screens = document.querySelectorAll('.screen');
const nextBtns = document.querySelectorAll('.next');

// Show first screen on load
screens.forEach(screen => screen.style.display = 'none');
document.querySelector('.screen[data-screen="-3"]').style.display = 'flex';

nextBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const nextScreen = btn.dataset.next;

    // If a button/link has no data-next (like the moving No button), do nothing
    if (!nextScreen) return;

    screens.forEach(screen => screen.style.display = 'none');

    const target = document.querySelector(`.screen[data-screen="${nextScreen}"]`);
    if (target) target.style.display = 'flex';
  });
});
