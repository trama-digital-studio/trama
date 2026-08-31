(function () {
  var copy = {
    ca: {
      kicker: "07 / Serveis connectats",
      heading: "Un gest.",
      emphasis: "Més accions.",
      intro: "Targetes i plaques NFC pensades perquè un negoci converteixi una visita en una acció: demanar una review de Google, obrir la carta, connectar-se al Wi-Fi o activar una campanya. Una mateixa peça, configurada per al que necessites.",
      caption: "Exemple real · reviews de Google",
      topLabel: "Apropa · activa · continua",
      bottomLabel: "Una peça / molts destins",
      alt: "Targeta NFC per obrir les ressenyes de Google",
      type: "Objecte físic · destí digital",
      product: "Una peça senzilla a la taula pot convertir una experiència en una ressenya, una reserva o una visita que continua al mòbil.",
      signal: ["01", "TOCA", "DESTÍ EDITABLE"],
      bottom: "Un sistema físic amb un destí digital editable.",
      note: "Selecciona una targeta per veure un exemple →",
      example: "Exemple: ",
      suffix: " · destí configurable",
      cards: [
        ["01 · Reputació", "Reviews de Google", "Porta el client directament al formulari de valoració quan encara té l’experiència present.", "Google reviews"],
        ["02 · Informació", "Carta digital", "Una aproximació obre la carta, els serveis o una landing actualitzada sense QR ni cerques.", "Carta digital"],
        ["03 · Connexió", "Wi-Fi fàcil", "Comparteix l’accés a la xarxa amb menys fricció i una experiència més cuidada per al client.", "Wi-Fi del negoci"],
        ["04 · Conversió", "Promocions", "Canvia el destí quan vulguis: cupó, reserva, fidelització, xarxes o qualsevol campanya.", "Campanya activa"]
      ]
    },
    es: {
      kicker: "07 / Servicios conectados",
      heading: "Un gesto.",
      emphasis: "Más acciones.",
      intro: "Tarjetas y placas NFC pensadas para que un negocio convierta una visita en una acción: pedir una reseña en Google, abrir la carta, conectarse al Wi‑Fi o activar una campaña. Una misma pieza, configurada para lo que necesitas.",
      caption: "Ejemplo real · reseñas de Google",
      topLabel: "Acerca · activa · continúa",
      bottomLabel: "Una pieza / muchos destinos",
      alt: "Tarjeta NFC para abrir las reseñas de Google",
      type: "Objeto físico · destino digital",
      product: "Una pieza sencilla en la mesa puede convertir una experiencia en una reseña, una reserva o una visita que continúa en el móvil.",
      signal: ["01", "TOCA", "DESTINO EDITABLE"],
      bottom: "Un sistema físico con un destino digital editable.",
      note: "Selecciona una tarjeta para ver un ejemplo →",
      example: "Ejemplo: ",
      suffix: " · destino configurable",
      cards: [
        ["01 · Reputación", "Reseñas de Google", "Lleva al cliente directamente al formulario de valoración cuando aún tiene la experiencia presente.", "Reseñas de Google"],
        ["02 · Información", "Carta digital", "Un acercamiento abre la carta, los servicios o una landing actualizada sin QR ni búsquedas.", "Carta digital"],
        ["03 · Conexión", "Wi‑Fi fácil", "Comparte el acceso a la red con menos fricción y una experiencia más cuidada para el cliente.", "Wi‑Fi del negocio"],
        ["04 · Conversión", "Promociones", "Cambia el destino cuando quieras: cupón, reserva, fidelización, redes o cualquier campaña.", "Campaña activa"]
      ]
    },
    en: {
      kicker: "07 / Connected services",
      heading: "One gesture.",
      emphasis: "More actions.",
      intro: "NFC cards and plaques designed to turn a visit into an action: ask for a Google review, open the menu, connect to Wi‑Fi or activate a campaign. One physical piece, configured for what you need.",
      caption: "Real example · Google reviews",
      topLabel: "Tap · activate · continue",
      bottomLabel: "One piece / many destinations",
      alt: "NFC card to open Google reviews",
      type: "Physical object · digital destination",
      product: "A simple piece on the table can turn an experience into a review, a booking or a visit that continues on the phone.",
      signal: ["01", "TAP", "EDITABLE DESTINATION"],
      bottom: "A physical system with an editable digital destination.",
      note: "Select a card to see an example →",
      example: "Example: ",
      suffix: " · configurable destination",
      cards: [
        ["01 · Reputation", "Google reviews", "Take the client directly to the review form while the experience is still fresh.", "Google reviews"],
        ["02 · Information", "Digital menu", "One tap opens the menu, services or an updated landing page without QR codes or searches.", "Digital menu"],
        ["03 · Connection", "Easy Wi‑Fi", "Share network access with less friction and a more considered customer experience.", "Business Wi-Fi"],
        ["04 · Conversion", "Promotions", "Change the destination whenever you want: coupon, booking, loyalty, social or any campaign.", "Active campaign"]
      ]
    }
  };

  var languageMap = { CA: "ca", ES: "es", EN: "en" };
  var currentLanguage = "en";

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function applyLanguage(language) {
    var section = document.getElementById("serveis-nfc");
    var selected = copy[language] || copy.en;
    if (!section) return;
    currentLanguage = language;

    setText(".trama-nfc-kicker", selected.kicker);
    var heading = section.querySelector(".trama-nfc-heading");
    if (heading) {
      heading.childNodes[0].nodeValue = selected.heading + " ";
      var emphasis = heading.querySelector("em");
      if (emphasis) emphasis.textContent = selected.emphasis;
    }
    setText(".trama-nfc-intro", selected.intro);
    setText(".trama-nfc-product figcaption", selected.caption);
    setText(".trama-nfc-stage-label--top", selected.topLabel);
    setText(".trama-nfc-stage-label--bottom", selected.bottomLabel);
    var productImage = section.querySelector(".trama-nfc-product img");
    if (productImage) productImage.setAttribute("alt", selected.alt);
    setText(".trama-nfc-product-copy .trama-nfc-type", selected.type);
    setText(".trama-nfc-product-copy p", selected.product);
    setText(".trama-nfc-signal span:nth-child(1)", selected.signal[0]);
    setText(".trama-nfc-signal span:nth-child(2)", selected.signal[1]);
    setText(".trama-nfc-signal span:nth-child(4)", selected.signal[2]);
    setText(".trama-nfc-bottom > span:first-child", selected.bottom);
    setText("#nfc-note", selected.note);

    section.querySelectorAll(".trama-nfc-card").forEach(function (card, index) {
      var data = selected.cards[index];
      if (!data) return;
      var type = card.querySelector(".trama-nfc-type");
      var title = card.querySelector("h3");
      var description = card.querySelector("p");
      if (type) type.textContent = data[0];
      if (title) title.textContent = data[1];
      if (description) description.textContent = data[2];
      card.setAttribute("data-nfc-label", data[3]);
    });
  }

  function bindCards() {
    document.querySelectorAll("[data-nfc-label]").forEach(function (card) {
      if (card.dataset.nfcBound) return;
      card.dataset.nfcBound = "true";
      card.addEventListener("click", function () {
        var selected = copy[currentLanguage] || copy.en;
        var note = document.getElementById("nfc-note");
        if (note) note.textContent = selected.example + card.getAttribute("data-nfc-label") + selected.suffix;
      });
    });
  }

  function bindLanguageButtons() {
    document.querySelectorAll("button").forEach(function (button) {
      var language = languageMap[button.textContent.trim()];
      if (!language || button.dataset.nfcLanguageBound) return;
      button.dataset.nfcLanguageBound = "true";
      button.addEventListener("click", function () {
        window.setTimeout(function () {
          applyLanguage(language);
          bindCards();
        }, 0);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLanguage);
    bindCards();
    bindLanguageButtons();
    new MutationObserver(function () {
      bindCards();
      bindLanguageButtons();
    }).observe(document.body, { childList: true, subtree: true });
  });
})();
