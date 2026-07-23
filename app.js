// ── Product & Color Data ──
const PRODUCTS = [
  {
    id: "la",
    name: "Essentials Duo",
    price: 17.25,
    tag: "Best Value",
    tagc: "#2C1A0E",
    short: "Affordable premium gifting solution",
    desc: "ID Card Holder, Keychain, Hard Box. Minimal yet premium sustainable gift set.",
    items: ["ID Card Holder", "Keychain", "Hard Box"],
    features: [
      "Slim ID card holder fits 1–3 cards with window slot",
      "Antique brass key ring with banana-leather fob",
      "Premium hard box",
      "Custom logo embossing available (min. 50 units)",
      "Arrives ready-to-gift"
    ],
    material: "Outer shell: 100% banana sheath bio-leather. Inner lining: recycled cotton. Hardware: antique brass-finish zinc alloy. Zero animal products.",
    care: "Wipe clean with a dry cloth. Avoid prolonged exposure to direct sunlight. Store in dust bag when not in use. Do not use chemical cleaners.",
    moq: "10 units",
    delivery: "7–14 business days",
    img: "assets/product-4.jpg"
  },
  {
    id: "lb",
    name: "Premium Leather Set B",
    price: 27,
    tag: "Most Popular",
    tagc: "#5C7A5A",
    short: "Best for onboarding & corporate gifting",
    desc: "Notebook, Keychain, ID Card Holder, Hard Box. A complete eco-friendly corporate gift set.",
    items: ["Notebook", "Keychain", "ID Card Holder", "Hard Box"],
    features: [
      "A6 notebook with 80 recycled-paper pages",
      "ID card holder with transparent window and lanyard loop",
      "Brass-ring keychain with stitched leather tag",
      "Premium hard box",
      "Full set can be monogrammed or logo-embossed"
    ],
    material: "Cover & accessories: banana sheath bio-leather. Pages: 80gsm recycled paper. Hardware: brushed brass zinc alloy. Packaging: rigid kraft board.",
    care: "Keep notebook pages dry. Leather: wipe with soft dry cloth. Avoid folding or compressing the notebook spine.",
    moq: "10 units",
    delivery: "7–14 business days",
    img: "assets/product-3.jpg"
  },
  {
    id: "lc",
    name: "Everyday Impact Set",
    price: 41.85,
    tag: "Premium",
    tagc: "#7A4E2D",
    short: "Perfect for executive gifts & premium clients",
    desc: "Notebook, ID Card Holder, Keychain, Cardholder, Premium Hard Box. A complete professional starter set.",
    items: ["Notebook", "ID Card Holder", "Keychain", "Cardholder", "Premium Hard Box"],
    features: [
      "A6 notebook with lay-flat binding",
      "ID card holder with transparent window and lanyard loop",
      "Snap-close card wallet with 6 slots",
      "Brass swivel keychain with debossed mark",
      "Luxury hard box with foam insert"
    ],
    material: "All leather: banana sheath bio-leather with natural grain. Inner card slots: microfibre. Metal hardware: solid brass. Box: rigid board wrapped in linen.",
    care: "Condition leather every 3–6 months with beeswax balm. Keep away from sharp objects. Wipe spills immediately.",
    moq: "10 units",
    delivery: "10–14 business days",
    img: "assets/product-2.jpg"
  },
  {
    id: "tb",
    name: "Travel Bundle",
    price: 29.53,
    tag: "New",
    tagc: "#5C7A5A",
    short: "Designed for modern travelers",
    desc: "Passport Holder, Luggage Tag, Premium Hard Box. The perfect sustainable travel companion.",
    items: ["Passport Holder", "Luggage Tag", "Premium Hard Box"],
    features: [
      "Full-grain banana bio-leather passport holder with snap closure",
      "Fits standard passport with extra card slots inside",
      "Matching luggage tag with brass buckle and clear ID window",
      "Arrives in a premium Fibranusa-branded gift box",
      "Custom logo embossing available (min. 20 units)"
    ],
    material: "100% banana sheath bio-leather. Hardware: solid brass buckle and snap. Lining: microfibre. Packaging: rigid Fibranusa-branded gift box.",
    care: "Wipe clean with a dry cloth. Condition every 3–6 months with natural beeswax balm. Avoid prolonged moisture exposure.",
    moq: "10 units",
    delivery: "7–14 business days",
    img: "assets/product-5-travel.jpg"
  },
  {
    id: "lt",
    name: "Premium Tenun & Leather Set",
    price: 70,
    tag: "VIP",
    tagc: "#8B5E3C",
    short: "Luxury executive & VIP corporate gifting",
    desc: "Binder Agenda, Purse, ID Card Holder, Keychain, Card Holder, Hard Box. Heritage-inspired sustainable set.",
    items: ["Binder Agenda", "Purse", "ID Card Holder", "Keychain", "Card Holder", "Hard Box"],
    features: [
      "A5 ring-binder agenda with refillable inserts",
      "Wristlet purse with zip closure and woven Tenun panel",
      "ID card holder with lanyard",
      "Heritage brass keychain with hand-stitched fob",
      "Snap-close card wallet with 6 slots",
      "Luxury hard box"
    ],
    material: "Bio-leather: banana sheath. Tenun fabric: handwoven traditional Indonesian textile (cotton & natural dye). Hardware: solid brass. Lining: recycled silk-touch fabric.",
    care: "Spot-clean Tenun panels with damp cloth — do not scrub. Leather: use natural balm twice yearly. Store in dust bag away from humidity.",
    moq: "5 units",
    delivery: "14–21 business days",
    img: "assets/product-1.jpg"
  }
];

