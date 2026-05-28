const DIET = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Fiocchi d'avena",
            alts: [
              "20 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "20 gr · Corn Flakes Originali – Kellogg's",
              "20 gr · Rice Krispies – Kellogg's",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "20 gr · Semi di chia"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: [
              "20 gr · Lino – semi",
              "15 gr · Burro d'arachidi",
              "15 gr · Cioccolato fondente"
            ]
          },
          {
            qty: "100 gr", item: "Frutta fresca",
            alts: [
              "10 gr · Miele",
              "20 gr · Marmellata – Rigoni di Asiago"
            ]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "40 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "120 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "10 gr", item: "Burro d'arachidi",
            alts: ["10 gr · Cioccolato fondente"]
          },
          {
            qty: "100 gr", item: "Frutta fresca",
            alts: [
              "20 gr · Marmellata – Rigoni di Asiago",
              "10 gr · Sciroppo d'acero",
              "10 gr · Miele"
            ]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "60 gr", item: "Pane integrale",
            alts: [
              "50 gr · Pan Bauletto al Grano Duro – Mulino Bianco",
              "40 gr · Fette biscottate integrali"
            ]
          },
          { qty: "50 gr",  item: "Uova di gallina – intero", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "150 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Latte di vacca parz. scremato", alts: [] },
          { qty: "30 gr",  item: "Proteine Vegane (pisello, riso e canapa)", alts: [] }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "350 gr", item: "Protein drink (Milk)", alts: [] }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pasta Integrale",
            alts: [
              "80 gr · Riso integrale",
              "80 gr · Farro",
              "80 gr · Quinoa",
              "80 gr · Grano saraceno",
              "80 gr · Orzo perlato",
              "80 gr · Cous Cous",
              "70 gr · Polenta (farina di mais)",
              "320 gr · Patate",
              "180 gr · Gnocchi di Patate",
              "110 gr · Pane di grano duro",
              "120 gr · Pane integrale",
              "120 gr · Pane di segale",
              "80 gr · Piadina"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero (o proteina a scelta)",
            alts: [
              "240 gr · Lenticchie in scatola – scolate",
              "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati",
              "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel",
              "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light",
              "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia",
              "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani",
              "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato",
              "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale",
              "100 gr · Tempeh",
              "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi",
              "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare",
              "120 gr · Salmone",
              "120 gr · Tonno",
              "120 gr · Sgombro / Maccarello",
              "70 gr · Prosciutto crudo"
            ]
          },
          {
            qty: "200 gr", item: "Verdura",
            alts: ["80 gr · Insalata"]
          },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: [
              "40 gr · Avocado",
              "20 gr · Pesto alla Genovese"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda Pre-WO", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "20 gr · Fiocchi d'avena",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "20 gr · Formelle di Frumento Integrale – Weetabix",
              "20 gr · Barretta ai cereali e cioccolato"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "50 gr", item: "Pane integrale",
            alts: [
              "50 gr · Pane di grano duro",
              "50 gr · Pane di segale",
              "30 gr · Cous Cous",
              "30 gr · Polenta (farina di mais)",
              "30 gr · Gran Purè – Knorr",
              "150 gr · Gnocchi alla Romana – Rana",
              "30 gr · Crackers (normali, riso, mais)",
              "30 gr · Grissini",
              "30 gr · Gallette di mais",
              "30 gr · Gallette di riso",
              "30 gr · Integrale – Wasa",
              "30 gr · Fette biscottate integrali"
            ]
          },
          {
            qty: "200 gr", item: "Carne (tagli magri)",
            alts: [
              "200 gr · Pollo – petto",
              "200 gr · Manzo",
              "120 gr · Sfilacci di cavallo",
              "250 gr · Pesce bianco",
              "200 gr · Pesce spada",
              "150 gr · Salmone affumicato",
              "300 gr · Molluschi",
              "300 gr · Crostacei",
              "300 gr · Gamberetti sgusciati",
              "400 gr · Uova di gallina – albume",
              "300 gr · Fiocchi di Latte",
              "170 gr · Seitan al Naturale"
            ]
          },
          {
            qty: "200 gr", item: "Verdura",
            alts: ["80 gr · Insalata"]
          },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: [
              "40 gr · Avocado",
              "60 gr · Olive verdi"
            ]
          }
        ]
      }
    ]
  }
];

