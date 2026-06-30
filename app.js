/* ============================================================
   Logique de l'application Hunter x Hunter (vanilla JS)
   ============================================================ */

/* Si true, l'app remplace l'avatar généré par une vraie image du personnage
   dès qu'un fichier hxh/img/<slug>.(jpg|png|webp) existe (voir img/README.md).
   Sinon, l'avatar généré reste affiché. */
const USE_LOCAL_IMAGES = true;
const IMG_EXTS = ["jpg", "png", "webp", "jpeg"];

/* ---------- Avatars (SVG générés + override image locale) ---------- */
function slugify(name) {
  return name.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function initials(name) {
  const parts = name.split(/\s+/).filter(Boolean);
  let s = parts[0] ? parts[0][0] : "";
  if (parts[1]) s += parts[1][0];
  return s.toUpperCase();
}
function hashNum(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  return Math.abs(h);
}
function svgAvatarDataUri(name) {
  const hue = hashNum(name) % 360;
  const hue2 = (hue + 42) % 360;
  const txt = initials(name);
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="hsl(${hue},55%,42%)"/>` +
    `<stop offset="1" stop-color="hsl(${hue2},58%,30%)"/>` +
    `</linearGradient></defs>` +
    `<rect width="120" height="120" fill="url(#g)"/>` +
    `<text x="60" y="60" font-family="Segoe UI, Arial, sans-serif" font-size="48" font-weight="700" ` +
    `fill="#ffffff" fill-opacity="0.92" text-anchor="middle" dominant-baseline="central">${txt}</text>` +
    `</svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}
/* <img> : avatar SVG généré par défaut (zéro requête réseau).
   Si USE_LOCAL_IMAGES, on tente de remplacer par img/<slug>.(jpg|png|webp) si présent. */
function avatarImg(name, extraClass = "") {
  const uri = svgAvatarDataUri(name);
  return `<img class="avatar ${extraClass}" alt="${name}" src="${uri}" data-slug="${slugify(name)}">`;
}
/* Cache par slug : URL trouvée (string) ou null si aucune image. Évite de re-sonder. */
const localImgCache = {};
/* Remplace les avatars par les images locales présentes, sans bloquer le rendu. */
function upgradeLocalImages(root) {
  if (!USE_LOCAL_IMAGES) return;
  (root || document).querySelectorAll("img.avatar[data-slug]").forEach((img) => {
    if (img.dataset.done) return;
    img.dataset.done = "1";
    const slug = img.dataset.slug;
    const cached = localImgCache[slug];
    if (typeof cached === "string") { img.src = cached; return; }
    if (cached === null) return; // déjà cherché : aucune image
    let i = 0;
    const tryNext = () => {
      if (i >= IMG_EXTS.length) { localImgCache[slug] = null; return; }
      const url = "img/" + slug + "." + IMG_EXTS[i++];
      const probe = new Image();
      probe.onload = () => { localImgCache[slug] = url; img.src = url; };
      probe.onerror = tryNext;
      probe.src = url;
    };
    tryNext();
  });
}

/* ---------- Liens vers les fiches Fandom ---------- */
/* Princes et reines ont une page « <Prénom> Hui Guo Rou » sur le wiki. */
const ROYAL_NAMES = new Set([
  ...PRINCES.map((p) => p.name),
  ...QUEENS.map((q) => q.name.replace(/ Hui Guo Rou$/, ""))
]);
function wikiTitle(name) {
  if (/Hui Guo Rou$/.test(name)) return name;
  return ROYAL_NAMES.has(name) ? name + " Hui Guo Rou" : name;
}
function wikiUrl(name) {
  return "https://hunterxhunter.fandom.com/wiki/" +
    encodeURIComponent(wikiTitle(name).replace(/ /g, "_"));
}
/* Enrobe un texte dans un lien vers la fiche Fandom (nouvel onglet). */
function wikiLink(name, cls = "wiki-link") {
  return `<a class="${cls}" href="${wikiUrl(name)}" target="_blank" rel="noopener noreferrer">${name}</a>`;
}

/* ---------- Onglets ---------- */
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(btn.dataset.tab).classList.add("active");
});

/* ---------- 1. Personnages ---------- */
const grid = document.getElementById("char-grid");
const searchInput = document.getElementById("char-search");
const filtersBox = document.getElementById("aff-filters");
let activeAff = "Toutes";

function affKey(aff) {
  if (/Brigade Fant/i.test(aff)) return "Brigade Fantôme";
  if (/Zoldyck/i.test(aff)) return "Famille Zoldyck";
  if (/Kurta/i.test(aff)) return "Clan Kurta";
  if (/Fourmis-Chim/i.test(aff)) return "Fourmis-Chimères";
  if (/Mafia|Xi-Yu|Cha-R|Heil-Ly/i.test(aff)) return "Clans du Black Whale";
  if (/Kakin|Entourage|Prince|Reine/i.test(aff)) return "Famille royale de Kakin";
  if (/Hunter/i.test(aff)) return "Association des Hunters";
  return "Autres";
}

