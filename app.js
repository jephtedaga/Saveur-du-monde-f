console.log("Saveurs du Monde chargé");

const recipes = [
  {
    id:1, title:"Coq au Vin", region:"France", continent:"eu",
    img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=75",
    desc:"Un grand classique de la gastronomie française — poulet mijoté au vin rouge avec lardons et champignons.",
    time:90, servings:4, difficulty:"Moyen", featured:true,
    ingredients:["1 poulet fermier coupé en morceaux","75 cl de vin rouge","200 g de lardons fumés","300 g de champignons de Paris","2 carottes","2 oignons","3 gousses d'ail","Bouquet garni","Huile d'olive","Sel, poivre"],
    steps:["Faire dorer les lardons et les champignons dans une cocotte. Réserver.","Faire revenir les morceaux de poulet sur toutes leurs faces jusqu'à coloration dorée.","Ajouter les légumes, l'ail et le bouquet garni. Flamber éventuellement au cognac.","Verser le vin rouge, couvrir et laisser mijoter à feu doux 60 minutes.","Ajouter les lardons et champignons en fin de cuisson. Ajuster l'assaisonnement et servir."]
  },
  {
    id:2, title:"Thiéboudienne", region:"Sénégal", continent:"af",
    img:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=75",
    desc:"Le plat national sénégalais — riz cuit dans une sauce tomate parfumée avec poisson et légumes.",
    time:75, servings:6, difficulty:"Moyen", featured:true,
    ingredients:["1 kg de poisson (thiof ou capitaine)","600 g de riz brisé","400 g de concentré de tomate","2 oignons","1 chou","3 carottes","2 aubergines","Piment, bissap","Huile d'arachide","Sélim, soumbala"],
    steps:["Préparer le poisson : inciser et farcir avec un mélange d'ail, piment et persil (rof). Faire frire jusqu'à dorure.","Faire revenir les oignons dans l'huile, ajouter le concentré de tomate, cuire 10 min.","Ajouter de l'eau, les légumes et les épices. Cuire 20 min.","Retirer les légumes et le poisson, cuire le riz dans le bouillon jusqu'à absorption totale.","Dresser : riz au fond, poisson et légumes par-dessus. Servir avec sauce et citron."]
  },
  {
    id:3, title:"Paella Valenciana", region:"Espagne", continent:"eu",
    img:"https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&q=75",
    desc:"La paella authentique de Valence — riz crémeux au safran, lapin, poulet et haricots verts.",
    time:60, servings:4, difficulty:"Moyen",
    ingredients:["400 g de riz bomba","300 g de poulet","200 g de lapin","150 g de haricots verts","100 g de haricots beurre","400 g de tomates","Safran","Paprika fumé","Romarin","Huile d'olive extra-vierge"],
    steps:["Chauffer l'huile dans la paellera, dorer le poulet et le lapin.","Ajouter les légumes, faire revenir. Incorporer la tomate et le paprika.","Verser le bouillon chaud, ajouter le safran infusé. Porter à ébullition.","Ajouter le riz, répartir uniformément. Cuire 18 min sans remuer.","Laisser reposer 5 min couvert d'aluminium. Le fond doit être légèrement caramélisé (socarrat)."]
  },
  {
    id:4, title:"Jollof Rice", region:"Ghana", continent:"af",
    img:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=75",
    desc:"Le riz jollof ouest-africain — fumé, épicé et d'une couleur rouge profonde. Un incontournable festif.",
    time:50, servings:6, difficulty:"Facile",
    ingredients:["500 g de riz long grain","400 g de tomates","200 g de concentré de tomate","2 poivrons rouges","2 oignons","Bouillon de poulet","Gingembre, ail","Épices mélangées","Laurier","Huile végétale"],
    steps:["Mixer tomates, poivrons et oignons. Cuire la purée 15 min dans l'huile chaude.","Ajouter le concentré de tomate et les épices. Cuire encore 10 min.","Verser le bouillon, porter à ébullition. Ajouter le riz lavé.","Couvrir hermétiquement, cuire à feu doux 25 min. Le fond fumé est une signature.","Mélanger délicatement avant de servir. Accompagner de poulet grillé ou de plantains."]
  },
  {
    id:5, title:"Pasta Carbonara", region:"Italie", continent:"eu",
    img:"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=75",
    desc:"La vraie carbonara romaine — spaghetti, guanciale, œufs et pecorino. Aucune crème fraîche à l'horizon.",
    time:25, servings:2, difficulty:"Facile", fast:true,
    ingredients:["200 g de spaghetti","100 g de guanciale","3 jaunes d'œuf + 1 œuf entier","80 g de pecorino romano râpé","Poivre noir concassé","Sel (pour l'eau de cuisson)"],
    steps:["Cuire les pâtes al dente dans de l'eau très salée. Réserver 200 ml d'eau de cuisson.","Faire rissoler le guanciale à sec jusqu'à ce qu'il soit croustillant. Réserver la graisse.","Fouetter œufs + pecorino + poivre. Délayer avec un peu d'eau de cuisson tiède.","Mélanger pâtes chaudes + graisse du guanciale hors du feu. Ajouter la crème d'œufs en remuant vite.","Ajouter le guanciale, ajuster la texture avec l'eau de cuisson. Servir immédiatement."]
  },
  {
    id:6, title:"Tagine d'Agneau", region:"Maroc", continent:"af",
    img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=75",
    desc:"Tagine marocain traditionnel aux pruneaux et amandes — fondant, parfumé au ras el hanout.",
    time:120, servings:4, difficulty:"Facile",
    ingredients:["800 g d'épaule d'agneau","200 g de pruneaux","100 g d'amandes émondées","2 oignons","Ras el hanout","Gingembre","Cannelle","Coriandre fraîche","Huile d'olive","Miel"],
    steps:["Faire revenir l'agneau coupé en morceaux avec les oignons et les épices.","Couvrir d'eau, cuire à feu doux 45 min jusqu'à ce que la viande soit tendre.","Ajouter les pruneaux et le miel. Continuer la cuisson 20 min.","Faire dorer les amandes à sec dans une poêle.","Dresser dans le plat à tagine, parsemer d'amandes et de coriandre. Servir avec couscous."]
  },
  {
    id:7, title:"Bœuf Bourguignon", region:"France", continent:"eu",
    img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=75",
    desc:"La quintessence de la cuisine bourguignonne — bœuf braisé au vin de Bourgogne, légumes et herbes.",
    time:180, servings:6, difficulty:"Difficile",
    ingredients:["1.5 kg de bœuf à braiser (paleron)","75 cl de vin de Bourgogne","200 g de lardons","300 g de champignons","20 petits oignons grelots","3 carottes","Farine","Bouquet garni","Beurre","Sel, poivre"],
    steps:["Faire mariner le bœuf coupé en cubes dans le vin toute une nuit avec les légumes.","Égoutter, sécher et faire dorer les morceaux de bœuf. Singer avec la farine.","Verser la marinade, ajouter le bouquet garni. Porter à ébullition, puis enfourner à 160°C.","Cuire 2h30 au four. Ajouter champignons et oignons grelots 30 min avant la fin.","Dégraisser, ajuster l'assaisonnement. Servir avec pommes de terre vapeur."]
  },
  {
    id:8, title:"Ndolé Camerounais", region:"Cameroun", continent:"af",
    img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=75",
    desc:"Le plat national camerounais — feuilles de ndolé (amarante) aux crevettes, bœuf et arachides.",
    time:90, servings:4, difficulty:"Moyen",
    ingredients:["500 g de feuilles de ndolé (surgelées)","300 g de crevettes","300 g de viande de bœuf","200 g d'arachides décortiquées","3 oignons","Ail, gingembre","Piment","Poisson fumé (optionnel)","Huile de palme","Sel"],
    steps:["Faire bouillir les feuilles de ndolé dans de l'eau salée 3 fois de suite pour enlever l'amertume.","Moudre les arachides. Faire revenir oignons, ail et gingembre dans l'huile de palme.","Ajouter la viande et les crevettes, faire dorer. Incorporer les arachides moulues.","Ajouter les feuilles de ndolé essorées et le poisson fumé. Mouiller légèrement.","Laisser mijoter 30 min à feu doux. Servir avec du plantain ou du bâton de manioc."]
  },
  {
    id:9, title:"Ratatouille Niçoise", region:"France", continent:"eu",
    img:"https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800&q=75",
    desc:"La ratatouille provençale authentique — courgettes, aubergines et poivrons confits à l'huile d'olive.",
    time:30, servings:4, difficulty:"Facile", fast:true,
    ingredients:["2 courgettes","2 aubergines","3 poivrons colorés","4 tomates bien mûres","2 oignons","4 gousses d'ail","Thym, romarin, basilic","Huile d'olive","Sel, poivre"],
    steps:["Couper tous les légumes en dés réguliers. Saler légèrement les aubergines, laisser dégorger.","Faire revenir chaque légume séparément dans l'huile d'olive pour qu'ils gardent leur goût.","Réunir tous les légumes dans la cocotte avec l'ail et les herbes.","Cuire à feu doux 20 min en remuant de temps en temps.","Ajuster l'assaisonnement. Meilleures réchauffées le lendemain avec du pain grillé."]
  },
  {
    id:10, title:"Soupe Egusi", region:"Nigeria", continent:"af",
    img:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=75",
    desc:"Soupe épaisse aux graines de courge moulues, épinards et viande — un pilier de la cuisine yoruba.",
    time:45, servings:4, difficulty:"Moyen", fast:true,
    ingredients:["200 g de graines d'egusi moulues","300 g de viande de bœuf ou chèvre","100 g de crevettes séchées","1 bouquet d'épinards ou de feuilles d'ugu","2 oignons","Piment fort","Huile de palme","Bouillon","Ogiri (locust beans)"],
    steps:["Faire revenir l'egusi moulu dans l'huile de palme jusqu'à formation de grumeaux dorés.","Ajouter l'oignon, le piment, le bouillon de viande. Cuire 15 min.","Incorporer la viande précuite et les crevettes séchées. Continuer la cuisson.","Ajouter les légumes verts en dernier. Cuire 5 min.","Servir avec eba (farine de manioc), pounded yam ou riz."]
  },
];

