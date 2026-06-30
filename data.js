/* ============================================================
   Données Hunter x Hunter
   Sources : manga de Yoshihiro Togashi / Hunterpedia.
   Les capacités Nen sont décrites de façon synthétique.
   ============================================================ */

/* ---------- 1. PERSONNAGES ---------- */
/* nen : type de Nen (catégorie). aff : affiliation/organisation. */
const CHARACTERS = [
  {
    name: "Gon Freecss",
    aff: "Association des Hunters",
    nen: "Renforcement",
    power: "Jajanken (Pierre-Feuille-Ciseaux) : concentre son aura pour un coup amplifié dévastateur (Pierre), un projectile d'aura (Feuille) ou une lame d'aura (Ciseaux)."
  },
  {
    name: "Killua Zoldyck",
    aff: "Famille Zoldyck",
    nen: "Transformation",
    power: "Transforme son aura en électricité (Foudre). Godspeed (Kanmuru) : décharge son corps de courant pour une vitesse et des réflexes quasi instantanés."
  },
  {
    name: "Kurapika",
    aff: "Clan Kurta · Garde du Prince Woble",
    nen: "Matérialisation (Spécialiste sous Emperor Time)",
    power: "Cinq chaînes Nen : Chain Jail (emprisonne la Brigade Fantôme), Dowsing Chain, Holy Chain (soin), Judgment Chain (serment mortel) et Steal Chain qui vole les capacités d'autrui. Yeux écarlates."
  },
  {
    name: "Leorio Paradinight",
    aff: "Association des Hunters (Zodiaque « Sanglier »)",
    nen: "Émission",
    power: "Médecin. Peut projeter son poing à distance en le faisant surgir à travers une surface."
  },
  {
    name: "Hisoka Morow",
    aff: "Ancien membre de la Brigade Fantôme (#4)",
    nen: "Transformation",
    power: "Bungee Gum : aura élastique et collante (« mes deux qualités »). Texture Surprise : recouvre une surface d'une fausse texture pour tromper l'ennemi."
  },
  {
    name: "Chrollo Lucilfer",
    aff: "Chef de la Brigade Fantôme",
    nen: "Spécialiste",
    power: "Skill Hunter (Bandit's Secret) : un grimoire qui vole et stocke les capacités Nen d'autrui, utilisables tant que certaines conditions sont remplies."
  },
  {
    name: "Illumi Zoldyck",
    aff: "Famille Zoldyck · Brigade Fantôme (#11)",
    nen: "Manipulation",
    power: "Contrôle ses victimes au moyen d'aiguilles Nen plantées dans leur corps, modifiant leur comportement, leur apparence ou les transformant en marionnettes."
  },
  {
    name: "Ging Freecss",
    aff: "Association des Hunters (Hunter Double Étoile)",
    nen: "Polyvalent (maîtrise exceptionnelle)",
    power: "Père de Gon. Considéré comme l'un des Nen-users les plus complets ; maîtrise les six catégories à très haut niveau."
  },
  {
    name: "Isaac Netero",
    aff: "Ancien Président de l'Association des Hunters",
    nen: "Renforcement",
    power: "Centième Main de Guanyin (Bodhisattva) : statue Nen géante frappant à la vitesse de la prière de Netero. Rose Miniature (bombe à la mort)."
  },
  {
    name: "Meruem",
    aff: "Roi des Fourmis-Chimères",
    nen: "Spécialiste",
    power: "Puissance, vitesse et intelligence colossales. Peut absorber l'aura et les facultés des Nen-users qu'il dévore. En d'une portée immense."
  },
  {
    name: "Neferpitou",
    aff: "Garde Royal (Fourmis-Chimères)",
    nen: "Spécialiste",
    power: "Terpsichora : marionnettes contrôlées par fils d'aura (même après sa mort). Doctor Blythe : marionnette soignante."
  },
  {
    name: "Shaiapouf",
    aff: "Garde Royal (Fourmis-Chimères)",
    nen: "Manipulation / Matérialisation",
    power: "Beelzebub : peut se diviser en multiples clones et insectes-écailles pour espionner et manipuler, au prix d'une perte de puissance."
  },
  {
    name: "Menthuthuyoupi",
    aff: "Garde Royal (Fourmis-Chimères)",
    nen: "Renforcement / Transformation",
    power: "Métamorphoses corporelles et régénération extrême ; transforme ses émotions en puissance physique brute."
  },
  {
    name: "Biscuit Krueger",
    aff: "Hunter · Mentor de Gon et Killua",
    nen: "Transformation",
    power: "Cookie-chan / Magical Esthetician : massage Nen qui régénère et détend. Dissimule sa véritable carrure musclée derrière une apparence de fillette."
  },
  {
    name: "Kite",
    aff: "Disciple de Ging · Hunter",
    nen: "Matérialisation / Spécialiste",
    power: "Crazy Slots (Conjurer's Crazy Roulette) : une roulette aléatoire détermine l'arme matérialisée qu'il obtient, dont la faux « Silent Waltz »."
  },
  {
    name: "Knuckle Bine",
    aff: "Disciple de Morel · Hunter",
    nen: "Émission",
    power: "Hakoware (A.P.R.) : impose des « intérêts » d'aura à l'adversaire ; quand la dette dépasse l'aura de la cible, celle-ci perd l'accès au Nen (banqueroute)."
  },
  {
    name: "Shoot McMahon",
    aff: "Disciple de Morel · Hunter",
    nen: "Matérialisation / Manipulation",
    power: "Hôtel Rafflesia : mains flottantes et une cage volante qui emprisonnent et démembrent les cibles."
  },
  {
    name: "Morel Mackernasey",
    aff: "Hunter (Single Star) · Mentor",
    nen: "Émission",
    power: "Deep Purple : manipule la fumée de sa pipe pour créer des clones, des murs ou des marionnettes de fumée."
  },
  {
    name: "Palm Siberia",
    aff: "Alliée · ex-Fourmi-Chimère",
    nen: "Manipulation / Matérialisation",
    power: "Wink Blue : miroir de divination permettant d'espionner une cible. Plus tard, capacités renforcées de Fourmi-Chimère."
  },
  {
    name: "Feitan Portor",
    aff: "Brigade Fantôme",
    nen: "Transformation",
    power: "Pain Packer (Rising Sun / Pain Releaser) : plus il souffre, plus son attaque solaire dégage chaleur et lumière destructrices."
  },
  {
    name: "Zeno Zoldyck",
    aff: "Famille Zoldyck",
    nen: "Transformation",
    power: "Dragon Dive / Dragon Head : sculpte son aura en dragons offensifs lancés sur de larges zones."
  },
  {
    name: "Silva Zoldyck",
    aff: "Famille Zoldyck (chef)",
    nen: "Transformation",
    power: "Assassin d'élite ; sphères d'aura explosives et puissance physique de très haut niveau."
  },
  {
    name: "Wing",
    aff: "Hunter · Maître de Nen",
    nen: "Renforcement",
    power: "Instructeur de Gon, Killua et Zushi ; enseigne les bases du Nen (Ten, Zetsu, Ren, Hatsu)."
  },
  {
    name: "Genthru",
    aff: "Antagoniste (Greed Island)",
    nen: "Émission / Transformation",
    power: "Little Flower / Countdown (« Bomber ») : bombes Nen déclenchées par contact et compte à rebours."
  }
];