/* Agrège TOUS les personnages (principaux + princes + reines + entourages
   + mafias + Brigade Fantôme), dédupliqués par nom, triés alphabétiquement. */
const GENERIC_NAME = /^(Gardes?|Disciples|Servantes|Ses |Famille|Reine |Membres|Personnel|Fidèles|Soldats|Provisional)/i;
function buildRoster() {
  const map = new Map();
  const add = (name, entry) => { if (!map.has(name)) map.set(name, entry); };

  // Personnages principaux (prioritaires : description la plus riche)
  CHARACTERS.forEach((c) =>
    map.set(c.name, { name: c.name, aff: c.aff, nen: c.nen, desc: c.power }));

  // Princes — description = bête de Nen
  PRINCES.forEach((p) =>
    add(p.name, {
      name: p.name,
      aff: `Famille royale de Kakin · ${p.num}ᵉ Prince`,
      nen: "Bête de Nen",
      desc: p.beast
    }));

  // Reines
  QUEENS.forEach((q) =>
    add(q.name, {
      name: q.name,
      aff: `Famille royale de Kakin · ${q.rank}`,
      desc: q.note || "Épouse du roi Nasubi, mère de prince(s) engagé(s) dans la guerre de succession."
    }));

  // Entourage des princes (individus nommés uniquement)
  PRINCES.forEach((p) =>
    p.entourage.forEach((e) => {
      if (GENERIC_NAME.test(e.name)) return;
      add(e.name, { name: e.name, aff: `Entourage du Prince ${p.name}`, desc: e.role });
    }));

  // Membres des clans mafieux
  MAFIA.forEach((clan) =>
    clan.members.forEach((m) => {
      if (GENERIC_NAME.test(m.name)) return;
      add(m.name, {
        name: m.name,
        aff: `Mafia · ${clan.name}`,
        desc: m.role + (m.ability ? " — " + m.ability : "")
      });
    }));

  // Brigade Fantôme
  add(TROUPE.leader.name, {
    name: TROUPE.leader.name, aff: "Brigade Fantôme",
    nen: TROUPE.leader.nen, desc: TROUPE.leader.ability
  });
  TROUPE.members.forEach((m) =>
    add(m.name, {
      name: m.name,
      aff: m.status === "actif" ? "Brigade Fantôme" : `Brigade Fantôme (${m.status})`,
      nen: m.nen, desc: m.ability
    }));

  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
const ALL_CHARS = buildRoster();

function buildFilters() {
  const orgs = ["Toutes", ...new Set(ALL_CHARS.map((c) => affKey(c.aff)))];
  filtersBox.innerHTML = "";
  orgs.forEach((org) => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (org === activeAff ? " active" : "");
    chip.textContent = org;
    chip.onclick = () => { activeAff = org; buildFilters(); renderCharacters(); };
    filtersBox.appendChild(chip);
  });
}

function renderCharacters() {
  const q = searchInput.value.trim().toLowerCase();
  const list = ALL_CHARS.filter((c) => {
    const matchAff = activeAff === "Toutes" || affKey(c.aff) === activeAff;
    const matchQ = !q ||
      c.name.toLowerCase().includes(q) ||
      c.aff.toLowerCase().includes(q) ||
      (c.desc || "").toLowerCase().includes(q) ||
      (c.nen || "").toLowerCase().includes(q);
    return matchAff && matchQ;
  });

  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = '<p class="empty">Aucun personnage ne correspond.</p>';
    return;
  }
  list.forEach((c) => {
    const card = document.createElement("a");
    card.className = "char-card";
    card.href = wikiUrl(c.name);
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.title = "Voir la fiche sur Fandom";
    card.innerHTML = `
      <div class="char-head">
        ${avatarImg(c.name)}
        <h3>${c.name}</h3>
        <span class="ext" aria-hidden="true">↗</span>
      </div>
      <div class="char-aff">${c.aff}</div>
      ${c.nen ? `<div><span class="char-nen">${c.nen}</span></div>` : ""}
      <p class="char-power">${c.desc}</p>`;
    grid.appendChild(card);
  });
  upgradeLocalImages(grid);
}

searchInput.addEventListener("input", renderCharacters);

/* ---------- 2. Guerre de Succession ---------- */
const queensOrg = document.getElementById("queens-org");