function buildCard(r, large=false) {
  const tagClass = r.continent==='eu' ? 'tag-eu' : 'tag-af';
  const diffClass = r.difficulty==='Facile' ? 'diff-easy' : r.difficulty==='Moyen' ? 'diff-medium' : 'diff-hard';
  return `
    <div class="card${large?' large':''}" onclick="openModal(${r.id})">
      <img src="${r.img}" alt="${r.title}" loading="lazy">
      <span class="badge-diff ${diffClass}">${r.difficulty}</span>
      <div class="card-body">
        <span class="card-region ${tagClass}">${r.region}</span>
        <h3>${r.title}</h3>
        <p>${r.desc.substring(0,90)}…</p>
        <div class="card-meta">
          <span>⏱️ ${r.time} min</span>
          <span>👥 ${r.servings} pers.</span>
        </div>
      </div>
    </div>`;
}

function renderGrid(containerId, items, featuredFirst=false) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let html = '';
  items.forEach((r, i) => {
    html += buildCard(r, featuredFirst && i===0);
  });
  el.innerHTML = html;
}

function openModal(id) {
  const r = recipes.find(x=>x.id===id);
  if (!r) return;
  const tagClass = r.continent==='eu' ? 'tag-eu' : 'tag-af';
  document.getElementById('modal-content').innerHTML = `
    <img class="modal-img" src="${r.img}" alt="${r.title}">
    <div class="modal-body">
      <div class="modal-region ${tagClass}">${r.continent==='eu'?'🇪🇺':'🌍'} ${r.region}</div>
      <div class="modal-title">${r.title}</div>
      <div class="modal-desc">${r.desc}</div>
      <div class="modal-meta">
        <div class="meta-item"><div class="meta-val">${r.time}</div><div class="meta-lbl">Minutes</div></div>
        <div class="meta-item"><div class="meta-val">${r.servings}</div><div class="meta-lbl">Personnes</div></div>
        <div class="meta-item"><div class="meta-val">${r.difficulty}</div><div class="meta-lbl">Difficulté</div></div>
      </div>
      <h4>Ingrédients</h4>
      <ul class="ingredient-list">${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul>
      <h4>Préparation</h4>
      <ol class="steps-list">${r.steps.map(s=>`<li><p>${s}</p></li>`).join('')}</ol>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay') && !e.target.classList.contains('close-btn')) return;
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const pg = document.getElementById('page-'+name);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('.tab').forEach(t => {
    if (t.textContent.toLowerCase().includes(name) ||
      (name==='accueil' && t.textContent==='Accueil') ||
      (name==='rapides' && t.textContent==='Rapides')) {
      t.classList.add('active');
    }
  });
  document.getElementById('hero-section').style.display = name==='accueil' ? 'block' : 'none';
  window.scrollTo({top: name==='accueil' ? 0 : 80, behavior:'smooth'});
}

function scrollToRecipes() {
  document.getElementById('recipes-section').scrollIntoView({behavior:'smooth', block:'start'});
}

function filterRecipes(q) {
  if (!q) { renderGrid('featured-grid', recipes.slice(0,5), true); return; }
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(q.toLowerCase()) ||
    r.region.toLowerCase().includes(q.toLowerCase()) ||
    r.desc.toLowerCase().includes(q.toLowerCase())
  );
  showPage('accueil');
  renderGrid('featured-grid', filtered.slice(0,6), false);
}

renderGrid('featured-grid', recipes.slice(0,5), true);
renderGrid('eu-grid', recipes.filter(r=>r.continent==='eu'), true);
renderGrid('af-grid', recipes.filter(r=>r.continent==='af'), true);
renderGrid('fast-grid', recipes.filter(r=>r.fast||r.time<=30), false);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service worker registered.', reg))
      .catch(err => console.error('Service worker registration failed:', err));
  });
}
