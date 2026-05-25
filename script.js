const squad = [
  { name: "Didier Deschamps", alias: "ZANO", role: "Chef de meute, cible principale du coffre-fort.", color: "#c9ff00" },
  { name: "Tony Montana", alias: "Le Parrain", role: "Négociateur de comptoir et menace diplomatique.", color: "#ff3131" },
  { name: "Commanaï Bloch", alias: "Le Narrateur", role: "Archiviste officiel des dossiers compromettants.", color: "#2de2e6" },
  { name: "Cpt Concombre", alias: "Le Vert", role: "Unité végétale instable mais rafraîchissante.", color: "#35ff69" },
  { name: "On en boirait pas un p'tit ?", alias: "La Tentation", role: "Phrase interdite après 22 h 00.", color: "#ffb000" },
  { name: "Vieille Branche", alias: "Le Chêne", role: "Vétéran de la soif et de la mauvaise foi.", color: "#9b7653" },
  { name: "Le Serbe", alias: "L'Inflexible", role: "Bloc défensif, regard noir, loyauté totale.", color: "#6c63ff" },
  { name: "Le Garde du corps", alias: "Mur humain", role: "Protection rapprochée de ZANO et des bretzels.", color: "#b8b8b8" },
  { name: "Le faux Rital", alias: "Carbonara suspecte", role: "Accent douteux, confiance dangereuse.", color: "#00d084" },
  { name: "Aurelien", alias: "L'Électron libre", role: "Variable non maîtrisée de l'expédition.", color: "#ff2d95" },
  { name: "Christian", alias: "Le Sage", role: "Calme apparent, potentiel de chaos élevé.", color: "#ffd166" }
];

const places = [
  { name: "Theresienwiese", type: "Oktoberfest", lat: 48.1316, lng: 11.5499, text: "Épicentre de la Wiesn. Point de ralliement officiel." },
  { name: "Marienplatz", type: "Photo", lat: 48.1374, lng: 11.5755, text: "Place mythique, idéale pour lancer la mission Munich." },
  { name: "Hofbräuhaus München", type: "Bière", lat: 48.1376, lng: 11.5799, text: "Institution bavaroise. À tester tôt, avant surcharge du système." },
  { name: "Englischer Garten", type: "Secret", lat: 48.1642, lng: 11.6055, text: "Grand parc, surf urbain sur l’Eisbach et récupération stratégique." },
  { name: "Viktualienmarkt", type: "Food", lat: 48.1351, lng: 11.5764, text: "Marché central pour manger autre chose que liquide." },
  { name: "Bavaria Statue", type: "Photo", lat: 48.1306, lng: 11.5458, text: "Vue symbolique sur la Theresienwiese." },
  { name: "Augustiner-Keller", type: "Bière", lat: 48.1432, lng: 11.5537, text: "Biergarten historique, excellent plan de préchauffage." },
  { name: "Asamkirche", type: "Secret", lat: 48.1351, lng: 11.5698, text: "Petite église baroque impressionnante, spot discret et magnifique." },
  { name: "Eisbachwelle", type: "Secret", lat: 48.1436, lng: 11.5873, text: "Le spot de surf urbain improbable. Parfait pour une pause photo." },
  { name: "Olympiapark", type: "Photo", lat: 48.1733, lng: 11.5464, text: "Vue large sur Munich, ambiance rétro-futuriste." }
];