/* ---------- 2. GUERRE DE SUCCESSION : REINES & PRINCES ---------- */
/* 8 reines, 14 princes. Chaque prince est rattaché à sa reine-mère.
   Cliquer un prince affiche son entourage. */

const QUEENS = [
  { id: "Q1", name: "Unma Hui Guo Rou", rank: "1ʳᵉ Reine", note: "Première épouse du roi Nasubi." },
  { id: "Q2", name: "Duazul Hui Guo Rou", rank: "2ᵉ Reine", note: "Élève aussi Halkenburg, fils biologique d'Unma." },
  { id: "Q3", name: "Tang Zhao", rank: "3ᵉ Reine", note: "" },
  { id: "Q4", name: "Katrono", rank: "4ᵉ Reine", note: "" },
  { id: "Q5", name: "Swinko-swinko", rank: "5ᵉ Reine", note: "" },
  { id: "Q6", name: "Seiko", rank: "6ᵉ Reine", note: "Mère des jumelles Kacho et Fugetsu." },
  { id: "Q7", name: "Sevanti", rank: "7ᵉ Reine", note: "" },
  { id: "Q8", name: "Oito", rank: "8ᵉ Reine", note: "La plus jeune épouse, d'origine modeste." }
];

const PRINCES = [
  {
    num: 1, name: "Benjamin", queen: "Q1", mafia: null,
    beast: "Bête gardienne issue de la cérémonie de l'Urne aux Graines. Ses capacités restent en grande partie tenues secrètes ; elle lui permettrait d'hériter des pouvoirs Nen de ses soldats fidèles à leur mort.",
    desc: "L'aîné, conseiller militaire adjoint. Guerrier impitoyable et favori pour le trône ; commande une armée privée d'élite loyale jusqu'à la mort.",
    entourage: [
      { name: "Balsamilco Might", role: "Aide de camp / chef d'état-major" },
      { name: "Babimyna", role: "Garde (Manipulateur, détecte les mensonges)" },
      { name: "Musse", role: "Soldat d'élite (infiltré comme espion chez Camilla)" },
      { name: "Liljei Yorbian", role: "Soldat d'élite (Matérialisation)" },
      { name: "Tuffdy", role: "Soldat d'élite" },
      { name: "Vincent", role: "Soldat (capacité d'assassinat infiltrée)" }
    ]
  },
  {
    num: 2, name: "Camilla", queen: "Q2", mafia: null,
    beast: "Bête de type Manipulation, capable de contrôler les actions d'autrui (à distinguer de sa propre faculté d'auto-résurrection).",
    desc: "Narcissique et cruelle, persuadée d'être la plus digne du trône. Sa bête Nen la ressuscite si elle est tuée, au prix d'une partie de sa propre vie.",
    entourage: [
      { name: "Gardes personnels", role: "7 gardes du corps" },
      { name: "Musse", role: "Espion envoyé par le Prince Benjamin" }
    ]
  },
  {
    num: 3, name: "Zhang Lei", queen: "Q3", mafia: "Xi-Yu",
    beast: "Bête en forme de roue/disque enflammé à symétrie octuple, à la bouche en fente. Chaque jour elle produit une pièce ; quiconque la possède reçoit une capacité dont la valeur — et la puissance — croît avec le temps.",
    desc: "Prince géant et bon vivant, mécène de la famille mafieuse Xi-Yu. Cherche des alliances plutôt que la confrontation directe.",
    entourage: [
      { name: "Theta", role: "Hunter / instructrice de Nen" },
      { name: "Sandra", role: "Garde du corps" },
      { name: "Famille Xi-Yu", role: "Soutien mafieux (voir onglet Clans)" },
      { name: "Coventoba", role: "Espion envoyé par le Prince Benjamin" }
    ]
  },
  {
    num: 4, name: "Tserriednich", queen: "Q1", mafia: "Heil-Ly",
    beast: "Bête à corps de cheval et tête de femme (une seconde tête dans la gueule). Elle traverse les murs et détecte quiconque ; elle frappe d'une excroissance maligne ceux qui mentent au prince, excroissance qui s'étend s'ils tentent de lui nuire.",
    desc: "Génie sadique, l'un des esprits les plus brillants — et les plus dangereux — de l'empire. Mécène de la famille Heil-Ly. Acquiert un Nen surpuissant en un temps record.",
    entourage: [
      { name: "Salkov", role: "Garde (chien Nen « Dummy » détecteur de mensonges)" },
      { name: "Theta", role: "Instructrice de Nen (royaume)" },
      { name: "Bellam", role: "Garde du corps" },
      { name: "Famille Heil-Ly", role: "Soutien mafieux (voir onglet Clans)" }
    ]
  },
  {
    num: 5, name: "Tubeppa", queen: "Q2", mafia: null,
    beast: "Bête de type Transformation vivant sur le corps de Tubeppa, capable de synthétiser divers produits chimiques et drogues à l'intérieur de l'organisme de sa partenaire.",
    desc: "Prince intellectuel et scientifique, entouré de nombreux Hunters érudits. Joue une partie patiente et analytique.",
    entourage: [
      { name: "Ses Hunters", role: "Spécialistes et chercheurs" },
      { name: "Gardes personnels", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 6, name: "Tyson", queen: "Q4", mafia: null,
    beast: "Bête en forme de cœur géant doté d'un œil central. Elle engendre de petites créatures (« Eye Wogs ») qui collectent l'aura de personnes désignées en échange d'un sentiment de bonheur.",
    desc: "Fondatrice d'un mouvement spirituel pacifiste, entourée de disciples dévoués qui la vénèrent.",
    entourage: [
      { name: "Disciples", role: "Fidèles de son culte" },
      { name: "Gardes personnels", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 7, name: "Luzurus", queen: "Q2", mafia: "Cha-R",
    beast: "Bête manipulatrice : elle crée ce que la cible désire pour l'appâter ; lorsque celle-ci cède à la tentation, elle tombe sous le contrôle de la bête.",
    desc: "Prince mécène de la famille mafieuse Cha-R. S'appuie sur son réseau criminel pour peser dans la guerre de succession.",
    entourage: [
      { name: "Famille Cha-R", role: "Soutien mafieux (voir onglet Clans)" },
      { name: "Gardes personnels", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 8, name: "Salé-salé", queen: "Q5", mafia: null,
    beast: "Bête émettant une fumée blanche : l'inhaler rend épris du prince. Au-delà d'un seuil, une réplique miniature de la bête apparaît sur la victime et diffuse à son tour la fumée — une contagion en chaîne.",
    desc: "Prince séducteur et mondain, entouré d'une garde rapprochée majoritairement féminine.",
    entourage: [
      { name: "Gardes du corps", role: "Sécurité rapprochée" },
      { name: "Personnel", role: "Domestiques et assistants" }
    ]
  },
  {
    num: 9, name: "Halkenburg", queen: "Q1", mafia: null,
    beast: "L'une des rares bêtes à avoir révélé toute sa puissance. De type Renforcement, elle partage sa capacité avec les affiliés du prince et confère à ses alliés des pouvoirs propres (archers Nen) — quitte à agir d'elle-même contre la volonté de Halkenburg.",
    desc: "Fils biologique d'Unma élevé par Duazul. Ancien Hunter idéaliste opposé à l'effusion de sang. Sa bête Nen invoque des archers spectraux qui agissent pour protéger ses partisans, même contre sa volonté.",
    entourage: [
      { name: "Ses gardes / partisans", role: "Liés par sa bête Nen (archers)" },
      { name: "Gardes personnels", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 10, name: "Kacho", queen: "Q6", mafia: null,
    beast: "Bête gardienne dont les détails restent peu dévoilés. Kacho met au point une faculté qui, après sa mort, crée un double Nen d'elle-même pour continuer à protéger sa sœur Fugetsu.",
    desc: "Jumelle aînée, déterminée à fuir la guerre avec sa sœur Fugetsu. Sa capacité posthume crée une bête Nen-clone d'elle pour continuer à protéger sa sœur après sa mort.",
    entourage: [
      { name: "Fugetsu", role: "Sa sœur jumelle (11ᵉ princesse)" },
      { name: "Servantes", role: "Personnel personnel" }
    ]
  },
  {
    num: 11, name: "Fugetsu", queen: "Q6", mafia: null,
    beast: "Bête gardienne associée à sa faculté d'évasion : elle ouvre une porte Nen vers un espace-refuge isolé où Fugetsu peut se mettre à l'abri.",
    desc: "Jumelle cadette. Sa capacité ouvre une porte Nen (« carte du monde ») vers un espace-refuge isolé, lui permettant d'échapper au danger.",
    entourage: [
      { name: "Kacho", role: "Sa sœur jumelle (10ᵉ princesse)" },
      { name: "Servantes", role: "Personnel personnel" }
    ]
  },
  {
    num: 12, name: "Momoze", queen: "Q7", mafia: null,
    beast: "Bête gardienne aux capacités non révélées : Momoze est tuée très tôt dans la guerre (par la capacité « Silent Majority ») avant qu'elle ne se manifeste pleinement.",
    desc: "Jeune princesse, l'une des premières victimes de la guerre : tuée par la capacité « Silent Majority ».",
    entourage: [
      { name: "Servantes", role: "Personnel personnel" },
      { name: "Garde", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 13, name: "Marayam", queen: "Q7", mafia: null,
    beast: "Bête gardienne dont la capacité n'a pas été dévoilée ; le jeune prince est piloté par sa mère, la reine Sevanti.",
    desc: "Le plus jeune prince garçon, encore enfant, instrumentalisé par sa mère la reine Sevanti.",
    entourage: [
      { name: "Reine Sevanti", role: "Sa mère, qui agit en son nom" },
      { name: "Gardes personnels", role: "Sécurité rapprochée" }
    ]
  },
  {
    num: 14, name: "Woble", queen: "Q8", mafia: null,
    beast: "Bête gardienne qui, jusqu'à présent, ne s'est pas manifestée ni n'a entrepris la moindre action.",
    desc: "Le plus jeune prince : un bébé, fille de la reine Oito. Protégée par Kurapika, engagé comme garde du corps Nen. Cible vulnérable, au cœur de l'intrigue de Kurapika.",
    entourage: [
      { name: "Kurapika", role: "Garde du corps (Nen-user, chaînes)" },
      { name: "Reine Oito", role: "Sa mère" },
      { name: "Bill", role: "Hunter / garde du corps" },
      { name: "Sayird", role: "Hunter / garde du corps" },
      { name: "Shimano", role: "Servante" }
    ]
  }
];

/* ---------- 3. CLANS MAFIEUX DU BLACK WHALE ---------- */
const MAFIA = [
  {
    name: "Famille Xi-Yu",
    princeNum: 3, princeName: "Zhang Lei",
    note: "La plus grande des trois familles par les effectifs et les finances.",
    members: [
      { name: "Onior Longbao", role: "Boss", ability: "" },
      { name: "Hinrigh Biganduffno", role: "Sous-boss (Underboss)", ability: "Spécialiste — doigts-crochets de torture et de crochetage." },
      { name: "Wadako", role: "Membre", ability: "" },
      { name: "Sappher", role: "Membre", ability: "" }
    ]
  },
  {
    name: "Famille Cha-R",
    princeNum: 7, princeName: "Luzurus",
    note: "Environ 250 membres embarqués sur le Black Whale.",
    members: [
      { name: "Brocco Li", role: "Chef (Second-Track Faker)", ability: "" },
      { name: "Ken'i Wang", role: "Sous-boss (Underboss)", ability: "" },
      { name: "Membres Cha-R", role: "Soldats", ability: "" }
    ]
  },
  {
    name: "Famille Heil-Ly",
    princeNum: 4, princeName: "Tserriednich",
    note: "≈ 23 membres au départ. Sa boss est la fille illégitime du roi Nasubi.",
    members: [
      { name: "Morena Prudo", role: "Boss (Second-Track Faker)", ability: "Sweet Temptation : « infecte » jusqu'à 22 personnes en leur octroyant le Nen ; les infectés gagnent en puissance à chaque meurtre." },
      { name: "Luini", role: "Bras droit", ability: "Téléporte vers lui quiconque détient l'une de ses cartes." },
      { name: "Borksen", role: "Membre", ability: "" },
      { name: "Dogman", role: "Membre", ability: "" },
      { name: "Chiffon Toto", role: "Membre", ability: "" },
      { name: "Montblanc Toto", role: "Membre", ability: "" },
      { name: "Sodom", role: "Membre", ability: "" },
      { name: "Terebellum", role: "Membre", ability: "" }
    ]
  }
];

/* ---------- 4. BRIGADE FANTÔME (Genei Ryodan) ---------- */
const TROUPE = {
  leader: {
    name: "Chrollo Lucilfer",
    role: "Chef (Boss)",
    nen: "Spécialiste",
    ability: "Skill Hunter (Bandit's Secret) : grimoire qui vole et utilise les capacités Nen d'autrui.",
    status: "actif"
  },
  members: [
    { name: "Nobunaga Hazama", nen: "Renforcement", ability: "Sabreur ; En au sabre couvrant un large rayon (4 m).", status: "actif" },
    { name: "Feitan Portor", nen: "Transformation", ability: "Pain Packer (Rising Sun) : attaque solaire proportionnelle à sa douleur. Vice-capitaine temporaire.", status: "actif" },
    { name: "Machi Komacine", nen: "Transformation", ability: "Fils de Nen : recoud les membres, soigne et tend des câbles quasi invisibles.", status: "actif" },
    { name: "Phinks Magcub", nen: "Renforcement", ability: "Ripper Cyclone : coup dont la puissance croît avec le nombre de rotations du bras.", status: "actif" },
    { name: "Shizuku Murasaki", nen: "Matérialisation", ability: "Blinky (Deme-chan) : aspirateur Nen qui engloutit toute matière non vivante.", status: "actif" },
    { name: "Bonolenov Ndongo", nen: "Matérialisation / Émission", ability: "Battle Cantabile : transforme ses blessures en instruments dont les sons deviennent des attaques.", status: "actif" },
    { name: "Franklin Bordeau", nen: "Émission", ability: "Double Machine Gun : tire des rafales de balles d'aura par le bout de ses doigts.", status: "actif" },
    { name: "Kalluto Zoldyck", nen: "Manipulation", ability: "Manipule papier et confettis Nen (« Dancing Hairpin »). A rejoint la Brigade pour remplacer Hisoka.", status: "actif" },
    { name: "Illumi Zoldyck", nen: "Manipulation", ability: "Manipulation par aiguilles. A intégré la Brigade (#11).", status: "actif" },
    { name: "Hisoka Morow", nen: "Transformation", ability: "Bungee Gum & Texture Surprise. A quitté la Brigade et la traque désormais.", status: "ancien" },
    { name: "Uvogin", nen: "Renforcement", ability: "Big Bang Impact : coup de poing d'une puissance colossale.", status: "décédé" },
    { name: "Pakunoda", nen: "Spécialiste", ability: "Psychométrie : lit les souvenirs par le toucher et les transmet via des « balles de mémoire ».", status: "décédée" },
    { name: "Shalnark", nen: "Manipulation", ability: "Black Voice : antennes Nen plantées dans une cible pour la contrôler totalement.", status: "décédé" },
    { name: "Kortopi", nen: "Matérialisation", ability: "Gallery Fake : copie à l'identique tout objet touché ; les copies brillent dans le noir.", status: "décédé" }
  ]
};
