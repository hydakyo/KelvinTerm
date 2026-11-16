function setupPreviewAppearance() {
  const preview = document.querySelector(".app-preview");
  const buttons = document.querySelectorAll(".appearance-btn");
  if (!preview || !buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme === "light" ? "light" : "dark";
      preview.dataset.previewTheme = theme;
      buttons.forEach(item => item.classList.toggle("is-active", item === button));
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
setupPreviewAppearance();
