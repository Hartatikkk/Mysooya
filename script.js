// 1. DATA PRODUK MYSOOYA
const products = [
  // --- KEMASAN BOTOL ---
  {
    id: "botol-ori",
    category: "botol",
    categoryLabel: "Kemasan Botol",
    name: "MySooya Original",
    image: "aset/original.jpg",
    description: "Susu kedelai murni gurih lembut alami dalam kemasan botol higienis.",
    options: [
      { size: "300 ml", price: 6000 },
      { size: "500 ml", price: 8000 },
      { size: "1 Liter", price: 15000 }
    ]
  },
  {
    id: "botol-coklat",
    category: "botol",
    categoryLabel: "Kemasan Botol",
    name: "MySooya Cokelat",
    image: "aset/coklat.jpeg",
    description: "Cokelat lezat creamy yang menyatu sempurna dengan kebaikan kedelai.",
    options: [
      { size: "300 ml", price: 6000 },
      { size: "500 ml", price: 8000 },
      { size: "1 Liter", price: 15000 }
    ]
  },
  {
    id: "botol-melon",
    category: "botol",
    categoryLabel: "Kemasan Botol",
    name: "MySooya Melon",
    image: "aset/melon.jpeg",
    description: "Aroma wangi dan manisnya buah melon segar yang memanjakan lidah.",
    options: [
      { size: "300 ml", price: 6000 },
      { size: "500 ml", price: 8000 },
      { size: "1 Liter", price: 15000 }
    ]
  },
  {
    id: "botol-strawberry",
    category: "botol",
    categoryLabel: "Kemasan Botol",
    name: "MySooya Strawberry",
    image: "aset/strawberry.jpeg",
    description: "Manis segar stroberi pilihan dalam sajian susu kedelai dingin.",
    options: [
      { size: "300 ml", price: 6000 },
      { size: "500 ml", price: 8000 },
      { size: "1 Liter", price: 15000 }
    ]
  },
  {
    id: "botol-taro",
    category: "botol",
    categoryLabel: "Kemasan Botol",
    name: "MySooya Taro (Ungu)",
    image: "aset/taro.jpeg",
    description: "Sensasi gurih legit taro ungu kekinian yang lezat dan bergizi.",
    options: [
      { size: "300 ml", price: 6000 },
      { size: "500 ml", price: 8000 },
      { size: "1 Liter", price: 15000 }
    ]
  },

  // --- KEMASAN PLASTIK ---
  {
    id: "plastik-ori",
    category: "plastik",
    categoryLabel: "Kemasan Plastik",
    name: "MySooya Original (Plastik)",
    image: "aset/ori plastik.jpg",
    description: "Kemasan plastik hemat dan praktis, rasa murni kedelai segar setiap hari.",
    options: [
      { size: "200 ml", price: 2000 },
      { size: "300 ml", price: 3000 },
      { size: "500 ml", price: 5000 },
      { size: "1 Liter", price: 10000 }
    ]
  },
  {
    id: "plastik-coklat",
    category: "plastik",
    categoryLabel: "Kemasan Plastik",
    name: "MySooya Cokelat (Plastik)",
    image: "aset/coklat plastik.jpg",
    description: "Kemasan plastik ekonomis dengan rasa cokelat gurih nikmat favorit.",
    options: [
      { size: "200 ml", price: 2000 },
      { size: "300 ml", price: 3000 },
      { size: "500 ml", price: 5000 },
      { size: "1 Liter", price: 10000 }
    ]
  },
  {
    id: "plastik-melon",
    category: "plastik",
    categoryLabel: "Kemasan Plastik",
    name: "MySooya Melon (Plastik)",
    image: "aset/melon plastik.jpg",
    description: "Segarnya melon dingin dalam kemasan kantong plastik yang praktis.",
    options: [
      { size: "200 ml", price: 2000 },
      { size: "300 ml", price: 3000 },
      { size: "500 ml", price: 5000 },
      { size: "1 Liter", price: 10000 }
    ]
  },
  {
    id: "plastik-strawberry",
    category: "plastik",
    categoryLabel: "Kemasan Plastik",
    name: "MySooya Strawberry (Plastik)",
    image: "aset/strawberry plastik.jpg",
    description: "Susu kedelai stroberi manis segar dalam kemasan plastik ramah di kantong.",
    options: [
      { size: "200 ml", price: 2000 },
      { size: "300 ml", price: 3000 },
      { size: "500 ml", price: 5000 },
      { size: "1 Liter", price: 10000 }
    ]
  },
  {
    id: "plastik-taro",
    category: "plastik",
    categoryLabel: "Kemasan Plastik",
    name: "MySooya Taro (Plastik)",
    image: "aset/taro plastik.jpg",
    description: "Varian taro ungu nikmat dengan harga terjangkau kemasan plastik.",
    options: [
      { size: "200 ml", price: 2000 },
      { size: "300 ml", price: 3000 },
      { size: "500 ml", price: 5000 },
      { size: "1 Liter", price: 10000 }
    ]
  },

  // --- PAKET BERBAGI ---
  {
    id: "paket-plastik",
    category: "paket",
    categoryLabel: "Paket Berbagi",
    name: "Paket Berbagi (Kemasan Plastik)",
    image: "aset/paket plastik.jpg",
    description: "Paket hemat kemasan plastik, sangat cocok untuk sedekah, kumpul keluarga, atau Jumat Berkah.",
    options: [
      { size: "Paket Senyum", price: 35000 },
      { size: "Paket Bahagia", price: 50000 },
      { size: "Paket Senyum Bahagia", price: 85000 }
    ]
  },
  {
    id: "paket-botol",
    category: "paket",
    categoryLabel: "Paket Berbagi",
    name: "Paket Berbagi (Kemasan Botol)",
    image: "aset/paket botol.jpg",
    description: "Paket spesial kemasan botol eksklusif untuk acara kantor, arisan, hampers, atau perayaan.",
    options: [
      { size: "Paket Platinum", price: 110000 },
      { size: "Paket Exclusive", price: 170000 },
      { size: "Paket Sultan", price: 270000 }
    ]
  }
];

