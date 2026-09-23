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
  // QG / repères principaux
  {
    name: "QG — A&O München Laim",
    type: "QG",
    lat: 48.14417,
    lng: 11.49490,
    address: "Landsberger Straße 338, 80687 München",
    text: "Votre point de chute à Laim. Retour hôtel et point de référence de la mission.",
    website: "https://www.aohostels.com/fr/munich/muenchen-laim/",
    verified: "23/09/2026"
  },
  { name: "Theresienwiese", type: "Oktoberfest", lat: 48.1316, lng: 11.5499, address: "Theresienwiese, München", text: "Épicentre de la Wiesn. Point de ralliement officiel." },
  { name: "Marienplatz", type: "Photo", lat: 48.1374, lng: 11.5755, text: "Place mythique, idéale pour lancer la mission Munich." },
  { name: "Hofbräuhaus München", type: "Bière", lat: 48.1376, lng: 11.5799, text: "Institution bavaroise. À tester tôt, avant surcharge du système." },
  { name: "Englischer Garten", type: "Secret", lat: 48.1642, lng: 11.6055, text: "Grand parc, surf urbain sur l’Eisbach et récupération stratégique." },
  { name: "Viktualienmarkt", type: "Food", lat: 48.1351, lng: 11.5764, text: "Marché central pour manger autre chose que liquide." },
  { name: "Bavaria Statue", type: "Photo", lat: 48.1306, lng: 11.5458, text: "Vue symbolique sur la Theresienwiese." },
  { name: "Augustiner-Keller", type: "Bière", lat: 48.1432, lng: 11.5537, text: "Biergarten historique, excellent plan de préchauffage." },
  { name: "Asamkirche", type: "Secret", lat: 48.1351, lng: 11.5698, text: "Petite église baroque impressionnante, spot discret et magnifique." },
  { name: "Eisbachwelle", type: "Secret", lat: 48.1436, lng: 11.5873, text: "Le spot de surf urbain improbable. Parfait pour une pause photo." },
  { name: "Olympiapark", type: "Photo", lat: 48.1733, lng: 11.5464, text: "Vue large sur Munich, ambiance rétro-futuriste." },

  // FKK CLUBS 18+ — établissements adultes, séparés du naturisme public
  {
    name: "FKK Fantasy",
    type: "FKK Club 18+",
    lat: 48.1420186,
    lng: 11.5149828,
    address: "Landsberger Str. 216, 80687 München-Laim",
    text: "Sauna-club 18+ à Laim, sur la même avenue que le QG. Très proche de l'hôtel.",
    rating: 4.8,
    reviews: 30,
    adult: true,
    website: "https://fkk-club-muenchen.de/",
    verified: "23/09/2026"
  },
  {
    name: "FKK Sunshine",
    type: "FKK Club 18+",
    lat: 48.1309,
    lng: 11.5208,
    address: "Ludwigshafener Str. 1, 80686 München",
    text: "Sauna-club 18+ très bien évalué, avec espace wellness.",
    rating: 4.9,
    reviews: 143,
    adult: true,
    website: "https://www.fkk-sunshine.de/",
    verified: "23/09/2026"
  },
  {
    name: "FKK Club Atlantis Munich",
    type: "FKK Club 18+",
    lat: 48.134279,
    lng: 11.670479,
    address: "Stahlgruberring 40, 81829 München",
    text: "Sauna-club 18+ côté Trudering-Riem, près de la Messe.",
    rating: 4.8,
    reviews: 88,
    adult: true,
    website: "https://atlantis-munich.de/",
    verified: "23/09/2026"
  },

  // NATURISME PUBLIC — zones officiellement autorisées par la ville de Munich
  {
    name: "FKK Maria Einsiedel — Isar",
    type: "FKK Naturisme",
    lat: 48.087841,
    lng: 11.546147,
    address: "Secteur Maria Einsiedel, Isar sud",
    text: "Zone publique officielle de naturisme sur la rive ouest de l'Isar. Respecter les limites indiquées sur place.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Brudermühlbrücke",
    type: "FKK Naturisme",
    lat: 48.115628,
    lng: 11.560188,
    address: "Brudermühlbrücke, 81379 München",
    text: "Zone publique officielle de naturisme sur l'Isar, entre la Braunauer Eisenbahnbrücke et la Brudermühlbrücke.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Isarinsel Oberföhring",
    type: "FKK Naturisme",
    lat: 48.181395,
    lng: 11.628157,
    address: "Isarinsel Oberföhring, München",
    text: "Zone publique officielle de naturisme sur la rive est de l'Isarinsel Oberföhring.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Schönfeldwiese",
    type: "FKK Naturisme",
    lat: 48.14746,
    lng: 11.58638,
    address: "Englischer Garten — Schönfeldwiese",
    text: "Zone officielle de naturisme dans le sud de l'Englischer Garten, derrière la Haus der Kunst.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Schwabinger Bucht",
    type: "FKK Naturisme",
    lat: 48.18131,
    lng: 11.61584,
    address: "Englischer Garten — Schwabinger Bucht",
    text: "Zone officielle de naturisme dans le nord de l'Englischer Garten.",
    rating: 4.6,
    reviews: 37,
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Flauchersteg",
    type: "FKK Naturisme",
    lat: 48.105989,
    lng: 11.554010,
    address: "Flauchersteg, 81379 München",
    text: "Grande grève de galets à l'est du Flauchersteg, officiellement autorisée au naturisme.",
    rating: 4.6,
    reviews: 131,
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "FKK Feldmochinger See",
    type: "FKK Naturisme",
    lat: 48.211719,
    lng: 11.510986,
    address: "Feldmochinger See — rive sud-ouest, 80995 München",
    text: "Plage FKK officiellement délimitée au sud-ouest du lac.",
    website: "https://stadt.muenchen.de/service/info/feldmochinger-see/10313227/",
    verified: "23/09/2026"
  },

  // M-BÄDER — zones FKK officielles dans des piscines municipales
  {
    name: "Dantebad — zone FKK",
    type: "FKK Bains",
    lat: 48.167097,
    lng: 11.532008,
    address: "Postillonstraße 17, 80637 München",
    text: "Piscine municipale avec zone FKK et bassin de 25 m dédié.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "Naturbad Maria Einsiedel — zones FKK",
    type: "FKK Bains",
    lat: 48.09652,
    lng: 11.54560,
    address: "Zentralländstraße 28, 81379 München",
    text: "Naturbad municipal avec zone FKK mixte et zone FKK femmes.",
    rating: 4.6,
    reviews: 1537,
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "Ungererbad — zones FKK",
    type: "FKK Bains",
    lat: 48.17020,
    lng: 11.59194,
    address: "Traubestraße 3, 80805 München",
    text: "Freibad municipal avec zone FKK mixte et zone FKK femmes.",
    rating: 4.4,
    reviews: 1376,
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },
  {
    name: "Freibad West — zones FKK",
    type: "FKK Bains",
    lat: 48.13903,
    lng: 11.47367,
    address: "Weinbergerstraße 11, 81241 München",
    text: "Freibad municipal avec zones FKK dédiées. Ouverture saisonnière.",
    website: "https://www.swm.de/baeder/freibaeder-muenchen/westbad-freibad",
    verified: "23/09/2026"
  },
  {
    name: "Cosimawellenbad — zone FKK",
    type: "FKK Bains",
    lat: 48.15479,
    lng: 11.62896,
    address: "Cosimastraße 5, 81925 München",
    text: "Piscine municipale avec pelouse FKK pendant la saison estivale.",
    website: "https://stadt.muenchen.de/infos/fkk.html",
    verified: "23/09/2026"
  },

  // NIGHTLIFE 18+ — sélection très bien notée
  {
    name: "Queens Tabledance & Nightclub",
    type: "Nightlife 18+",
    lat: 48.13869,
    lng: 11.55889,
    address: "Goethestraße 3, 80336 München",
    text: "Tabledance / nightclub 18+ près de la Hauptbahnhof, très bien noté.",
    rating: 4.9,
    reviews: 650,
    adult: true,
    website: "https://queenstabledance.com/",
    verified: "23/09/2026"
  },
  {
    name: "Femina Tabledance Club",
    type: "Nightlife 18+",
    lat: 48.13702,
    lng: 11.56119,
    address: "Schillerstraße 19, 80336 München",
    text: "Tabledance / nightclub 18+ proche de la gare centrale, également très bien évalué.",
    rating: 4.9,
    reviews: 321,
    adult: true,
    website: "https://femina-tabledance.de/",
    verified: "23/09/2026"
  }
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
    question: "Donne-moi le 40ème chiffre de Pi. Exemple attendu : 1",
    answers: ["1"],
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