const COLORS = [
  { name: "Natural", hex: "#C4895A", filter: "none", grad: "" },
  { name: "Black",   hex: "#2C2C2A", filter: "grayscale(100%) brightness(0.35)", grad: "grayscale(100%) brightness(0.35)" },
  { name: "Green",   hex: "#4A6741", filter: "grayscale(40%) sepia(40%) hue-rotate(60deg) brightness(0.75) saturate(1.4)", grad: "hue-rotate(120deg) saturate(0.7) brightness(0.8)" },
];

// ── State ──
let cart = [], wishlist = [], currentProduct = null, currentColorIdx = 0;

// ── Render product cards ──
function renderCards() {
  const grid = document.getElementById("prod-grid");
  grid.innerHTML = "";
  PRODUCTS.forEach(p => {
    const div = document.createElement("div");
    div.className = "pcard";
    div.innerHTML = `
      <div class="pcard-img-wrap">
        <img id="prod-img-${p.id}" src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="prod-tag" style="background:${p.tagc};">${p.tag}</div>
        <button class="wish-btn" id="wish-card-${p.id}" onclick="toggleWishCard('${p.id}')">🤍</button>
      </div>
      <div class="prod-info">
        <div class="prod-row">
          <span class="prod-name">${p.name}</span>
          <span class="prod-price">$${p.price}</span>
        </div>
        <div class="prod-short">${p.short}</div>
        <div class="swatch-lbl">Color — <span id="color-lbl-${p.id}">Natural</span></div>
        <div class="swatch-row" id="swatches-${p.id}"></div>
        <div class="prod-desc">${p.desc}</div>
        <button class="view-btn" onclick="openModal('${p.id}')">View Details →</button>
      </div>`;
    grid.appendChild(div);
    renderSwatches(p);
  });
}

function renderSwatches(p) {
  const row = document.getElementById(`swatches-${p.id}`);
  COLORS.forEach((c, ci) => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.style.background = c.hex;
    btn.style.outline = ci === 0 ? "2px solid #C4895A" : "2px solid transparent";
    btn.style.transform = ci === 0 ? "scale(1.15)" : "scale(1)";
    btn.title = c.name;
    btn.onclick = () => {
      const imgEl = document.getElementById(`prod-img-${p.id}`);
      imgEl.style.filter = c.filter;
      document.getElementById(`color-lbl-${p.id}`).textContent = c.name;
      row.querySelectorAll(".swatch").forEach((s, i) => {
        s.style.outline = i === ci ? "2px solid #C4895A" : "2px solid transparent";
        s.style.transform = i === ci ? "scale(1.15)" : "scale(1)";
      });
    };
    row.appendChild(btn);
  });
}

