document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-nfc-label]").forEach(function (card) {
    card.addEventListener("click", function () {
      var note = document.getElementById("nfc-note");
      if (note) {
        note.textContent = "Exemple: " + card.getAttribute("data-nfc-label") + " · destí configurable";
      }
    });
  });
});