const phrases = [
  { fr: "Une bière s’il vous plaît.", de: "Ein Bier, bitte.", tag: "Commande" },
  { fr: "Deux grandes bières s’il vous plaît.", de: "Zwei Maß Bier, bitte.", tag: "Commande" },
  { fr: "Santé !", de: "Prost!", tag: "Commande" },
  { fr: "Encore une tournée.", de: "Noch eine Runde.", tag: "Commande" },
  { fr: "Je voudrais payer.", de: "Ich möchte bezahlen.", tag: "Commande" },
  { fr: "Combien ça coûte ?", de: "Wie viel kostet das?", tag: "Commande" },
  { fr: "Où sont les toilettes ?", de: "Wo sind die Toiletten?", tag: "Survie" },
  { fr: "Je ne parle pas allemand.", de: "Ich spreche kein Deutsch.", tag: "Survie" },
  { fr: "Parlez-vous français ?", de: "Sprechen Sie Französisch?", tag: "Survie" },
  { fr: "Pouvez-vous répéter plus lentement ?", de: "Können Sie das bitte langsamer wiederholen?", tag: "Survie" },
  { fr: "Je suis perdu.", de: "Ich habe mich verlaufen.", tag: "Survie" },
  { fr: "Appelez un taxi, s’il vous plaît.", de: "Rufen Sie bitte ein Taxi.", tag: "Transport" },
  { fr: "Où est la gare centrale ?", de: "Wo ist der Hauptbahnhof?", tag: "Transport" },
  { fr: "Nous allons à la Theresienwiese.", de: "Wir fahren zur Theresienwiese.", tag: "Transport" },
  { fr: "Nous avons une réservation.", de: "Wir haben eine Reservierung.", tag: "Oktoberfest" },
  { fr: "Où est l’entrée de la tente ?", de: "Wo ist der Eingang zum Zelt?", tag: "Oktoberfest" },
  { fr: "Avez-vous une table pour onze personnes ?", de: "Haben Sie einen Tisch für elf Personen?", tag: "Oktoberfest" },
  { fr: "Vous êtes très belle, mademoiselle.", de: "Sie sind sehr schön, Fräulein.", tag: "Drague" },
  { fr: "Puis-je vous offrir un verre ?", de: "Darf ich Ihnen etwas zu trinken ausgeben?", tag: "Drague" },
  { fr: "Vous avez un très beau sourire.", de: "Sie haben ein sehr schönes Lächeln.", tag: "Drague" },
  { fr: "Voulez-vous danser ?", de: "Möchten Sie tanzen?", tag: "Drague" },
  { fr: "Je suis français, mais je fais des efforts.", de: "Ich bin Franzose, aber ich gebe mir Mühe.", tag: "Drague" },
  { fr: "Je suis ici pour l’anniversaire de mon ami.", de: "Ich bin zum Geburtstag meines Freundes hier.", tag: "Drague" },
  { fr: "Puis-je avoir votre numéro ?", de: "Darf ich Ihre Nummer haben?", tag: "Drague" },
  { fr: "Pardon, ce n’était pas volontaire.", de: "Entschuldigung, das war keine Absicht.", tag: "Urgence" },
  { fr: "J’ai besoin d’aide.", de: "Ich brauche Hilfe.", tag: "Urgence" },
  { fr: "Où est la pharmacie ?", de: "Wo ist die Apotheke?", tag: "Urgence" },
  { fr: "Merci beaucoup.", de: "Vielen Dank.", tag: "Politesse" },
  { fr: "Bonne soirée.", de: "Schönen Abend noch.", tag: "Politesse" },
  { fr: "Excusez-moi.", de: "Entschuldigung.", tag: "Politesse" }
];

const riddles = [
  {
    title: "Verrou 1 — La constante du chaos",
    question: "Donne-moi le 40ème chiffre de Pi après la virgule.",
    answers: ["5"],
    hint: "Pas besoin de réciter toute l’histoire : un seul chiffre suffit.",
    fragment: "Z"
  },
  {
    title: "Verrou 2 — Le sous-marin invisible",
    question: "Dans quel endroit ZANO nous a montré le sous-marin ?",
    answers: ["texas", "le texas"],
    hint: "Un nom qui sent plus le saloon que le chantier naval.",
    fragment: "A"
  },
  {
    title: "Verrou 3 — Acrobaties d’escale",
    question: "Quelle pirouette fait ZANO dans les boîtes en escales ?",
    answers: ["roulades", "roulade", "des roulades"],
    hint: "C’est bas, circulaire, et rarement homologué par la médecine du travail.",
    fragment: "N"
  },
  {
    title: "Verrou 4 — Sabotage caféiné",
    question: "Que fait ZANO aux cafés de ses collègues ?",
    answers: ["verre trempette", "verre-trempette", "la verre trempette", "un verre trempette"],
    hint: "Technique de contamination douce par ustensile douteux.",
    fragment: "O"
  },
  {
    title: "Verrou 5 — Les moules black",
    question: "Où ZANO a testé les moules black la première fois ?",
    answers: ["martiniques", "martinique", "la martinique", "aux martiniques"],
    hint: "Île, rhum, soleil, souvenirs troubles.",
    fragment: "4"
  },
  {
    title: "Verrou 6 — Territoire interdit",
    question: "Où ZANO ne va jamais ?",
    answers: ["coiffeur", "chez le coiffeur", "au coiffeur"],
    hint: "L’ennemi naturel de la nuque longue et du style libre.",
    fragment: "0"
  }
];