let cart = [];
let currentFilter = "all";

// Helper Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

// 2. RENDER KATALOG DENGAN FILTER KATEGORI
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const filteredProducts = currentFilter === "all" 
    ? products 
    : products.filter(p => p.category === currentFilter);

  grid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <span class="badge-category">${product.categoryLabel}</span>
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/400x400/EBF2E8/2D5A27?text=MySooya'">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        
        <div class="size-select-group">
          <label for="opt-${product.id}">Pilih Kategori / Ukuran:</label>
          <select class="size-select" id="opt-${product.id}" onchange="changePriceDisplay('${product.id}')">
            ${product.options.map((opt, idx) => `
              <option value="${idx}">
                ${opt.size} - ${formatRupiah(opt.price)}
              </option>
            `).join("")}
          </select>
        </div>

        <div class="product-bottom">
          <span class="product-price" id="price-${product.id}">
            ${formatRupiah(product.options[0].price)}
          </span>
          <button class="btn btn-primary btn-add-cart" onclick="addToCartWithOptions('${product.id}')">
            + Keranjang
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Filter Tab Switcher
function filterCatalog(category) {
  currentFilter = category;
  
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  if (window.event && window.event.target) {
    window.event.target.classList.add("active");
  }

  renderProducts();
}

// Update label harga ketika ukuran dipilih
function changePriceDisplay(productId) {
  const product = products.find(p => p.id === productId);
  const select = document.getElementById(`opt-${productId}`);
  const priceDisplay = document.getElementById(`price-${productId}`);
  
  if (product && select && priceDisplay) {
    const selectedOption = product.options[select.value];
    priceDisplay.textContent = formatRupiah(selectedOption.price);
  }
}