function renderQueens() {
  queensOrg.innerHTML = "";
  QUEENS.forEach((q) => {
    const princes = PRINCES.filter((p) => p.queen === q.id).sort((a, b) => a.num - b.num);
    const block = document.createElement("div");
    block.className = "queen-block";
    block.innerHTML = `
      <div class="queen-head">
        ${avatarImg(q.name, "round")}
        <span class="rank">${q.rank}</span>
        <span class="qname">${wikiLink(q.name, "wiki-link qname-link")}</span>
      </div>
      ${q.note ? `<p class="queen-note">${q.note}</p>` : '<p class="queen-note"></p>'}
      <div class="prince-list"></div>`;
    const pl = block.querySelector(".prince-list");
    princes.forEach((p) => {
      const node = document.createElement("button");
      node.className = "prince-node";
      node.innerHTML = `
        <span class="prince-num">${p.num}</span>
        ${avatarImg(p.name, "round")}
        <span class="pname">${p.name}</span>
        ${p.mafia ? `<span class="ptag">⚑ ${p.mafia}</span>` : ""}`;
      node.onclick = () => openPrince(p);
      pl.appendChild(node);
    });
    queensOrg.appendChild(block);
  });
}

/* ---------- Modale entourage ---------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
document.getElementById("modal-close").onclick = closeModal;
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

function openPrince(p) {
  const queen = QUEENS.find((q) => q.id === p.queen);
  modalBody.innerHTML = `
    <div class="modal-title">
      ${avatarImg(p.name, "round")}
      <div>
        <h3>${p.num}. Prince ${p.name}</h3>
        <div class="m-sub">Enfant de la ${queen.rank} — ${queen.name}</div>
      </div>
    </div>
    <a class="wiki-btn" href="${wikiUrl(p.name)}" target="_blank" rel="noopener noreferrer">Voir la fiche sur Fandom ↗</a>
    ${p.mafia ? `<div class="m-mafia">⚑ Mécène de la famille ${p.mafia}</div>` : ""}
    <p class="m-desc">${p.desc}</p>
    <h4>Bête de Nen</h4>
    <p class="m-desc">${p.beast}</p>
    <h4>Entourage</h4>
    <ul class="ent-list">
      ${p.entourage.map((e) => `
        <li class="ent-item">
          ${avatarImg(e.name, "round")}
          <div>
            <div class="en">${GENERIC_NAME.test(e.name) ? e.name : wikiLink(e.name)}</div>
            <div class="er">${e.role}</div>
          </div>
        </li>`).join("")}
    </ul>`;
  modal.hidden = false;
  upgradeLocalImages(modalBody);
}
function closeModal() { modal.hidden = true; }

/* ---------- 3. Clans mafieux ---------- */
const mafiaOrg = document.getElementById("mafia-org");

function renderMafia() {
  mafiaOrg.innerHTML = "";
  MAFIA.forEach((clan) => {
    const el = document.createElement("div");
    el.className = "clan";
    el.innerHTML = `
      <div class="clan-prince">
        <div class="label">Prince mécène</div>
        <div class="pn">${clan.princeNum}. ${clan.princeName}</div>
      </div>
      <div class="clan-name">${clan.name}</div>
      <div class="clan-note">${clan.note}</div>
      <div class="clan-members">
        ${clan.members.map((m) => {
          const cls = /boss|chef/i.test(m.role) && !/sous/i.test(m.role) ? "boss"
                    : /sous-boss|underboss/i.test(m.role) ? "under" : "";
          return `
            <div class="mem ${cls}">
              ${avatarImg(m.name, "round")}
              <div class="mem-body">
                <div class="mn">${GENERIC_NAME.test(m.name) ? m.name : wikiLink(m.name)}</div>
                ${m.role ? `<div class="mr">${m.role}</div>` : ""}
                ${m.ability ? `<div class="ma">${m.ability}</div>` : ""}
              </div>
            </div>`;
        }).join("")}
      </div>`;
    mafiaOrg.appendChild(el);
  });
}

/* ---------- 4. Brigade Fantôme ---------- */
const troupeOrg = document.getElementById("troupe-org");

function renderTroupe() {
  const L = TROUPE.leader;
  troupeOrg.innerHTML = `
    <div class="troupe-leader">
      ${avatarImg(L.name, "round")}
      <div class="role">${L.role}</div>
      <h3>${wikiLink(L.name, "wiki-link")}</h3>
      <div><span class="char-nen">${L.nen}</span></div>
      <p class="char-power">${L.ability}</p>
    </div>
    <div class="troupe-members"></div>`;
  const wrap = troupeOrg.querySelector(".troupe-members");
  TROUPE.members.forEach((m) => {
    const card = document.createElement("div");
    card.className = "member-card " + m.status;
    card.innerHTML = `
      <div class="member-head">
        ${avatarImg(m.name, "round")}
        <h4>${wikiLink(m.name, "wiki-link")}<span class="status-pill status-${m.status}">${m.status}</span></h4>
      </div>
      <div><span class="char-nen">${m.nen}</span></div>
      <p class="char-power">${m.ability}</p>`;
    wrap.appendChild(card);
  });
}

/* ---------- Init ---------- */
buildFilters();
renderCharacters();
renderQueens();
renderMafia();
renderTroupe();
upgradeLocalImages();
