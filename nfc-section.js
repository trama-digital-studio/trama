(function () {
  function addNfcNavLink() {
    var root = document.getElementById("root");
    var target = root && Array.from(root.querySelectorAll("a")).find(function (link) {
      return link.getAttribute("href") === "#serveis" || link.textContent.trim() === "Services";
    });
    if (!target || document.querySelector("[data-trama-nfc-nav]")) return;

    var link = target.cloneNode(true);
    link.textContent = "NFC";
    link.href = "#serveis-nfc";
    link.setAttribute("data-trama-nfc-nav", "true");
    link.setAttribute("aria-label", "Serveis NFC");
    target.parentNode.insertBefore(link, target.nextSibling);
  }

  function bindCards() {
    document.querySelectorAll("[data-nfc-label]").forEach(function (card) {
      if (card.dataset.nfcBound) return;
      card.dataset.nfcBound = "true";
      card.addEventListener("click", function () {
        var note = document.getElementById("nfc-note");
        if (note) {
          note.textContent = "Exemple: " + card.getAttribute("data-nfc-label") + " · destí configurable";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addNfcNavLink();
    bindCards();
    new MutationObserver(function () {
      addNfcNavLink();
      bindCards();
    }).observe(document.body, { childList: true, subtree: true });
  });
})();