const squadGrid = document.querySelector("#squadGrid");
const phraseGrid = document.querySelector("#phraseGrid");
const phraseFilters = document.querySelector("#phraseFilters");
const placeGrid = document.querySelector("#placeGrid");
const placeFilters = document.querySelector("#placeFilters");
const mapList = document.querySelector("#mapList");

let activePhraseTag = "Tous";
let solvedRiddles = new Set();

function normalize(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, " ")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function renderSquad() {
  squadGrid.innerHTML = squad.map(member => `
    <article class="squad-card" style="--color:${member.color}">
      <p class="alias">${escapeHtml(member.alias)}</p>
      <h3>${escapeHtml(member.name)}</h3>
      <p>${escapeHtml(member.role)}</p>
    </article>
  `).join("");
}

function renderPhraseFilters() {
  const tags = ["Tous", ...new Set(phrases.map(item => item.tag))];
  phraseFilters.innerHTML = tags.map(tag => `
    <button class="filter-btn phrase-filter ${tag === activePhraseTag ? "active" : ""}" type="button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
  `).join("");
}

function renderPhrases(filter = "") {
  const query = normalize(filter);
  const filtered = phrases.filter(item => {
    const tagOk = activePhraseTag === "Tous" || item.tag === activePhraseTag;
    const searchOk = normalize(`${item.fr} ${item.de} ${item.tag}`).includes(query);
    return tagOk && searchOk;
  });

  phraseGrid.innerHTML = filtered.map(item => `
    <article class="phrase-card">
      <strong>${escapeHtml(item.fr)}</strong>
      <span lang="de">${escapeHtml(item.de)}</span>
      <small class="tag">${escapeHtml(item.tag)}</small>
    </article>
  `).join("") || `<p class="empty-state">Aucune phrase trouvée. Même Google Trad est parti boire une Maß.</p>`;
}

function renderPlaces(filter = "Tous") {
  const filtered = filter === "Tous" ? places : places.filter(place => place.type === filter);
  placeGrid.innerHTML = filtered.map(place => `
    <article class="place-card">
      <h3>${escapeHtml(place.name)}</h3>
      <p>${escapeHtml(place.text)}</p>
      <span class="tag">${escapeHtml(place.type)}</span>
    </article>
  `).join("");
}

function renderFilters() {
  const types = ["Tous", ...new Set(places.map(place => place.type))];
  placeFilters.innerHTML = types.map((type, index) => `
    <button class="filter-btn ${index === 0 ? "active" : ""}" type="button" data-filter="${escapeHtml(type)}">
      ${escapeHtml(type)}
    </button>
  `).join("");

  placeFilters.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    document.querySelectorAll("#placeFilters .filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderPlaces(button.dataset.filter);
  });
}