// ── Modal ──
function openModal(id) {
  currentProduct = PRODUCTS.find(p => p.id === id);
  currentColorIdx = 0;
  renderModal();
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderModal() {
  const p = currentProduct;
  const c = COLORS[currentColorIdx];

  const modalImg = document.getElementById("modal-img-el");
  modalImg.src = p.img;
  modalImg.style.filter = c.filter;
  modalImg.alt = p.name;

  document.getElementById("modal-badge").textContent = p.tag;
  document.getElementById("modal-badge").style.background = p.tagc;
  document.getElementById("modal-name").textContent = p.name;
  document.getElementById("modal-price").innerHTML = `$${p.price} <span style="font-size:13px;color:#8B6343;font-family:sans-serif;font-weight:300;">/unit</span>`;
  document.getElementById("modal-short").textContent = p.short;
  document.getElementById("modal-moq").textContent = p.moq;
  document.getElementById("modal-delivery").textContent = p.delivery;
  document.getElementById("modal-color-name").textContent = c.name;

  const swatchRow = document.getElementById("modal-swatches");
  swatchRow.innerHTML = "";
  COLORS.forEach((col, ci) => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.style.background = col.hex;
    btn.style.outline = ci === currentColorIdx ? "2px solid #C4895A" : "2px solid transparent";
    btn.style.transform = ci === currentColorIdx ? "scale(1.15)" : "scale(1)";
    btn.title = col.name;
    btn.onclick = () => {
      currentColorIdx = ci;
      const img = document.getElementById("modal-img-el");
      img.style.filter = col.filter;
      document.getElementById("modal-color-name").textContent = col.name;
      swatchRow.querySelectorAll(".swatch").forEach((s, i) => {
        s.style.outline = i === ci ? "2px solid #C4895A" : "2px solid transparent";
        s.style.transform = i === ci ? "scale(1.15)" : "scale(1)";
      });
    };
    swatchRow.appendChild(btn);
  });

  updateWishModalBtn();
  switchTab("features", document.querySelector(".tab.active"));
  renderTabContent("features");
}

function switchTab(name, el) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");
  ["features", "material", "care"].forEach(t => {
    document.getElementById("tab-" + t).style.display = t === name ? "block" : "none";
  });
  renderTabContent(name);
}

function renderTabContent(name) {
  const p = currentProduct;
  if (!p) return;
  if (name === "features") {
    document.getElementById("tab-features").innerHTML = `
      ${p.features.map(f => `<div class="feat-item"><div class="feat-check">✓</div><div style="font-family:sans-serif;font-size:13px;line-height:1.6;color:#2C1A0E;">${f}</div></div>`).join("")}
      <div class="badge-row">
        <span class="eco-badge">🌿 Bio-Leather</span>
        <span class="eco-badge">♻️ Recycled Packaging</span>
        <span class="eco-badge">🐄 Animal-Free</span>
      </div>`;
  } else if (name === "material") {
    document.getElementById("tab-material").innerHTML = `
      <p style="font-family:sans-serif;font-size:13px;line-height:1.75;color:#2C1A0E;margin-bottom:14px;">${p.material}</p>
      <div class="care-note" style="margin-top:0;">
        <div style="font-family:sans-serif;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#C4895A;font-weight:600;margin-bottom:4px;">Includes</div>
        ${p.items.map(i => `<div style="font-size:13px;color:#2C1A0E;line-height:1.7;">• ${i}</div>`).join("")}
      </div>`;
  } else if (name === "care") {
    document.getElementById("tab-care").innerHTML = `<div class="care-note">${p.care}</div>`;
  }
}

// ── Wishlist ──
function toggleWishCard(id) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    document.getElementById("wish-card-" + id).textContent = "❤️";
    showToast("Added to wishlist ❤️");
  } else {
    wishlist.splice(idx, 1);
    document.getElementById("wish-card-" + id).textContent = "🤍";
    showToast("Removed from wishlist");
  }
  updateWishlistCount();
}

function toggleWishModal() {
  if (!currentProduct) return;
  toggleWishCard(currentProduct.id);
  updateWishModalBtn();
}

function updateWishModalBtn() {
  if (!currentProduct) return;
  const inList = wishlist.includes(currentProduct.id);
  document.getElementById("modal-wish-btn").textContent = inList ? "❤️  In Wishlist" : "🤍  Add to Wishlist";
}

function updateWishlistCount() {
  const el = document.getElementById("wishlist-count");
  document.getElementById("wish-num").textContent = wishlist.length;
  el.style.display = wishlist.length > 0 ? "inline-flex" : "none";
}

// ── Cart ──
function addToCartModal() {
  if (!currentProduct) return;
  const p = currentProduct;
  const color = COLORS[currentColorIdx].name;
  const existing = cart.find(i => i.id === p.id && i.color === color);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, img: p.img, filter: COLORS[currentColorIdx].filter, color, qty: 1 });
  }
  closeModal();
  updateCartBadge();
  openCart();
  showToast(p.name + " added to cart 🛒");
}

function openCart() {
  renderCartDrawer();
  document.getElementById("cart-overlay").style.display = "block";
  document.getElementById("cart-drawer").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-overlay").style.display = "none";
  document.getElementById("cart-drawer").style.display = "none";
  document.body.style.overflow = "";
}

