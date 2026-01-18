document.addEventListener("DOMContentLoaded", function () {
  if (window.feather && typeof window.feather.replace === "function") {
    window.feather.replace();
  }

  var heroTitle = document.querySelector(".hero-title");

  if (heroTitle) {
    var fullText = heroTitle.textContent;
    var current = "";
    var index = 0;
    var direction = 1;
    var pauseAtEnds = 900;

    heroTitle.setAttribute("aria-label", fullText);
    heroTitle.textContent = "";

    function stepType() {
      current = fullText.slice(0, index);
      heroTitle.textContent = current;

      index += direction;

      if (direction > 0 && index > fullText.length) {
        direction = -1;
        window.setTimeout(stepType, pauseAtEnds);
        return;
      }

      if (direction < 0 && index < 0) {
        direction = 1;
        index = 0;
        window.setTimeout(stepType, pauseAtEnds);
        return;
      }

      window.setTimeout(stepType, 55);
    }

    window.setTimeout(stepType, 350);
  }
});