/* ── RENDER ── */
let uid = 0;

function renderApp() {
  document.getElementById('app').innerHTML = DIET.map(renderMeal).join('');
}

function renderMeal(m) {
  const platesHTML = m.plates.map(renderPlate).join('');
  return `
    <article class="meal-card ${m.cls}" id="${m.id}">
      <div class="meal-header">
        <span class="meal-icon">${m.icon}</span>
        <span class="meal-title">${m.meal}</span>
      </div>
      ${platesHTML}
    </article>`;
}

function renderPlate(plate) {
  const foodsHTML = plate.foods.map(renderFood).join('');
  return `
    <div class="plate-label">${plate.name}</div>
    ${foodsHTML}`;
}

function renderFood(food) {
  const id = `f${uid++}`;
  const hasAlts = food.alts.length > 0;

  const altPanel = hasAlts ? `
    <div class="alt-panel">
      <h4>Puoi sostituire con:</h4>
      <ul class="alt-list">
        ${food.alts.map(a => `
          <li>
            <span class="dot"></span>
            <span>${a}</span>
          </li>`).join('')}
      </ul>
    </div>` : '';

  const onClick = hasAlts ? `onclick="toggle('${id}')"` : '';
  const badge   = hasAlts ? `<span class="badge">${food.alts.length} alt.</span>` : '';
  const chevron = hasAlts ? `<span class="chevron">▼</span>` : '';

  return `
    <div class="food-item" id="${id}">
      <div class="food-row ${hasAlts ? 'clickable' : ''}" ${onClick}>
        <span class="food-qty">${food.qty}</span>
        <span class="food-name">${food.item}</span>
        ${badge}${chevron}
      </div>
      ${altPanel}
    </div>`;
}

function toggle(id) {
  document.getElementById(id).classList.toggle('open');
}

renderApp();