const PLACE_COLORS = {
  "QG": "#2de2e6",
  "Oktoberfest": "#ffb000",
  "Bière": "#ffb000",
  "Food": "#c9ff00",
  "Photo": "#6c63ff",
  "Secret": "#b7adc9",
  "FKK Club 18+": "#ff2d95",
  "FKK Naturisme": "#35ff69",
  "FKK Bains": "#00d084",
  "Nightlife 18+": "#ff3131"
};

function safeExternalUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.href);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function routeUrl(place) {
  const destination = `${place.lat},${place.lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=walking`;
}

function osmUrl(place) {
  return `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=17/${place.lat}/${place.lng}`;
}

function placeRatingHtml(place) {
  if (!Number.isFinite(place.rating)) return "";
  const reviews = Number.isFinite(place.reviews) ? ` · ${place.reviews} avis` : "";
  return `<span class="rating-badge">★ ${place.rating.toFixed(1)}/5${reviews}</span>`;
}

function placeAdultHtml(place) {
  return place.adult ? `<span class="adult-badge">🔞 18+</span>` : "";
}

function placeActionsHtml(place) {
  const website = safeExternalUrl(place.website);
  const siteButton = website
    ? `<a class="place-link" href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">🌐 Site / infos</a>`
    : "";

  return `
    <div class="place-actions">
      <a class="place-link primary" href="${escapeHtml(routeUrl(place))}" target="_blank" rel="noopener noreferrer">🧭 Itinéraire</a>
      <a class="place-link" href="${escapeHtml(osmUrl(place))}" target="_blank" rel="noopener noreferrer">🗺 OSM</a>
      ${siteButton}
    </div>`;
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
    <article class="place-card ${place.adult ? "adult-place" : ""}">
      <div class="place-card-head">
        <div>
          <h3>${escapeHtml(place.name)}</h3>
          <span class="tag">${escapeHtml(place.type)}</span>
        </div>
        <div class="place-badges">
          ${placeAdultHtml(place)}
          ${placeRatingHtml(place)}
        </div>
      </div>
      ${place.address ? `<p class="place-address">📍 ${escapeHtml(place.address)}</p>` : ""}
      <p>${escapeHtml(place.text)}</p>
      ${place.verified ? `<p class="place-verified">Vérifié le ${escapeHtml(place.verified)} · les notes peuvent évoluer.</p>` : ""}
      ${placeActionsHtml(place)}
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

    const color = PLACE_COLORS[place.type] || "#ffb000";
    const markerIcon = L.divIcon({
      className: "custom-place-icon",
      html: `<span class="map-marker" style="--marker-color:${color}" aria-hidden="true"></span>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -12]
    });

    const popup = `
      <div class="map-popup">
        <strong>${escapeHtml(place.name)}</strong>
        <span class="map-popup-type">${escapeHtml(place.type)}</span>
        <div class="map-popup-badges">${placeAdultHtml(place)} ${placeRatingHtml(place)}</div>
        ${place.address ? `<p>📍 ${escapeHtml(place.address)}</p>` : ""}
        <p>${escapeHtml(place.text)}</p>
        ${placeActionsHtml(place)}
      </div>`;

    L.marker([place.lat, place.lng], { icon: markerIcon })
      .addTo(map)
      .bindPopup(popup, { maxWidth: 320 });
  });

  map.fitBounds(bounds, { padding: [34, 34] });
  setTimeout(() => map.invalidateSize(), 250);
  window.addEventListener("resize", () => map.invalidateSize());

  mapList.innerHTML = places.map(place => `
    <li>
      <strong>${escapeHtml(place.name)}</strong> — ${escapeHtml(place.type)}
      ${Number.isFinite(place.rating) ? `<br>★ ${place.rating.toFixed(1)}/5${Number.isFinite(place.reviews) ? ` · ${place.reviews} avis` : ""}` : ""}
      ${place.address ? `<br><span>${escapeHtml(place.address)}</span>` : ""}
      <br><a href="${escapeHtml(routeUrl(place))}" target="_blank" rel="noopener noreferrer">Itinéraire</a>
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
  initTributeSection();

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


// ========================================
// HOMMAGE ZANO — ACCÈS ET CARROUSEL
// Mot de passe actuel : ZANO40
// Pour le modifier, remplace uniquement l'empreinte SHA-256 ci-dessous.
// Générateur possible : https://emn178.github.io/online-tools/sha256.html
// ========================================
const TRIBUTE_PASSWORD_HASH = "5c590a33769d9715dd52b75ce5d04e13066d6dcb89dc537edbd0443a7f1c9196";

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
}

function initTributeSection() {
  const lock = document.querySelector("#tributeLock");
  const content = document.querySelector("#tributeContent");
  const form = document.querySelector("#tributePasswordForm");
  const input = document.querySelector("#tributePassword");
  const feedback = document.querySelector("#tributePasswordFeedback");
  const lockButton = document.querySelector("#lockTribute");
  if (!lock || !content || !form || !input || !feedback) return;

  let currentSlide = 0;
  let autoPlayId = null;
  const slides = Array.from(document.querySelectorAll(".tribute-slide"));
  const track = document.querySelector("#tributeTrack");
  const dotsHost = document.querySelector("#tributeDots");

  slides.forEach((slide, index) => {
    const image = slide.querySelector("img");
    const filename = image?.getAttribute("src")?.split("/").pop() || `zano-${String(index + 1).padStart(2, "0")}.jpg`;
    slide.dataset.file = filename;
    if (image) {
      image.addEventListener("error", () => slide.classList.add("photo-missing"));
    }
  });

  dotsHost.innerHTML = slides.map((_, index) =>
    `<button class="tribute-dot ${index === 0 ? "active" : ""}" type="button" aria-label="Afficher la photo ${index + 1}" data-slide="${index}"></button>`
  ).join("");

 function showSlide(index) {
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle(
            "active",
            slideIndex === currentSlide
        );
    });

    if (dotsHost) {
        dotsHost
            .querySelectorAll(".tribute-dot")
            .forEach((dot, dotIndex) => {
                dot.classList.toggle(
                    "active",
                    dotIndex === currentSlide
                );
            });
    }
}

  function stopAutoPlay() {
    if (autoPlayId) window.clearInterval(autoPlayId);
    autoPlayId = null;
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoPlayId = window.setInterval(() => showSlide(currentSlide + 1), 6500);
  }

  document.querySelector("#tributePrev")?.addEventListener("click", () => { showSlide(currentSlide - 1); startAutoPlay(); });
  document.querySelector("#tributeNext")?.addEventListener("click", () => { showSlide(currentSlide + 1); startAutoPlay(); });
  dotsHost.addEventListener("click", event => {
    const dot = event.target.closest(".tribute-dot");
    if (!dot) return;
    showSlide(Number(dot.dataset.slide));
    startAutoPlay();
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const candidate = input.value.trim().toUpperCase();
    if (!candidate) return;

    try {
      const candidateHash = await sha256(candidate);
      if (candidateHash === TRIBUTE_PASSWORD_HASH) {
        lock.hidden = true;
        content.hidden = false;
        content.classList.add("revealed");
        window.dispatchEvent(new Event("scroll"));
        feedback.textContent = "";
        input.value = "";
        showSlide(0);
        startAutoPlay();
        content.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        feedback.textContent = "Mot de passe incorrect. Accès refusé à ce dossier.";
        feedback.style.color = "var(--red)";
        input.select();
      }
    } catch (error) {
      feedback.textContent = "Le navigateur ne permet pas la vérification sécurisée du mot de passe.";
      feedback.style.color = "var(--red)";
    }
  });

  lockButton?.addEventListener("click", () => {
    stopAutoPlay();
    content.hidden = true;
    content.classList.remove("revealed");
    lock.hidden = false;
    input.focus();
    lock.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAutoPlay();
    else if (!content.hidden) startAutoPlay();
  });
}
/* =========================================================
   APPARITION PROGRESSIVE DU TEXTE HOMMAGE
   ========================================================= */