function initMap() {
  const mapElement = document.querySelector("#map");
  if (!mapElement) return;

  if (!window.L) {
    mapElement.innerHTML = `<div class="map-error">Carte indisponible : la librairie Leaflet n’a pas chargé. Vérifie ta connexion internet ou le blocage CDN.</div>`;
    return;
  }

  const map = L.map(mapElement, { scrollWheelZoom: false, tap: true }).setView([48.1374, 11.5755], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const bounds = [];
  places.forEach(place => {
    bounds.push([place.lat, place.lng]);
    L.marker([place.lat, place.lng])
      .addTo(map)
      .bindPopup(`<strong>${escapeHtml(place.name)}</strong><br>${escapeHtml(place.text)}<br><em>${escapeHtml(place.type)}</em>`);
  });

  map.fitBounds(bounds, { padding: [34, 34] });
  setTimeout(() => map.invalidateSize(), 250);
  window.addEventListener("resize", () => map.invalidateSize());

  mapList.innerHTML = places.map(place => `
    <li><strong>${escapeHtml(place.name)}</strong> — ${escapeHtml(place.type)}<br>
      <a href="https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=16/${place.lat}/${place.lng}" target="_blank" rel="noopener noreferrer">Ouvrir dans OpenStreetMap</a>
    </li>
  `).join("");
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#main-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.addEventListener("click", event => {
    if (event.target.matches("a")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function renderVaultProgress() {
  const progress = document.querySelector("#vaultProgress");
  progress.innerHTML = riddles.map((riddle, index) => `
    <span class="progress-dot ${solvedRiddles.has(index) ? "solved" : ""}" title="${escapeHtml(riddle.title)}">${solvedRiddles.has(index) ? escapeHtml(riddle.fragment) : index + 1}</span>
  `).join("");
}

function renderRiddle(index = 0) {
  const host = document.querySelector("#riddleHost");
  const riddle = riddles[index];

  if (!riddle) {
    const code = riddles.map(item => item.fragment).join("");
    host.innerHTML = `
      <div class="riddle active solved final-riddle-card">
        <h3>Tous les verrous sont ouverts</h3>
        <p>Code final découvert : <strong>${escapeHtml(code)}</strong></p>
        <p>Entre ce code dans le coffre pour révéler le dossier classifié.</p>
      </div>
    `;
    document.querySelector("#vaultCode").value = code;
    return;
  }

  host.innerHTML = `
    <div class="riddle active" data-index="${index}">
      <h3>${escapeHtml(riddle.title)}</h3>
      <p>${escapeHtml(riddle.question)}</p>
      <details class="hint-box">
        <summary>Indice</summary>
        <p>${escapeHtml(riddle.hint)}</p>
      </details>
      <input id="riddleInput" type="text" placeholder="Réponse..." autocomplete="off" />
      <button class="btn small" id="checkRiddle" type="button">Valider le verrou</button>
      <span class="riddle-feedback" id="riddleFeedback"></span>
    </div>
  `;

  const input = document.querySelector("#riddleInput");
  const validate = () => checkRiddle(index);
  document.querySelector("#checkRiddle").addEventListener("click", validate);
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") validate();
  });
  input.focus({ preventScroll: true });
}

function checkRiddle(index) {
  const riddle = riddles[index];
  const input = document.querySelector("#riddleInput");
  const feedback = document.querySelector("#riddleFeedback");
  const answer = normalize(input.value);
  const isCorrect = riddle.answers.some(expected => normalize(expected) === answer);

  if (isCorrect) {
    solvedRiddles.add(index);
    renderVaultProgress();
    feedback.textContent = `Correct. Fragment obtenu : ${riddle.fragment}`;
    feedback.style.color = "var(--acid)";
    setTimeout(() => renderRiddle(index + 1), 750);
  } else {
    feedback.textContent = "Mauvaise piste. Le coffre ricane. Vérifie l’orthographe ou ouvre l’indice.";
    feedback.style.color = "var(--red)";
  }
}

function initVault() {
  const result = document.querySelector("#vaultResult");
  const finalCode = riddles.map(item => item.fragment).join("");

  renderVaultProgress();
  renderRiddle(0);

  document.querySelector("#openVault").addEventListener("click", () => {
    const code = normalize(document.querySelector("#vaultCode").value).replace(/\s+/g, "").toUpperCase();
    if (code === finalCode) {
      document.querySelector(".vault-section").classList.add("vault-open");
      result.innerHTML = "COFFRE OUVERT : dossier ZANO-40 déverrouillé. La position du vrai secret vient d’être révélée.";
      result.style.color = "var(--acid)";
      const secretLocation = document.querySelector("#secretLocation");
      if (secretLocation) {
        secretLocation.hidden = false;
        secretLocation.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      result.textContent = "Code refusé. Il faut résoudre tous les verrous pour former le vrai code.";
      result.style.color = "var(--red)";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSquad();
  renderPhraseFilters();
  renderPhrases();
  renderFilters();
  renderPlaces();
  initMenu();
  initMap();
  initVault();

  const heroPhoto = document.querySelector("#heroPhoto");
  if (heroPhoto) {
    heroPhoto.addEventListener("error", () => {
      heroPhoto.closest(".hero-photo-frame")?.classList.add("photo-missing");
    });
  }

  document.querySelector("#phraseSearch").addEventListener("input", event => {
    renderPhrases(event.target.value);
  });

  phraseFilters.addEventListener("click", event => {
    const button = event.target.closest(".phrase-filter");
    if (!button) return;
    activePhraseTag = button.dataset.tag;
    renderPhraseFilters();
    renderPhrases(document.querySelector("#phraseSearch").value);
  });
});