function renderCartDrawer() {
  const body = document.getElementById("cart-body");
  const ftr = document.getElementById("cart-ftr");
  const lbl = document.getElementById("cart-count-label");
  const qty = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  lbl.textContent = qty + " item" + (qty !== 1 ? "s" : "");
  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align:center;padding:60px 20px;">
        <div style="font-size:44px;margin-bottom:14px;">🛒</div>
        <div style="font-size:18px;font-weight:300;margin-bottom:8px;">Your cart is empty</div>
        <div style="font-family:sans-serif;font-size:13px;color:#8B6343;">Browse our gift sets and add items to get started.</div>
        <button class="btn-out" style="margin-top:20px;" onclick="closeCart()">Browse Products</button>
      </div>`;
    ftr.style.display = "none";
    return;
  }
  body.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <div class="cart-thumb">
        <img src="${item.img}" alt="${item.name}" style="filter:${item.filter};" />
      </div>
      <div style="flex:1;min-width:0;">
        <div style="font-family:sans-serif;font-size:13px;font-weight:500;color:#2C1A0E;line-height:1.3;margin-bottom:2px;">${item.name}</div>
        <div style="font-family:sans-serif;font-size:11px;color:#8B6343;margin-bottom:8px;">Color: ${item.color}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:8px;">
            <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
            <span style="font-family:sans-serif;font-size:14px;font-weight:500;min-width:18px;text-align:center;">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:16px;font-weight:300;color:#C4895A;">$${item.price * item.qty}</span>
            <button onclick="removeItem(${idx})" style="background:none;border:none;font-size:14px;opacity:.6;color:#8B6343;">✕</button>
          </div>
        </div>
      </div>
    </div>`).join("");
  document.getElementById("cart-total").textContent = "$" + total;
  ftr.style.display = "block";
}

function changeQty(idx, delta) {
  cart[idx].qty = Math.max(0, cart[idx].qty + delta);
  if (cart[idx].qty === 0) cart.splice(idx, 1);
  updateCartBadge();
  renderCartDrawer();
}

function removeItem(idx) { cart.splice(idx, 1); updateCartBadge(); renderCartDrawer(); }
function clearCart() { cart = []; updateCartBadge(); renderCartDrawer(); }

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cart-badge");
  badge.textContent = total > 9 ? "9+" : total;
  badge.style.display = total > 0 ? "flex" : "none";
}

function cartCheckout() {
  if (cart.length === 0) return;
  const itemLines = cart.map(i =>
    `• ${i.name} (${i.color}) x${i.qty} — $${i.price * i.qty}`
  ).join("\n");
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = [
    "Hello Fibranusa! 👋 I'd like to enquire about the following gift sets:",
    "",
    itemLines,
    "",
    `*Total: $${total}*`,
    "",
    "Please send me a quote with delivery details. Thank you!"
  ].join("\n");
  window.open(`https://wa.me/628570762561?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  closeCart();
}

// ── Enquire ──
function enquireNow() {
  closeModal();
  document.getElementById("contact-sec").scrollIntoView({ behavior: "smooth" });
}

// ── Contact form → WhatsApp ──
function submitForm(e) {
  e.preventDefault();
  const first   = document.getElementById("f-first").value.trim();
  const last    = document.getElementById("f-last").value.trim();
  const company = document.getElementById("f-company").value.trim();
  const email   = document.getElementById("f-email").value.trim();
  const message = document.getElementById("f-message").value.trim();

  const lines = [
    "Hello Fibranusa! 👋",
    "",
    `*Name:* ${first} ${last}`,
    company ? `*Company:* ${company}` : null,
    `*Email:* ${email}`,
    message ? `\n*Message:*\n${message}` : null,
  ].filter(Boolean).join("\n");

  const waUrl = `https://wa.me/628570762561?text=${encodeURIComponent(lines)}`;
  window.open(waUrl, "_blank", "noopener");

  document.getElementById("contact-form").style.display = "none";
  document.getElementById("contact-thanks").style.display = "block";
}

// ── Toast ──
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

// ── Keyboard shortcuts ──
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (document.getElementById("modal-overlay").classList.contains("open")) closeModal();
    if (document.getElementById("cart-drawer").style.display === "flex") closeCart();
  }
});

// ── Nav scroll highlight ──
const sections = ["story-sec", "products-sec", "sustain-sec", "contact-sec"];
window.addEventListener("scroll", () => {
  const y = window.scrollY + 80;
  sections.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= y) {
      document.querySelectorAll(".nav-link").forEach((l, li) => {
        l.style.color = li === i ? "#2C1A0E" : "#8B6343";
      });
    }
  });
});

// ── Animate stats on scroll ──
function animateCount(el, target, suffix) {
  let start = 0;
  const step = Math.ceil(target / 40);
  const id = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = start + suffix;
    if (start >= target) clearInterval(id);
  }, 30);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll("[data-count]").forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        animateCount(el, target, suffix);
      });
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  const statsEl = document.querySelector(".stats");
  if (statsEl) statsObserver.observe(statsEl);
});