/* ── PWA: Service Worker ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.warn('SW non registrato:', err));
  });
}

/* ── iOS: genera apple-touch-icon via canvas ── */
(function generateAppleIcon() {
  const SIZE = 180;
  const canvas = document.createElement('canvas');
  canvas.width = SIZE; canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  const s = SIZE;

  // Sfondo gradiente
  const grad = ctx.createLinearGradient(0, 0, s, s);
  grad.addColorStop(0, '#1a237e');
  grad.addColorStop(1, '#3949ab');
  ctx.fillStyle = grad;
  const r = s * 0.22;
  ctx.beginPath();
  ctx.moveTo(r, 0); ctx.lineTo(s - r, 0); ctx.quadraticCurveTo(s, 0, s, r);
  ctx.lineTo(s, s - r); ctx.quadraticCurveTo(s, s, s - r, s);
  ctx.lineTo(r, s); ctx.quadraticCurveTo(0, s, 0, s - r);
  ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath(); ctx.fill();

  // Piatto
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(s * 0.5, s * 0.56, s * 0.32, 0, Math.PI * 2);
  ctx.fill();

  // Insalata
  ctx.fillStyle = '#4CAF50';
  ctx.beginPath(); ctx.ellipse(s*.48, s*.55, s*.145, s*.1, -0.2, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#66BB6A';
  ctx.beginPath(); ctx.ellipse(s*.54, s*.52, s*.12, s*.088, 0.3, 0, Math.PI*2); ctx.fill();

  // Pomodoro
  ctx.fillStyle = '#EF5350';
  ctx.beginPath(); ctx.arc(s*.58, s*.57, s*.052, 0, Math.PI*2); ctx.fill();

  // Carota
  ctx.fillStyle = '#FF9800';
  ctx.beginPath(); ctx.ellipse(s*.43, s*.6, s*.055, s*.035, 0.5, 0, Math.PI*2); ctx.fill();

  // Forchetta
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath(); ctx.roundRect(s*.22, s*.24, s*.038, s*.3, s*.019); ctx.fill();
  [s*.196, s*.222, s*.248].forEach(x => {
    ctx.beginPath(); ctx.roundRect(x, s*.24, s*.022, s*.14, s*.011); ctx.fill();
  });

  // Coltello
  ctx.beginPath(); ctx.roundRect(s*.74, s*.24, s*.036, s*.3, s*.018); ctx.fill();

  const link = document.createElement('link');
  link.rel = 'apple-touch-icon';
  link.href = canvas.toDataURL('image/png');
  document.head.appendChild(link);
}());

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */
function switchTab(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  window.scrollTo(0, 0);
  if (tab === 'recipes') renderRecipes();
  if (tab === 'days') renderDays();
}

/* ══════════════════════════════════════
   RICETTE – STORAGE
══════════════════════════════════════ */
function loadRecipes() {
  try { return JSON.parse(localStorage.getItem('dieta-recipes') || '[]'); }
  catch(e) { return []; }
}
function persistRecipes(arr) {
  localStorage.setItem('dieta-recipes', JSON.stringify(arr));
}

/* ══════════════════════════════════════
   INGREDIENTI DAL PIANO ALIMENTARE
══════════════════════════════════════ */
function getIngredientGroups() {
  return DIET.map(meal => {
    const slots = getMealSlots(meal.id);
    const slotKeyMap = {};
    for (const slot of slots) {
      for (const item of slot.items) slotKeyMap[item.name] = slot.key;
    }
    const seen = new Set();
    const items = [];
    for (const plate of meal.plates) {
      for (const food of plate.foods) {
        if (!seen.has(food.item)) {
          seen.add(food.item);
          items.push({ qty: food.qty, name: food.item, slotKey: slotKeyMap[food.item] || food.item });
        }
        for (const alt of food.alts) {
          const m = alt.match(/^(.+?)\s*·\s*(.+)$/);
          if (m) {
            const name = m[2].trim();
            if (!seen.has(name)) { seen.add(name); items.push({ qty: m[1].trim(), name, slotKey: slotKeyMap[name] || name }); }
          }
        }
      }
    }
    return { meal: meal.meal, mealId: meal.id, icon: meal.icon, items };
  });
}

/* ══════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════ */
let _editingId = null;

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function handleOverlayClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════
   APRI MODAL CREA / MODIFICA
══════════════════════════════════════ */
function openRecipeModal(recipeId) {
  _editingId = recipeId || null;
  const recipe = recipeId ? loadRecipes().find(r => r.id === recipeId) : null;
  const selMap = {};
  if (recipe) recipe.ingredients.forEach(i => { selMap[i.name] = i.qty; });

  document.getElementById('modal-title').textContent = recipe ? 'Modifica ricetta' : 'Nuova ricetta';

  const groups = getIngredientGroups();
  let html = `
    <div class="form-field">
      <label class="form-label">Nome ricetta</label>
      <input class="form-input" id="recipe-name" type="text" placeholder="Es. Pasta al tonno leggera" value="${recipe ? escHtml(recipe.name) : ''}">
    </div>
    <div class="form-field">
      <label class="form-label">Seleziona ingredienti</label>`;

  for (const g of groups) {
    html += `<div class="ingredient-group">
      <div class="ingredient-group-label">${g.icon} ${g.meal}</div>`;
    for (const ing of g.items) {
      const sel = ing.name in selMap;
      const qty = sel ? selMap[ing.name] : ing.qty;
      html += `
        <div class="ingredient-item${sel ? ' selected' : ''}" onclick="toggleIngWithSlot(this)"
             data-meal-id="${escAttr(g.mealId)}" data-slot="${escAttr(ing.slotKey)}">
          <div class="ingredient-check"></div>
          <div class="ingredient-info">
            <div class="ingredient-name">${escHtml(ing.name)}</div>
            <div class="ingredient-default-qty">${escHtml(ing.qty)}</div>
          </div>
          <input class="ingredient-qty-input" type="text" value="${escHtml(qty)}" data-default="${escHtml(ing.qty)}" onclick="event.stopPropagation()">
        </div>`;
    }
    html += `</div>`;
  }
  html += `</div>`;

  document.getElementById('modal-body').innerHTML = html;
  initIngSlotBlocking();
  openModal('recipe-modal');
  if (!recipe) setTimeout(() => document.getElementById('recipe-name').focus(), 320);
}

function toggleIng(el) { el.classList.toggle('selected'); }

function toggleIngWithSlot(el) {
  if (el.classList.contains('blocked')) return;
  const mealId  = el.dataset.mealId;
  const slotKey = el.dataset.slot;
  const wasSelected = el.classList.contains('selected');
  el.classList.toggle('selected');
  const siblings = [...document.querySelectorAll('#modal-body .ingredient-item')]
    .filter(item => item !== el && item.dataset.mealId === mealId && item.dataset.slot === slotKey);
  if (!wasSelected) {
    siblings.forEach(item => { item.classList.remove('selected'); item.classList.add('blocked'); });
  } else {
    siblings.forEach(item => item.classList.remove('blocked'));
  }
}

function initIngSlotBlocking() {
  document.querySelectorAll('#modal-body .ingredient-item.selected').forEach(el => {
    const mealId  = el.dataset.mealId;
    const slotKey = el.dataset.slot;
    [...document.querySelectorAll('#modal-body .ingredient-item')]
      .filter(item => item !== el && item.dataset.mealId === mealId && item.dataset.slot === slotKey)
      .forEach(item => { item.classList.remove('selected'); item.classList.add('blocked'); });
  });
}

/* ══════════════════════════════════════
   SALVA RICETTA
══════════════════════════════════════ */
function saveRecipe() {
  const nameEl = document.getElementById('recipe-name');
  const name = nameEl.value.trim();
  if (!name) { nameEl.focus(); nameEl.style.borderColor = '#ef4444'; return; }

  const ingredients = [...document.querySelectorAll('#modal-body .ingredient-item.selected')].map(el => ({
    name: el.querySelector('.ingredient-name').textContent,
    qty:  el.querySelector('.ingredient-qty-input').value.trim() || el.querySelector('.ingredient-qty-input').dataset.default
  }));
  if (!ingredients.length) { alert('Seleziona almeno un ingrediente.'); return; }

  const recipes = loadRecipes();
  if (_editingId) {
    const idx = recipes.findIndex(r => r.id === _editingId);
    if (idx !== -1) recipes[idx] = { ...recipes[idx], name, ingredients };
  } else {
    recipes.push({ id: Date.now().toString(), name, ingredients });
  }
  persistRecipes(recipes);
  closeModal('recipe-modal');
  renderRecipes();
}

/* ══════════════════════════════════════
   RENDER LISTA RICETTE
══════════════════════════════════════ */
function renderRecipes() {
  const el = document.getElementById('recipes-list');
  if (!el) return;
  const recipes = loadRecipes();
  if (!recipes.length) {
    el.innerHTML = `<div class="recipe-empty">
      <div class="empty-icon">🍳</div>
      <p>Nessuna ricetta ancora.<br>Premi il pulsante per crearne una.</p>
    </div>`;
    return;
  }
  el.innerHTML = recipes.map(r => `
    <div class="recipe-card" onclick="openRecipeDetail('${r.id}')">
      <div class="recipe-card-icon">🍽️</div>
      <div class="recipe-card-info">
        <div class="recipe-card-name">${escHtml(r.name)}</div>
        <div class="recipe-card-count">${r.ingredients.length} ingredient${r.ingredients.length === 1 ? 'e' : 'i'}</div>
      </div>
      <div class="recipe-card-arrow">›</div>
    </div>`).join('');
}

/* ══════════════════════════════════════
   DETTAGLIO RICETTA
══════════════════════════════════════ */
function openRecipeDetail(id) {
  const recipe = loadRecipes().find(r => r.id === id);
  if (!recipe) return;
  document.getElementById('detail-title').textContent = recipe.name;
  document.getElementById('detail-body').innerHTML =
    recipe.ingredients.map(i => `
      <div class="detail-ingredient">
        <span class="detail-qty">${escHtml(i.qty)}</span>
        <span class="detail-name">${escHtml(i.name)}</span>
      </div>`).join('');
  document.getElementById('detail-footer').innerHTML = `
    <button class="btn-secondary" onclick="closeModal('detail-modal');openRecipeModal('${id}')">Modifica ricetta</button>
    <button class="btn-danger" onclick="deleteRecipe('${id}')">Elimina ricetta</button>`;
  openModal('detail-modal');
}

function deleteRecipe(id) {
  if (!confirm('Eliminare questa ricetta?')) return;
  persistRecipes(loadRecipes().filter(r => r.id !== id));
  closeModal('detail-modal');
  renderRecipes();
}

/* ══════════════════════════════════════
   GIORNATE – STORAGE
══════════════════════════════════════ */
function loadDays() {
  try { return JSON.parse(localStorage.getItem('dieta-days') || '[]'); }
  catch(e) { return []; }
}
function persistDays(arr) { localStorage.setItem('dieta-days', JSON.stringify(arr)); }

/* ══════════════════════════════════════
   SLOT MAP (food-group per mutual exclusion)
   Ogni "slot" = cibo principale + le sue alternative
   → selezionarne uno blocca gli altri dello stesso slot
══════════════════════════════════════ */
function getMealSlots(mealId) {
  const meal = DIET.find(m => m.id === mealId);
  const seen = new Set();
  const slots = [];
  for (const plate of meal.plates) {
    for (const food of plate.foods) {
      if (seen.has(food.item)) continue;
      const slot = { key: food.item, items: [{ name: food.item, qty: food.qty }] };
      seen.add(food.item);
      for (const alt of food.alts) {
        const m = alt.match(/^(.+?)\s*·\s*(.+)$/);
        if (m) {
          const name = m[2].trim();
          if (!seen.has(name)) { seen.add(name); slot.items.push({ name, qty: m[1].trim() }); }
        }
      }
      slots.push(slot);
    }
  }
  return slots;
}

// Mappa: nomeIngrediente → slotKey per un dato pasto
function getSlotMap(mealId) {
  const map = {};
  for (const slot of getMealSlots(mealId)) {
    for (const item of slot.items) map[item.name] = slot.key;
  }
  return map;
}

// Slot bloccati dalle ricette selezionate in un pasto
function getRecipeBlockedSlots(mealId, dayState) {
  const slotMap = getSlotMap(mealId);
  const blocked = new Set();
  for (const rid of dayState.meals[mealId].recipes) {
    const rec = loadRecipes().find(r => r.id === rid);
    if (!rec) continue;
    for (const ing of rec.ingredients) {
      if (slotMap[ing.name]) blocked.add(slotMap[ing.name]);
    }
  }
  return blocked;
}

// Tutti i recipe ID usati nel giorno (in qualunque pasto)
function getUsedRecipeIds(dayState) {
  const used = new Set();
  for (const ms of Object.values(dayState.meals)) ms.recipes.forEach(id => used.add(id));
  return used;
}

/* ══════════════════════════════════════
   STATO EDITOR GIORNATA
══════════════════════════════════════ */
let _dayState = null;
let _editingDayId = null;

function initDayState(dayId) {
  _editingDayId = dayId || null;
  const existing = dayId ? loadDays().find(d => d.id === dayId) : null;
  if (existing) {
    _dayState = JSON.parse(JSON.stringify(existing));
  } else {
    _dayState = {
      id: null, title: '',
      meals: Object.fromEntries(DIET.map(m => [m.id, { foods: {}, recipes: [] }]))
    };
  }
}

/* ══════════════════════════════════════
   APRI / CHIUDI EDITOR
══════════════════════════════════════ */
function openDayEditor(dayId) {
  initDayState(dayId);
  document.getElementById('day-modal-title').textContent = dayId ? 'Modifica giornata' : 'Nuova giornata';
  renderDayEditor();
  document.getElementById('day-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeDayEditor() {
  document.getElementById('day-modal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   RENDER EDITOR
══════════════════════════════════════ */
function renderDayEditor() {
  let html = `<div style="padding:18px 20px 4px">
    <div class="form-field">
      <label class="form-label">Nome della giornata</label>
      <input class="form-input" id="day-title-input" type="text"
             placeholder="Es. Lunedì tipo, Giorno di gara..."
             value="${escHtml(_dayState.title)}">
    </div>
  </div>`;
  for (const mealDef of DIET) html += buildMealSectionHTML(mealDef.id);
  document.getElementById('day-modal-body').innerHTML = html;
}

function buildMealSectionHTML(mealId) {
  const meal      = DIET.find(m => m.id === mealId);
  const ms        = _dayState.meals[mealId];
  const slots     = getMealSlots(mealId);
  const recBlocked = getRecipeBlockedSlots(mealId, _dayState);
  const usedRecs  = getUsedRecipeIds(_dayState);
  const recipes   = loadRecipes();

  const selCount  = Object.keys(ms.foods).length + ms.recipes.length;
  const isOpen    = document.getElementById(`msec-${mealId}`)
                      ? document.getElementById(`mbody-${mealId}`).style.display !== 'none'
                      : false;

  let html = `<div class="meal-section ${isOpen ? 'open' : ''}" id="msec-${mealId}">
    <div class="meal-section-header" onclick="toggleMealSection('${mealId}')">
      <div class="meal-section-left">
        <span class="meal-section-icon">${meal.icon}</span>
        <span class="meal-section-name">${meal.meal}</span>
      </div>
      <div class="meal-section-right">
        ${selCount > 0 ? `<span class="meal-sel-badge" id="mbadge-${mealId}">${selCount}</span>` : `<span class="meal-sel-badge" id="mbadge-${mealId}" style="display:none">0</span>`}
        <span class="meal-section-chevron" id="mchev-${mealId}">›</span>
      </div>
    </div>
    <div class="meal-section-body" id="mbody-${mealId}" style="display:${isOpen ? 'block' : 'none'}">
      ${buildMealBodyHTML(mealId, slots, ms, recBlocked, usedRecs, recipes)}
    </div>
  </div>`;
  return html;
}

function buildMealBodyHTML(mealId, slots, ms, recBlocked, usedRecs, recipes) {
  let html = '';

  // ── Slot cibi ──
  for (const slot of slots) {
    const isSlotBlocked = recBlocked.has(slot.key);
    const selectedFood  = ms.foods[slot.key];

    if (slot.items.length === 1) {
      const item = slot.items[0];
      const isSel = selectedFood?.name === item.name;
      const blocked = isSlotBlocked && !isSel;
      html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
        data-meal="${mealId}" data-slot="${escAttr(slot.key)}"
        data-name="${escAttr(item.name)}" data-qty="${escAttr(item.qty)}"
        onclick="handleFoodToggle(this)">
        <div class="ingredient-check"></div>
        <div>
          <div class="slot-name">${escHtml(item.name)}</div>
          <div class="slot-qty">${item.qty}${isSlotBlocked && isSel ? ' · incluso nella ricetta' : ''}</div>
        </div>
      </div>`;
    } else {
      html += `<div class="slot-group">
        <div class="slot-group-label">${escHtml(slot.key)} <span style="font-weight:400;opacity:.6">· scegli uno</span></div>`;
      for (const item of slot.items) {
        const isSel       = selectedFood?.name === item.name;
        const otherSel    = selectedFood && !isSel;
        const blocked     = (isSlotBlocked || otherSel) && !isSel;
        html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
          data-meal="${mealId}" data-slot="${escAttr(slot.key)}"
          data-name="${escAttr(item.name)}" data-qty="${escAttr(item.qty)}"
          onclick="handleFoodToggle(this)">
          <div class="ingredient-check"></div>
          <div>
            <div class="slot-name">${escHtml(item.name)}</div>
            <div class="slot-qty">${item.qty}</div>
          </div>
        </div>`;
      }
      html += `</div>`;
    }
  }

  // ── Ricette ──
  if (recipes.length > 0) {
    html += `<div class="slot-section-label">🍽️ Ricette</div>`;
    for (const rec of recipes) {
      const isSel         = ms.recipes.includes(rec.id);
      const usedElsewhere = !isSel && usedRecs.has(rec.id);
      const blocked       = usedElsewhere;
      // Conflitti: ingredienti della ricetta vs cibi già selezionati nel pasto
      const slotMap = getSlotMap(mealId);
      const conflictSlots = isSel ? [] : rec.ingredients
        .map(ing => slotMap[ing.name])
        .filter(sk => sk && ms.foods[sk]);
      const note = usedElsewhere
        ? '· già usata in un altro pasto'
        : conflictSlots.length > 0
          ? `· sostituirà ${conflictSlots.length} alimento/i`
          : `${rec.ingredients.length} ingredienti`;
      html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
        data-meal="${mealId}" data-rid="${rec.id}"
        onclick="handleRecipeToggle(this)">
        <div class="ingredient-check"></div>
        <div>
          <div class="slot-name">${escHtml(rec.name)}</div>
          <div class="slot-qty ${usedElsewhere ? '' : conflictSlots.length ? 'slot-note' : ''}">${note}</div>
        </div>
      </div>`;
    }
  }

  return html;
}

/* ══════════════════════════════════════
   TOGGLE ACCORDION PASTO
══════════════════════════════════════ */
function toggleMealSection(mealId) {
  const sec  = document.getElementById(`msec-${mealId}`);
  const body = document.getElementById(`mbody-${mealId}`);
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  sec.classList.toggle('open', !open);
}

/* ══════════════════════════════════════
   TOGGLE CIBO (con mutual exclusion per slot)
══════════════════════════════════════ */
function handleFoodToggle(el) {
  if (el.classList.contains('blocked')) return;
  const { meal, slot, name, qty } = el.dataset;
  const ms = _dayState.meals[meal];
  if (ms.foods[slot]?.name === name) {
    delete ms.foods[slot]; // deseleziona
  } else {
    ms.foods[slot] = { name, qty }; // seleziona (sovrascrive slot)
  }
  refreshMealSection(meal);
}

/* ══════════════════════════════════════
   TOGGLE RICETTA IN UN PASTO
══════════════════════════════════════ */
function handleRecipeToggle(el) {
  if (el.classList.contains('blocked')) return;
  const { meal, rid } = el.dataset;
  const ms = _dayState.meals[meal];
  const idx = ms.recipes.indexOf(rid);
  if (idx !== -1) {
    ms.recipes.splice(idx, 1); // rimuovi
  } else {
    // Rimuovi cibi che vanno in conflitto con questa ricetta
    const slotMap = getSlotMap(meal);
    const rec = loadRecipes().find(r => r.id === rid);
    if (rec) {
      for (const ing of rec.ingredients) {
        const sk = slotMap[ing.name];
        if (sk && ms.foods[sk]) delete ms.foods[sk];
      }
    }
    ms.recipes.push(rid);
  }
  refreshMealSection(meal);
}

/* ══════════════════════════════════════
   REFRESH SEZIONE PASTO (dopo toggle)
══════════════════════════════════════ */
function refreshMealSection(mealId) {
  const body = document.getElementById(`mbody-${mealId}`);
  if (!body) return;
  const ms       = _dayState.meals[mealId];
  const slots    = getMealSlots(mealId);
  const recBlk   = getRecipeBlockedSlots(mealId, _dayState);
  const usedRecs = getUsedRecipeIds(_dayState);
  const recipes  = loadRecipes();
  body.innerHTML = buildMealBodyHTML(mealId, slots, ms, recBlk, usedRecs, recipes);
  // aggiorna badge nel header
  const selCount = Object.keys(ms.foods).length + ms.recipes.length;
  const badge = document.getElementById(`mbadge-${mealId}`);
  if (badge) { badge.textContent = selCount; badge.style.display = selCount > 0 ? 'flex' : 'none'; }
}

/* ══════════════════════════════════════
   SALVA GIORNATA
══════════════════════════════════════ */
function saveDay() {
  const titleEl = document.getElementById('day-title-input');
  const title   = titleEl.value.trim();
  if (!title) { titleEl.focus(); titleEl.style.borderColor = '#ef4444'; return; }

  // Controlla che ci sia almeno un alimento selezionato
  const hasAny = DIET.some(m => {
    const ms = _dayState.meals[m.id];
    return Object.keys(ms.foods).length > 0 || ms.recipes.length > 0;
  });
  if (!hasAny) { alert('Seleziona almeno un alimento in un pasto.'); return; }

  _dayState.title = title;
  const days = loadDays();
  if (_editingDayId) {
    const idx = days.findIndex(d => d.id === _editingDayId);
    if (idx !== -1) days[idx] = { ...days[idx], ..._dayState, id: _editingDayId };
  } else {
    _dayState.id = Date.now().toString();
    days.push(_dayState);
  }
  persistDays(days);
  closeDayEditor();
  renderDays();
}

/* ══════════════════════════════════════
   RENDER LISTA GIORNATE
══════════════════════════════════════ */
function renderDays() {
  const el = document.getElementById('days-list');
  if (!el) return;
  const days = loadDays();
  if (!days.length) {
    el.innerHTML = `<div class="recipe-empty">
      <div class="empty-icon">📅</div>
      <p>Nessuna giornata ancora.<br>Premi il pulsante per crearne una.</p>
    </div>`;
    return;
  }
  el.innerHTML = days.map(d => {
    const totalFoods = DIET.reduce((acc, m) => {
      const ms = d.meals[m.id];
      return acc + Object.keys(ms?.foods || {}).length + (ms?.recipes?.length || 0);
    }, 0);
    return `<div class="day-card" onclick="openDayDetail('${d.id}')">
      <div class="day-card-icon">📅</div>
      <div class="day-card-info">
        <div class="day-card-name">${escHtml(d.title)}</div>
        <div class="day-card-sub">${totalFoods} scelt${totalFoods === 1 ? 'a' : 'e'} in ${DIET.filter(m => {
          const ms = d.meals[m.id]; return (ms?.foods && Object.keys(ms.foods).length > 0) || ms?.recipes?.length > 0;
        }).length} pasti</div>
      </div>
      <div class="day-card-arrow">›</div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════
   DETTAGLIO GIORNATA
══════════════════════════════════════ */
function openDayDetail(id) {
  const day = loadDays().find(d => d.id === id);
  if (!day) return;
  document.getElementById('day-detail-title').textContent = day.title;

  let html = '';
  for (const mealDef of DIET) {
    const ms = day.meals[mealDef.id];
    const foods   = Object.values(ms?.foods || {});
    const recipes = (ms?.recipes || []).map(rid => loadRecipes().find(r => r.id === rid)).filter(Boolean);
    if (!foods.length && !recipes.length) continue;
    html += `<div class="day-detail-meal">
      <div class="day-detail-meal-header">
        <span>${mealDef.icon}</span>
        <span class="day-detail-meal-title">${mealDef.meal}</span>
      </div>`;
    for (const f of foods) {
      html += `<div class="day-detail-item">
        <span class="day-detail-qty">${escHtml(f.qty)}</span>
        <span class="day-detail-name">${escHtml(f.name)}</span>
      </div>`;
    }
    for (const rec of recipes) {
      html += `<div class="day-detail-item">
        <span class="day-detail-recipe-badge">Ricetta</span>
        <span class="day-detail-name">${escHtml(rec.name)}</span>
      </div>`;
    }
    html += `</div>`;
  }
  document.getElementById('day-detail-body').innerHTML = html;
  document.getElementById('day-detail-footer').innerHTML = `
    <button class="btn-secondary" onclick="closeModal('day-detail-modal');openDayEditor('${id}')">Modifica giornata</button>
    <button class="btn-danger" onclick="deleteDay('${id}')">Elimina giornata</button>`;
  openModal('day-detail-modal');
}

function deleteDay(id) {
  if (!confirm('Eliminare questa giornata?')) return;
  persistDays(loadDays().filter(d => d.id !== id));
  closeModal('day-detail-modal');
  renderDays();
}

function escAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

renderDays();
