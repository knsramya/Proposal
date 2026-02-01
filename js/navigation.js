const screens = document.querySelectorAll(".screen");

// Hide all screens
function hideAll() {
  screens.forEach((screen) => (screen.style.display = "none"));
}

// Show one screen safely
function showScreen(id) {
  hideAll();
  const target = document.querySelector(`.screen[data-screen="${id}"]`);
  if (!target) {
    console.error(`Screen not found: ${id}`);
    return;
  }
  target.style.display = "flex";
}

// Start at your first question
document.addEventListener("DOMContentLoaded", () => {
  showScreen("-3");

  // Event delegation: works even when clicking on images/text inside the <a>
  document.getElementById("app").addEventListener("click", (e) => {
    const btn = e.target.closest("a.next");
    if (!btn) return;

    e.preventDefault();

    const nextId = btn.dataset.next;

    // If there is no data-next (like the moving No button), ignore it
    if (!nextId) return;

    showScreen(nextId);
  });
});