function initZanoTributeText() {
    const tribute = document.getElementById("zanoTribute");

    if (!tribute) {
        return;
    }

    const paragraphs = tribute.querySelectorAll(
        ".zano-tribute-paragraph"
    );

    if (!paragraphs.length) {
        return;
    }

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        paragraphs.forEach((paragraph) => {
            paragraph.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -8% 0px"
        }
    );

    paragraphs.forEach((paragraph) => {
        observer.observe(paragraph);
    });
}

document.addEventListener("DOMContentLoaded", initZanoTributeText);

/* =========================================================
   SUICID SQUAD OPS
   ========================================================= */

function initSuicidSquadOps() {

    const rallyStorageKey = "suicidSquadRallyPoint";

    const HOTEL_DESTINATION =
        "Landsberger Straße 338, Laim, 80687 München, Deutschland";

    const OKTOBERFEST_DESTINATION =
        "Theresienwiese, München, Germany";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const saveRallyButton =
        document.getElementById("saveRallyPoint");

    const goRallyButton =
        document.getElementById("goRallyPoint");

    const lostButton =
        document.getElementById("lostButton");

    const translatorButton =
        document.getElementById("translatorButton");

    const rallyStatus =
        document.getElementById("rallyStatus");

    const lostDialog =
        document.getElementById("lostDialog");

    const translatorDialog =
        document.getElementById("translatorDialog");

    const currentPosition =
        document.getElementById("currentPosition");

    const lostFeedback =
        document.getElementById("lostFeedback");


    /* =====================================================
       GPS
       ===================================================== */

    function getCurrentPosition() {

        return new Promise((resolve, reject) => {

            if (!navigator.geolocation) {

                reject(
                    new Error(
                        "La géolocalisation n'est pas disponible."
                    )
                );

                return;
            }

            navigator.geolocation.getCurrentPosition(
                position => {

                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });

                },
                error => {

                    reject(error);

                },
                {
                    enableHighAccuracy: true,
                    timeout: 12000,
                    maximumAge: 30000
                }
            );

        });

    }


    /* =====================================================
       GOOGLE MAPS
       ===================================================== */

    function openDirections(destination) {

        const url =
            "https://www.google.com/maps/dir/?api=1" +
            "&destination=" +
            encodeURIComponent(destination) +
            "&travelmode=walking";

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    function openCoordinates(lat, lng) {

        const url =
            "https://www.google.com/maps/search/?api=1" +
            "&query=" +
            encodeURIComponent(`${lat},${lng}`);

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =====================================================
       POINT DE RALLIEMENT
       ===================================================== */

    function readRallyPoint() {

        try {

            const value =
                localStorage.getItem(rallyStorageKey);

            return value
                ? JSON.parse(value)
                : null;

        } catch {

            return null;

        }

    }


    function updateRallyStatus() {

        const rally = readRallyPoint();

        if (!rally) {

            rallyStatus.textContent =
                "Aucun point de ralliement enregistré.";

            return;

        }

        const date =
            new Date(rally.createdAt);

        rallyStatus.textContent =
            `Point de ralliement enregistré à ` +
            `${date.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit"
            })}.`;

    }


    saveRallyButton?.addEventListener(
        "click",
        async () => {

            rallyStatus.textContent =
                "Localisation en cours...";

            try {

                const position =
                    await getCurrentPosition();

                const rally = {
                    lat: position.lat,
                    lng: position.lng,
                    createdAt: new Date().toISOString()
                };

                localStorage.setItem(
                    rallyStorageKey,
                    JSON.stringify(rally)
                );

                updateRallyStatus();

            } catch {

                rallyStatus.textContent =
                    "Impossible d'obtenir la position GPS.";

            }

        }
    );


    function goToRallyPoint() {

        const rally = readRallyPoint();

        if (!rally) {

            rallyStatus.textContent =
                "Aucun point de ralliement n'a encore été défini.";

            return;

        }

        openDirections(
            `${rally.lat},${rally.lng}`
        );

    }


    goRallyButton?.addEventListener(
        "click",
        goToRallyPoint
    );


    /* =====================================================
       MODE : ON EST PERDU
       ===================================================== */

    let lastKnownPosition = null;


    lostButton?.addEventListener(
        "click",
        async () => {

            lostDialog?.showModal();

            currentPosition.textContent =
                "Recherche GPS...";

            lostFeedback.textContent = "";

            try {

                lastKnownPosition =
                    await getCurrentPosition();

                currentPosition.textContent =
                    `${lastKnownPosition.lat.toFixed(6)}, ` +
                    `${lastKnownPosition.lng.toFixed(6)}`;

            } catch {

                currentPosition.textContent =
                    "Position GPS indisponible.";

            }

        }
    );


    document
        .getElementById("openCurrentPosition")
        ?.addEventListener(
            "click",
            () => {

                if (!lastKnownPosition) {
                    return;
                }

                openCoordinates(
                    lastKnownPosition.lat,
                    lastKnownPosition.lng
                );

            }
        );


    document
        .getElementById("goHotel")
        ?.addEventListener(
            "click",
            () => {

                openDirections(
                    HOTEL_DESTINATION
                );

            }
        );


    document
        .getElementById("lostGoRally")
        ?.addEventListener(
            "click",
            goToRallyPoint
        );


    document
        .getElementById("goOktoberfest")
        ?.addEventListener(
            "click",
            () => {

                openDirections(
                    OKTOBERFEST_DESTINATION
                );

            }
        );


    document
        .getElementById("sharePosition")
        ?.addEventListener(
            "click",
            async () => {

                if (!lastKnownPosition) {

                    lostFeedback.textContent =
                        "Position GPS indisponible.";

                    return;

                }

                const mapsUrl =
                    "https://www.google.com/maps/search/?api=1&query=" +
                    encodeURIComponent(
                        `${lastKnownPosition.lat},${lastKnownPosition.lng}`
                    );

                const text =
                    `Ma position : ${mapsUrl}`;

                try {

                    if (navigator.share) {

                        await navigator.share({
                            title: "Position Suicid Squad",
                            text
                        });

                    } else {

                        await navigator.clipboard.writeText(
                            text
                        );

                        lostFeedback.textContent =
                            "Position copiée dans le presse-papiers.";

                    }

                } catch {

                    lostFeedback.textContent =
                        "Impossible de partager la position.";

                }

            }
        );


    /* =====================================================
       TRADUCTEUR AUDIO
       Les fichiers MP3 sont embarqués dans assets/audio.
       Aucune voix système n'est nécessaire.
       ===================================================== */

    const phrases = {

        "🍺 Bière": [
            {
                de: "Noch ein Bier, bitte!",
                fr: "Encore une bière, s'il vous plaît !",
                audio: "assets/audio/bier-01.mp3"
            },
            {
                de: "Prost!",
                fr: "Santé !",
                audio: "assets/audio/bier-02.mp3"
            },
            {
                de: "Zwei Bier, bitte.",
                fr: "Deux bières, s'il vous plaît.",
                audio: "assets/audio/bier-03.mp3"
            }
        ],

        "🍖 Manger": [
            {
                de: "Wir möchten etwas essen.",
                fr: "Nous voudrions manger quelque chose.",
                audio: "assets/audio/manger-01.mp3"
            },
            {
                de: "Was empfehlen Sie?",
                fr: "Que recommandez-vous ?",
                audio: "assets/audio/manger-02.mp3"
            },
            {
                de: "Die Rechnung, bitte.",
                fr: "L'addition, s'il vous plaît.",
                audio: "assets/audio/manger-03.mp3"
            }
        ],

        "🚕 Taxi": [
            {
                de: "Wir brauchen ein Taxi.",
                fr: "Nous avons besoin d'un taxi.",
                audio: "assets/audio/taxi-01.mp3"
            },
            {
                de: "Können Sie uns hierhin bringen?",
                fr: "Pouvez-vous nous conduire ici ?",
                audio: "assets/audio/taxi-02.mp3"
            }
        ],

        "🏨 Hôtel": [
            {
                de: "Wo ist unser Hotel?",
                fr: "Où est notre hôtel ?",
                audio: "assets/audio/hotel-01.mp3"
            },
            {
                de: "Wir haben eine Reservierung.",
                fr: "Nous avons une réservation.",
                audio: "assets/audio/hotel-02.mp3"
            }
        ],

       "❤️ Drague": [
    {
        de: "Darf ich dir etwas zu trinken anbieten?",
        fr: "Je peux t'offrir un verre ?",
        audio: "assets/audio/drague-01.mp3"
    },
    {
        de: "Wie heißt du?",
        fr: "Comment t'appelles-tu ?",
        audio: "assets/audio/drague-02.mp3"
    },
    {
        de: "Du bist sehr sympathisch.",
        fr: "Tu es très sympathique.",
        audio: "assets/audio/drague-03.mp3"
    },
    {
        de: "Darf ich dir ein Bier ausgeben?",
        fr: "Je peux t'offrir une bière ?",
        audio: "assets/audio/drague-04.mp3"
    },
    {
        de: "Du hast ein schönes Lächeln.",
        fr: "Tu as un joli sourire.",
        audio: "assets/audio/drague-05.mp3"
    },
    {
        de: "Bist du auch wegen des Oktoberfests hier?",
        fr: "Toi aussi, tu es ici pour l'Oktoberfest ?",
        audio: "assets/audio/drague-06.mp3"
    },
    {
        de: "Möchtest du mit uns anstoßen?",
        fr: "Tu veux trinquer avec nous ?",
        audio: "assets/audio/drague-07.mp3"
    },
    {
        de: "Ich spreche nicht gut Deutsch, aber ich kann gut feiern.",
        fr: "Je ne parle pas bien allemand, mais je sais bien faire la fête.",
        audio: "assets/audio/drague-08.mp3"
    }
],

        "🚨 Urgence": [
            {
                de: "Wir brauchen Hilfe.",
                fr: "Nous avons besoin d'aide.",
                audio: "assets/audio/urgence-01.mp3"
            },
            {
                de: "Rufen Sie bitte die Polizei.",
                fr: "Appelez la police, s'il vous plaît.",
                audio: "assets/audio/urgence-02.mp3"
            },
            {
                de: "Rufen Sie bitte einen Krankenwagen.",
                fr: "Appelez une ambulance, s'il vous plaît.",
                audio: "assets/audio/urgence-03.mp3"
            }
        ]

    };


    const categoriesHost =
        document.getElementById("phraseCategories");

    const phraseList =
        document.getElementById("phraseList");

    let activeGermanAudio = null;


    function playGermanAudio(audioFile, button) {

        if (!audioFile) {
            return;
        }

        if (activeGermanAudio) {
            activeGermanAudio.pause();
            activeGermanAudio.currentTime = 0;
        }

        const audio =
            new Audio(audioFile);

        activeGermanAudio = audio;

        const originalText =
            button?.textContent || "🔊 ÉCOUTER";

        if (button) {
            button.disabled = true;
            button.textContent = "🔊 LECTURE...";
        }

        const resetButton = () => {

            if (button) {
                button.disabled = false;
                button.textContent = originalText;
            }

            if (activeGermanAudio === audio) {
                activeGermanAudio = null;
            }

        };

        audio.addEventListener(
            "ended",
            resetButton,
            { once: true }
        );

        audio.addEventListener(
            "error",
            () => {

                resetButton();

                if (button) {
                    button.textContent = "⚠ AUDIO INTROUVABLE";

                    window.setTimeout(
                        () => {
                            button.textContent = originalText;
                        },
                        1800
                    );
                }

            },
            { once: true }
        );

        audio.play().catch(() => {
            resetButton();
        });

    }


    function showPhraseCategory(category) {

        phraseList.replaceChildren();

        const selectedPhrases =
            phrases[category];

        selectedPhrases.forEach(item => {

            const card =
                document.createElement("div");

            card.className =
                "phrase-card";


            const german =
                document.createElement("span");

            german.className =
                "phrase-german";

            german.textContent =
                item.de;


            const french =
                document.createElement("span");

            french.className =
                "phrase-french";

            french.textContent =
                item.fr;


            const speakButton =
                document.createElement("button");

            speakButton.type =
                "button";

            speakButton.className =
                "speak-phrase";

            speakButton.textContent =
                "🔊 ÉCOUTER";


            speakButton.addEventListener(
                "click",
                () => playGermanAudio(item.audio, speakButton)
            );


            card.append(
                german,
                french,
                speakButton
            );

            phraseList.append(card);

        });


        categoriesHost
            .querySelectorAll(
                ".phrase-category"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.category === category
                );

            });

    }


    if (categoriesHost) {

        Object.keys(phrases).forEach(
            (category, index) => {

                const button =
                    document.createElement("button");

                button.type =
                    "button";

                button.className =
                    "phrase-category";

                button.dataset.category =
                    category;

                button.textContent =
                    category;

                button.addEventListener(
                    "click",
                    () => showPhraseCategory(category)
                );

                categoriesHost.append(button);

                if (index === 0) {
                    button.classList.add("active");
                }

            }
        );

        showPhraseCategory(
            Object.keys(phrases)[0]
        );

    }


    translatorButton?.addEventListener(
        "click",
        () => {

            translatorDialog?.showModal();

        }
    );


    /* =====================================================
       FERMETURE DES DIALOGUES
       ===================================================== */

    document
        .querySelectorAll(
            "[data-close-dialog]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const dialog =
                        document.getElementById(
                            button.dataset.closeDialog
                        );

                    dialog?.close();

                }
            );

        });


    updateRallyStatus();

}


document.addEventListener(
    "DOMContentLoaded",
    initSuicidSquadOps
);