// 3. LOGIKA KERANJANG
function addToCartWithOptions(productId) {
  const item = products.find(p => p.id === productId);
  const select = document.getElementById(`opt-${productId}`);
  if (!item || !select) return;

  const chosenOption = item.options[select.value];
  const cartItemId = `${productId}-${chosenOption.size}`;

  const existing = cart.find(c => c.cartItemId === cartItemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      cartItemId: cartItemId,
      id: item.id,
      name: `${item.name} [${chosenOption.size}]`,
      price: chosenOption.price,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Ditambahkan: ${item.name} (${chosenOption.size})`);
}

function updateQty(cartItemId, change) {
  const item = cart.find(c => c.cartItemId === cartItemId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.cartItemId !== cartItemId);
  }
  updateCartUI();
}

function removeFromCart(cartItemId) {
  cart = cart.filter(c => c.cartItemId !== cartItemId);
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById("cartBadge");
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalItems;

  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (!container || !totalEl) return;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 30px 0; color:#888; font-size:0.95rem;">Keranjang pesanan masih kosong 🍃</p>`;
    totalEl.textContent = formatRupiah(0);
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-sub">${formatRupiah(item.price)} &times; ${item.qty} = <strong>${formatRupiah(subtotal)}</strong></div>
        </div>
        <div class="cart-qty-ctrl">
          <button type="button" class="qty-btn" onclick="updateQty('${item.cartItemId}', -1)">-</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" onclick="updateQty('${item.cartItemId}', 1)">+</button>
          <button type="button" class="qty-del-btn" onclick="removeFromCart('${item.cartItemId}')" aria-label="Hapus item">&times;</button>
        </div>
      </div>
    `;
  }).join("");

  totalEl.textContent = formatRupiah(total);
}

// 4. TOAST NOTIFIKASI
function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2300);
}

// 5. LOGIKA SLIDER TESTIMONI (GESER 1 PER 1)
let currentSlide = 0;

function initReviewSlider() {
  const slides = document.querySelectorAll(".review-slide");
  const dotsContainer = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("prevReview");
  const nextBtn = document.getElementById("nextReview");

  if (!slides.length || !dotsContainer) return;

  dotsContainer.innerHTML = Array.from(slides).map((_, idx) => `
    <span class="dot ${idx === 0 ? 'active' : ''}" onclick="goToReviewSlide(${idx})"></span>
  `).join("");

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, idx) => {
      s.classList.toggle("active", idx === currentSlide);
    });

    const dots = document.querySelectorAll(".dot");
    dots.forEach((d, idx) => {
      d.classList.toggle("active", idx === currentSlide);
    });
  }

  window.goToReviewSlide = (idx) => showSlide(idx);

  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
}

// 6. EVENT LISTENER GLOBAL
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  initReviewSlider();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Buka/Tutup Keranjang
  const cartToggle = document.getElementById("cartToggle");
  const cartClose = document.getElementById("cartClose");
  const cartDrawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  function openCart() {
    if (cartDrawer) {
      cartDrawer.classList.add("active");
      cartDrawer.setAttribute("aria-hidden", "false");
    }
    if (overlay) overlay.classList.add("active");
  }

  function closeCart() {
    if (cartDrawer) {
      cartDrawer.classList.remove("active");
      cartDrawer.setAttribute("aria-hidden", "true");
    }
    if (overlay) overlay.classList.remove("active");
  }

  if (cartToggle) cartToggle.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (overlay) overlay.addEventListener("click", closeCart);

  // INTERAKSI FORM CHECKOUT (Diantar vs Ambil Sendiri di Stand)
  const deliveryMethod = document.getElementById("deliveryMethod");
  const standSelectGroup = document.getElementById("standSelectGroup");
  const addressGroup = document.getElementById("addressGroup");
  const customerAddress = document.getElementById("customerAddress");
  const paymentMethod = document.getElementById("paymentMethod");
  const paymentInfoBox = document.getElementById("paymentInfoBox");

  if (deliveryMethod) {
    deliveryMethod.addEventListener("change", () => {
      if (deliveryMethod.value === "ambil") {
        standSelectGroup.style.display = "block";
        addressGroup.style.display = "none";
        customerAddress.removeAttribute("required");
      } else {
        standSelectGroup.style.display = "none";
        addressGroup.style.display = "block";
        customerAddress.setAttribute("required", "true");
      }
    });
  }

  // Info Box Dinamis (Cash vs QRIS)
  if (paymentMethod && paymentInfoBox) {
    paymentMethod.addEventListener("change", () => {
      if (paymentMethod.value === "QRIS") {
        paymentInfoBox.innerHTML = `💳 <strong>Pembayaran QRIS:</strong> Admin akan mengonfirmasi total &amp; mengirimkan <strong>barcode QRIS pembayaran</strong> langsung ke chat WhatsApp ini.`;
      } else {
        paymentInfoBox.innerHTML = `💵 <strong>Pembayaran Cash:</strong> Dibayarkan langsung secara tunai saat pesanan diantar atau saat diambil di stand.`;
      }
    });
  }

  // SUBMIT FORM CHECKOUT WHATSAPP
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        alert("Keranjang masih kosong! Silakan pilih varian atau paket terlebih dahulu.");
        return;
      }

      const name = document.getElementById("customerName")?.value.trim();
      const delivery = deliveryMethod?.value;
      const stand = document.getElementById("standLocation")?.value;
      const address = customerAddress?.value.trim();
      const payment = paymentMethod?.value;
      const note = document.getElementById("customerNote")?.value.trim();
      const errorEl = document.getElementById("formError");

      if (!name) {
        if (errorEl) errorEl.textContent = "Nama pemesan wajib diisi!";
        return;
      }

      if (delivery === "diantar" && !address) {
        if (errorEl) errorEl.textContent = "Alamat pengiriman lengkap wajib diisi untuk opsi diantar!";
        return;
      }
      if (errorEl) errorEl.textContent = "";

      let itemsText = cart.map(i => `• ${i.name} (${i.qty}x) = ${formatRupiah(i.price * i.qty)}`).join("\n");
      let totalHarga = formatRupiah(cart.reduce((s, i) => s + (i.price * i.qty), 0));

      let infoMetode = delivery === "ambil" 
        ? `Pengambilan: *Ambil di Stand Offline*\nLokasi Stand: *${stand}* (Buka 06.30 - 09.30)` 
        : `Pengambilan: *Diantar ke Alamat*\nAlamat: ${address}`;

      let infoInstruksiBayar = payment === "QRIS"
        ? "(Mohon dicek ketersediaan stok & dikirimkan barcode QRIS pembayarannya ya min. Terima kasih! 🙏)"
        : "(Pembayaran via Cash/Tunai saat pesanan diterima. Terima kasih! 🙏)";

      let message = 
`Halo Admin MySooya, saya mau order susu kedelai:

${itemsText}
--------------------------------
Subtotal: ${totalHarga}

*Data Pemesan:*
Nama: ${name}
${infoMetode}
Pembayaran: *${payment}*
Catatan: ${note || "-"}

${infoInstruksiBayar}`;

      const waUrl = `https://wa.me/6288238715696?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    });
  }
});