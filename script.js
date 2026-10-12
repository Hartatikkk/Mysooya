// ============================================================
// DATA PRODUK - ubah nama, harga, foto, dan deskripsi di sini
// ============================================================
const products = [
  { id: 1, name: "White Ori (Original)", price: 10000, image: "images/varian-white-ori.jpg", color: "#F1EDE0", emoji: "🥛", description: "Rasa kedelai asli yang gurih, lembut, dan murni tanpa tambahan rasa." },
  { id: 2, name: "Strawberry", price: 12000, image: "images/varian-strawberry.jpg", color: "#FADADD", emoji: "🍓", description: "Manis segar stroberi berpadu creamy susu kedelai." },
  { id: 3, name: "Cokelat", price: 12000, image: "images/varian-cokelat.jpg", color: "#E6D3C3", emoji: "🍫", description: "Cokelat pekat yang legit dengan kelembutan kedelai segar." },
  { id: 4, name: "Melon", price: 12000, image: "images/varian-melon.jpg", color: "#DDF0CF", emoji: "🍈", description: "Aroma melon manis yang menyegarkan, cocok diminum dingin." },
  { id: 5, name: "Taro (Ungu)", price: 12000, image: "images/varian-taro.jpg", color: "#E6DAF2", emoji: "🍠", description: "Manis gurih talas ungu yang creamy dan bikin nagih." }
];

const WA_NUMBER = "6288238715696";

// ============================================================
// STATE & HELPER
// ============================================================
let cart = [];

const $ = (id) => document.getElementById(id);
const productGrid = $("productGrid");
const cartItemsEl = $("cartItems");
const cartTotalEl = $("cartTotal");
const cartBadge = $("cartBadge");
const cartDrawer = $("cartDrawer");
const overlay = $("overlay");
const toastEl = $("toast");

function formatRupiah(num) {
  return "Rp " + Number(num).toLocaleString("id-ID");
}

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function saveCart() {
  try { localStorage.setItem("mysooya_cart", JSON.stringify(cart)); } catch (e) { /* abaikan jika storage tidak tersedia */ }
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("mysooya_cart"));
    if (Array.isArray(saved)) {
      // hanya ambil item yang masih ada di daftar produk
      cart = saved
        .filter((s) => products.some((p) => p.id === s.id) && s.qty > 0)
        .map((s) => ({ id: s.id, qty: Math.floor(s.qty) }));
    }
  } catch (e) { cart = []; }
}

let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

// ============================================================
// RENDER PRODUK
// ============================================================
function renderProducts() {
  productGrid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="product-img" style="--card-color:${p.color}">
        <img src="${escapeHTML(p.image)}" alt="Susu kedelai ${escapeHTML(p.name)}" loading="lazy"
             onerror="this.outerHTML='<span class=&quot;fallback&quot;>${p.emoji}</span>'">
      </div>
      <div class="product-info">
        <h3>${escapeHTML(p.name)}</h3>
        <p class="desc">${escapeHTML(p.description)}</p>
        <span class="price">${formatRupiah(p.price)}</span>
        <button class="add-btn" data-add="${p.id}">Tambah ke Keranjang</button>
      </div>
    </article>
  `).join("");
}

// ============================================================
// LOGIKA KERANJANG
// ============================================================
function addToCart(id) {
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  updateCart();
  const p = products.find((x) => x.id === id);
  showToast(p.name + " ditambahkan ke keranjang");
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  updateCart();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCart();
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + products.find((p) => p.id === i.id).price * i.qty, 0);
}

function updateCart() {
  const count = cart.reduce((n, i) => n + i.qty, 0);
  cartBadge.textContent = count;
  cartBadge.classList.add("bump");
  setTimeout(() => cartBadge.classList.remove("bump"), 200);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="cart-empty">Keranjangmu masih kosong.<br>Pilih varian favoritmu dulu, ya!</p>';
  } else {
    cartItemsEl.innerHTML = cart.map((i) => {
      const p = products.find((x) => x.id === i.id);
      return `
        <div class="cart-item">
          <div class="cart-thumb" style="--card-color:${p.color}">
            <img src="${escapeHTML(p.image)}" alt="" onerror="this.outerHTML='<span>${p.emoji}</span>'">
          </div>
          <div>
            <h4>${escapeHTML(p.name)}</h4>
            <div class="item-price">${formatRupiah(p.price)}</div>
            <div class="qty">
              <button type="button" data-minus="${p.id}" aria-label="Kurangi jumlah">&minus;</button>
              <span>${i.qty}</span>
              <button type="button" data-plus="${p.id}" aria-label="Tambah jumlah">+</button>
            </div>
          </div>
          <div class="item-side">
            <div class="item-subtotal">${formatRupiah(p.price * i.qty)}</div>
            <button type="button" class="remove-btn" data-remove="${p.id}">Hapus</button>
          </div>
        </div>`;
    }).join("");
  }
  cartTotalEl.textContent = formatRupiah(cartTotal());
  saveCart();
}

// ============================================================
// DRAWER & MENU
// ============================================================
function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ============================================================
// CHECKOUT WHATSAPP
// ============================================================
function checkout(e) {
  e.preventDefault();
  const nameInput = $("customerName");
  const addressInput = $("customerAddress");
  const errorEl = $("formError");
  const name = nameInput.value.trim();
  const address = addressInput.value.trim();
  const note = $("customerNote").value.trim();

  nameInput.classList.remove("invalid");
  addressInput.classList.remove("invalid");
  errorEl.textContent = "";

  if (cart.length === 0) {
    errorEl.textContent = "Keranjang masih kosong. Tambahkan produk dulu.";
    return;
  }
  if (!name || !address) {
    if (!name) nameInput.classList.add("invalid");
    if (!address) addressInput.classList.add("invalid");
    errorEl.textContent = "Nama pemesan dan alamat pengiriman wajib diisi.";
    (!name ? nameInput : addressInput).focus();
    return;
  }

  const lines = cart.map((i) => {
    const p = products.find((x) => x.id === i.id);
    return "- " + p.name + " (x" + i.qty + ") = " + formatRupiah(p.price * i.qty);
  });

  const message =
    "Halo Admin MySooya, saya mau order:\n" +
    lines.join("\n") + "\n" +
    "--------------------------------\n" +
    "Total: " + formatRupiah(cartTotal()) + "\n\n" +
    "Data Pemesan:\n" +
    "Nama: " + name + "\n" +
    "Alamat: " + address + "\n" +
    "Catatan: " + (note || "-");

  window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message), "_blank");
}

// ============================================================
// EVENT LISTENER & INIT
// ============================================================
productGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(Number(btn.dataset.add));
});

cartItemsEl.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  if (!t) return;
  if (t.dataset.plus) changeQty(Number(t.dataset.plus), 1);
  else if (t.dataset.minus) changeQty(Number(t.dataset.minus), -1);
  else if (t.dataset.remove) removeItem(Number(t.dataset.remove));
});

$("cartToggle").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });
$("checkoutForm").addEventListener("submit", checkout);

const navLinks = $("navLinks");
$("menuToggle").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", (e) => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

$("year").textContent = new Date().getFullYear();
loadCart();
renderProducts();
updateCart();
