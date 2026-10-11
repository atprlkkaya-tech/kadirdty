/**
 * DETAY CEP CENTER - BEYŞEHİR
 * Turkcell Yetkili Bayisi
 * İletişim Numaraları:
 * WhatsApp / GSM: +90 532 696 06 00
 * Sabit Servis & Danışma Hattı: 0332 512 33 00
 */

// PHONE CATALOG DATA (Tüm Dosyadaki Modeller)
const phoneCatalog = [
  // --- APPLE IPHONE MODELLERİ ---
  {
    id: 'iphone-18-pro-max',
    brand: 'apple',
    name: 'Apple iPhone 18 Pro Max',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 18 pro max.jpg',
    badge: 'En Yeni Amiral Gemisi',
    badgeClass: 'badge-new',
    specs: ['256GB / 512GB / 1TB', 'A20 Pro Bionic', '48MP Quad Lens', '6.9" 144Hz OLED'],
    processor: 'Apple A20 Pro Bionic (Yapay Zeka Nöral Motor)',
    display: '6.9 inç Super Retina XDR 144Hz ProMotion Titanyum Çerçeve',
    camera: '48MP Fusion + 48MP Ultra Geniş + 48MP 5x Periskop Telefoto',
    battery: '4850 mAh / MagSafe Hızlı Şarj / 33 Saat Video Oynatma',
    storage: '256GB / 512GB / 1TB',
    warranty: '2 Yıl Apple Türkiye Garantili - Sıfır Kutu',
    description: 'En son nesil Apple zirve telefonu. Titanyum gövde, profesyonel sinematik çekim modu, üstün pil performansı ve Beyşehir Detay Cep Center güvencesiyle.'
  },
  {
    id: 'iphone-18-pro',
    brand: 'apple',
    name: 'Apple iPhone 18 Pro',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 18 pro.webp',
    badge: 'Pro Performans',
    badgeClass: 'badge-new',
    specs: ['256GB / 512GB', 'A20 Pro Çip', 'ProMotion 120Hz', 'Titanyum Gövde'],
    processor: 'Apple A20 Pro Bionic',
    display: '6.3 inç Super Retina XDR OLED ProMotion Always-On',
    camera: '48MP Üçlü Profesyonel Kamera Sistemi, LiDAR Tarayıcı',
    battery: '4100 mAh / Hızlı Şarj Desteği',
    storage: '256GB / 512GB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'Kompakt boyut, üst düzey Pro yetenekleri. Havacılık sınıfı titanyum tasarım ile olağanüstü dayanıklılık.'
  },
  {
    id: 'iphone-17-pro-max',
    brand: 'apple',
    name: 'Apple iPhone 17 Pro Max',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 17 pro max.webp',
    badge: 'Çok Satan Pro',
    badgeClass: 'badge-turkcell',
    specs: ['256GB / 512GB / 1TB', 'A19 Pro Çip', '48MP Telefoto', '6.9" Ekran'],
    processor: 'Apple A19 Pro Bionic',
    display: '6.9 inç Dynamic Island Super Retina OLED',
    camera: '48MP Ana + 48MP Geniş Açı + 12MP 5x Optik Zoom',
    battery: '4600 mAh / Tüm Gün Süren Pil',
    storage: '256GB / 512GB / 1TB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'Büyük ekran sevenlerin vazgeçilmezi. Üstün grafik performansı ve profesyonel video kayıt yetenekleri.'
  },
  {
    id: 'iphone-17-pro',
    brand: 'apple',
    name: 'Apple iPhone 17 Pro',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 17 pro.jpg',
    badge: 'Turkcell Fırsatı',
    badgeClass: 'badge-turkcell',
    specs: ['128GB / 256GB / 512GB', 'A19 Pro Bionic', 'Titanyum Kasa', 'Eylem Düğmesi'],
    processor: 'Apple A19 Pro Bionic',
    display: '6.3 inç 120Hz ProMotion Dinamik Ada',
    camera: '48MP Pro Kamera Sistemi + Gece Modu Portre',
    battery: '3800 mAh / Hızlı Şarj',
    storage: '128GB / 256GB / 512GB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'Tek elle kullanım rahatlığı sunan titanyum gövde ve profesyonel fotoğrafçılık donanımı.'
  },
  {
    id: 'iphone-17',
    brand: 'apple',
    name: 'Apple iPhone 17',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 17.webp',
    badge: 'Popüler Model',
    badgeClass: 'badge-turkcell',
    specs: ['128GB / 256GB', 'A19 Çip', '48MP Çift Kamera', '6.1" OLED'],
    processor: 'Apple A19 Çip',
    display: '6.1 inç Super Retina XDR Dinamik Ada Ekran',
    camera: '48MP Gelişmiş Çift Kamera Sistemi + 2x Optik Kalite Zoom',
    battery: '3600 mAh / Optimize Edilmiş Pil Ömrü',
    storage: '128GB / 256GB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'Canlı renkler, sağlam cam arka yüzey ve Apple ekosisteminin en dengeli yeni nesil cihazı.'
  },
  {
    id: 'iphone-16',
    brand: 'apple',
    name: 'Apple iPhone 16',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 16.jpg',
    badge: 'Öne Çıkan',
    badgeClass: 'badge-turkcell',
    specs: ['128GB / 256GB', 'A18 Çip', 'Kamera Denetimi Butonu', 'Dinamik Ada'],
    processor: 'Apple A18 Bionic',
    display: '6.1 inç Super Retina XDR OLED',
    camera: '48MP Fusion Kamera + 12MP Ultra Geniş',
    battery: '3561 mAh / 22 Saat Video Oynatma',
    storage: '128GB / 256GB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'Kamera Denetimi düğmesiyle anında çekim yapın. Turkcell faturalı hatlara özel avantajlı ödeme fırsatlarıyla.'
  },
  {
    id: 'iphone-15',
    brand: 'apple',
    name: 'Apple iPhone 15',
    categoryName: 'Apple iPhone Serisi',
    image: 'iphone 15.jpg',
    badge: 'Fiyat / Performans',
    badgeClass: '',
    specs: ['128GB / 256GB', 'A16 Bionic', 'USB-C Bağlantı', '48MP Ana Kamera'],
    processor: 'Apple A16 Bionic Çip',
    display: '6.1 inç Dynamic Island Super Retina XDR',
    camera: '48MP Ana Kamera + 12MP Ultra Geniş Açı',
    battery: '3349 mAh / Tüm Gün Yeten Pil',
    storage: '128GB / 256GB',
    warranty: '2 Yıl Apple Türkiye Garantili',
    description: 'USB-C şarj rahatlığı, Dynamic Island deneyimi ve yüksek çözünürlüklü fotoğraflar.'
  },

  // --- SAMSUNG GALAXY MODELLERİ ---
  {
    id: 'samsung-s26-ultra',
    brand: 'samsung',
    name: 'Samsung Galaxy S26 Ultra 5G',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'samsung s26 ultra.jpg',
    badge: 'Android Zirvesi',
    badgeClass: 'badge-new',
    specs: ['12GB/16GB RAM', '256GB - 1TB', '200MP AI Kamera', 'Entegre S-Pen'],
    processor: 'Qualcomm Snapdragon 8 Gen 5 for Galaxy',
    display: '6.8 inç Dinamik AMOLED 2X 144Hz QHD+ Titanyum Kasa',
    camera: '200MP Yapay Zeka Destekli Ana Kamera + 50MP Periskop 100x Space Zoom',
    battery: '5000 mAh / 45W Hızlı Şarj / Kablosuz Şarj',
    storage: '256GB / 512GB / 1TB',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Android dünyasının en güçlü amiral gemisi. Entegre S-Pen kalemi, Galaxy AI yapay zeka araçları ve 200MP eşsiz kamera.'
  },
  {
    id: 'samsung-a57',
    brand: 'samsung',
    name: 'Samsung Galaxy A57 5G',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'samsung a57.webp',
    badge: 'Çok Satan 5G',
    badgeClass: 'badge-turkcell',
    specs: ['8GB RAM / 256GB', '50MP OIS Kamera', '120Hz Super AMOLED', 'IP67 Suya Dayanıklı'],
    processor: 'Samsung Exynos 1680 Sekiz Çekirdek 5G',
    display: '6.6 inç FHD+ 120Hz Super AMOLED Vision Booster',
    camera: '50MP OIS Destekli Ana + 12MP Geniş + 5MP Makro',
    battery: '5000 mAh / 45W Hızlı Şarj Desteği',
    storage: '128GB / 256GB (MicroSD Desteği)',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Üst segment tasarım, su geçirmezlik, uzun güncelleme desteği ve yüksek pil performansı bir arada.'
  },
  {
    id: 'samsung-a37',
    brand: 'samsung',
    name: 'Samsung Galaxy A37 5G',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'a37 samsung.jpg',
    badge: 'Akıllı Tercih',
    badgeClass: 'badge-turkcell',
    specs: ['8GB RAM / 128GB-256GB', '50MP Kamera', '5000 mAh Batarya', '120Hz AMOLED'],
    processor: 'Sekiz Çekirdekli 5G İşlemci',
    display: '6.5 inç FHD+ 120Hz Super AMOLED Ekran',
    camera: '50MP OIS Ana Kamera + 8MP Geniş + 5MP Makro',
    battery: '5000 mAh / 25W Süper Hızlı Şarj',
    storage: '128GB / 256GB',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Hem oyun hem günlük kullanım için ideal performans. Şık renk seçenekleriyle Detay Cep Center stoklarında.'
  },
  {
    id: 'samsung-a27',
    brand: 'samsung',
    name: 'Samsung Galaxy A27',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'samsung a27.webp',
    badge: 'Ekonomik & Güçlü',
    badgeClass: '',
    specs: ['6GB / 8GB RAM', '128GB Depolama', '50MP Çift Kamera', '5000 mAh'],
    processor: 'MediaTek Helio G99 / Sekiz Çekirdek',
    display: '6.5 inç 90Hz FHD+ Canlı Ekran',
    camera: '50MP AI Yüksek Netlikte Kamera',
    battery: '5000 mAh Uzun Ömürlü Batarya',
    storage: '128GB',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Dengeli donanım, ergonomik tutuş ve Samsung One UI akıcı arayüz deneyimi.'
  },
  {
    id: 'samsung-a17',
    brand: 'samsung',
    name: 'Samsung Galaxy A17',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'samsung a17.jpg',
    badge: 'Bütçe Dostu',
    badgeClass: '',
    specs: ['6GB RAM / 128GB', '50MP Kamera', '5000 mAh Pil', 'Geniş Ekran'],
    processor: 'Sekiz Çekirdekli Verimli İşlemci',
    display: '6.6 inç FHD+ 90Hz Akıcı Ekran',
    camera: '50MP Ana Kamera + Portre Modu',
    battery: '5000 mAh / 25W Hızlı Şarj',
    storage: '128GB Hafıza',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Fiyatına göre üstün ekran kalitesi ve 2 güne varan pil ömrüyle harika bir başlangıç modeli.'
  },
  {
    id: 'samsung-a07',
    brand: 'samsung',
    name: 'Samsung Galaxy A07',
    categoryName: 'Samsung Galaxy Serisi',
    image: 'samsung a07.webp',
    badge: 'Giriş Segment Lideri',
    badgeClass: '',
    specs: ['4GB RAM / 64GB-128GB', '50MP Kamera', '5000 mAh Batarya', 'Type-C'],
    processor: 'Sekiz Çekirdekli Enerji Tasarruflu İşlemci',
    display: '6.5 inç HD+ Geniş Ekran',
    camera: '50MP Arka Kamera + 5MP Ön Kamera',
    battery: '5000 mAh Dayanıklı Batarya',
    storage: '64GB / 128GB',
    warranty: '2 Yıl Samsung Türkiye Garantili',
    description: 'Basit, dayanıklı ve uzun ömürlü pil. Aile büyükleri, öğrenciler veya iş telefonu arayanlara özel.'
  },

  // --- XIAOMI & REDMI MODELLERİ ---
  {
    id: 'redmi-note-15-pro',
    brand: 'xiaomi',
    name: 'Xiaomi Redmi Note 15 Pro 5G',
    categoryName: 'Xiaomi Redmi Serisi',
    image: 'note 15 pro.webp',
    badge: '200MP Canavarı',
    badgeClass: 'badge-new',
    specs: ['12GB RAM / 512GB', '200MP OIS Kamera', '120W HyperCharge', '1.5K AMOLED'],
    processor: 'MediaTek Dimensity 8400 Ultra 5G',
    display: '6.67 inç 1.5K 144Hz Kavisli AMOLED CrystalRes Ekran',
    camera: '200MP OIS Ultra Net Ana Kamera + 8MP Ultra Geniş + 2MP Makro',
    battery: '5100 mAh / 120W Hızlı Şarj (19 Dakikada %100)',
    storage: '256GB / 512GB',
    warranty: '2 Yıl Xiaomi Türkiye (Evofone) Garantili',
    description: '200MP kamera kalitesi, 120W roket hızında şarj ve 1.5K kristal berraklığında AMOLED ekran ile rakipsiz.'
  },
  {
    id: 'redmi-note-15',
    brand: 'xiaomi',
    name: 'Xiaomi Redmi Note 15',
    categoryName: 'Xiaomi Redmi Serisi',
    image: 'note 15 redmi.webp',
    badge: 'En Popüler F/P',
    badgeClass: 'badge-turkcell',
    specs: ['8GB RAM / 256GB', '108MP Kamera', '67W Turbo Şarj', '120Hz AMOLED'],
    processor: 'Snapdragon 6 Gen 3 / 6nm Güçlü Yonga',
    display: '6.67 inç FHD+ 120Hz AMOLED 1800 Nit Parlaklık',
    camera: '108MP 3x Kayıpsız Zoom Ana Kamera',
    battery: '5500 mAh Dev Batarya / 67W Turbo Şarj',
    storage: '256GB Depolama',
    warranty: '2 Yıl Xiaomi Türkiye Garantili',
    description: '108MP kamerası ve devasa 5500 mAh bataryası ile sınıfının en çok tercih edilen Redmi modeli.'
  },
  {
    id: 'xiaomi-redmi-15',
    brand: 'xiaomi',
    name: 'Xiaomi Redmi 15',
    categoryName: 'Xiaomi Redmi Serisi',
    image: 'xiaomi-redmi-15.avif',
    badge: 'Yeni Nesil',
    badgeClass: '',
    specs: ['8GB RAM / 256GB', '50MP AI Kamera', '5160 mAh Batarya', '6.79" 90Hz'],
    processor: 'Sekiz Çekirdekli Performans İşlemcisi',
    display: '6.79 inç FHD+ 90Hz Büyük Ekran',
    camera: '50MP Yapay Zeka Destekli Kamera Sistemi',
    battery: '5160 mAh / 18W Hızlı Şarj',
    storage: '128GB / 256GB',
    warranty: '2 Yıl Xiaomi Türkiye Garantili',
    description: 'Geniş ekran deneyimi, cam arka yüzey ve uygun fiyat avantajıyla gençlerin gözdesi.'
  },
  {
    id: 'redmi-15c',
    brand: 'xiaomi',
    name: 'Xiaomi Redmi 15C (8GB / 256GB)',
    categoryName: 'Xiaomi Redmi Serisi',
    image: 'redmi 15c.webp',
    badge: 'Fiyat Şampiyonu',
    badgeClass: 'badge-turkcell',
    specs: ['8GB RAM (16GB Sanal)', '256GB Depolama', '50MP AI Çift Kamera', '5000 mAh'],
    processor: 'MediaTek Helio G85 Ultra Sekiz Çekirdek',
    display: '6.74 inç 90Hz Akıcı Damla Çentik Ekran',
    camera: '50MP Yapay Zekalı Çift Kamera + HDR Modu',
    battery: '5000 mAh / Type-C 18W Hızlı Şarj',
    storage: '256GB Dahili Hafıza',
    warranty: '2 Yıl Türkiye Garantili - Sıfır Kutu',
    description: 'Geniş 256GB depolama kapasitesi, 8GB RAM ve şık tasarımıyla bütçenizi yormayan en popüler telefon.'
  }
];

// Sabit Numaralar
const WA_PHONE = '905326960600';
const LANDLINE_PHONE = '03325123300';

// WhatsApp Link Oluşturucu
function createWhatsAppUrl(message) {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

// DOMContentLoaded Başlatma
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderPhoneCatalog(phoneCatalog);
  initPortfolioFilters();
  initRepairCalculator();
  initWorkingHoursStatus();
  initFaqAccordion();
  initWhatsAppWidget();
  initModal();
});

/* ========================================================
   NAVBAR & SCROLL
   ======================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const mobileLinks = document.querySelectorAll('.mobile-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const openMobileNav = () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileNav = () => {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openMobileNav);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (backdrop) backdrop.addEventListener('click', closeMobileNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

/* ========================================================
   PHONE PORTFOLIO RENDERING & FILTERS
   ======================================================== */
function renderPhoneCatalog(items) {
  const container = document.getElementById('phoneGrid');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: #fff; border-radius: 16px; border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-mobile-screen" style="font-size: 3rem; color: #94A3B8; margin-bottom: 14px;"></i>
        <h3 style="color: var(--tk-blue); font-weight: 800; margin-bottom: 8px;">Aradığınız Kriterde Model Bulunamadı</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 18px;">Stoklarımızda bulunan diğer modelleri inceleyebilir veya WhatsApp üzerinden sorabilirsiniz.</p>
        <a href="${createWhatsAppUrl('Merhaba Detay Cep Center, aradığım telefon modelini sormak istiyorum.')}" target="_blank" class="btn-primary-yellow" style="display: inline-flex;">
          <i class="fa-brands fa-whatsapp"></i> WhatsApp'tan Model Sor
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(phone => {
    const waMsg = `Merhaba Detay Cep Center, ${phone.name} modeli için güncel fiyat, taksit seçenekleri ve stok bilgisi almak istiyorum.`;
    const waUrl = createWhatsAppUrl(waMsg);

    return `
      <div class="phone-card" data-brand="${phone.brand}" data-id="${phone.id}">
        ${phone.badge ? `<span class="phone-badge ${phone.badgeClass}"><i class="fa-solid fa-star"></i> ${phone.badge}</span>` : ''}
        
        <div class="phone-image-wrapper">
          <img src="${phone.image}" alt="${phone.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/002554/FFC700?text=${encodeURIComponent(phone.name)}'">
        </div>

        <div class="phone-category">${phone.categoryName}</div>
        <h3 class="phone-name">${phone.name}</h3>

        <div class="phone-specs-list">
          ${phone.specs.map(spec => `<span class="spec-chip"><i class="fa-solid fa-check"></i> ${spec}</span>`).join('')}
        </div>

        <div class="phone-guarantee">
          <i class="fa-solid fa-shield-halved"></i>
          <span>${phone.warranty}</span>
        </div>

        <div class="phone-actions">
          <a href="${waUrl}" target="_blank" class="btn-price-ask" title="WhatsApp üzerinden anında fiyat bilgisi alın">
            <i class="fa-brands fa-whatsapp"></i> Fiyat Bilgisi Al
          </a>
          <button class="btn-details-modal" onclick="openPhoneModal('${phone.id}')">
            <i class="fa-solid fa-circle-info"></i> Özellikleri İncele
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('phoneSearchInput');

  let currentBrand = 'all';
  let searchTerm = '';

  const applyFilters = () => {
    let filtered = phoneCatalog;

    if (currentBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === currentBrand);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.specs.some(s => s.toLowerCase().includes(term)) ||
        p.description.toLowerCase().includes(term)
      );
    }

    renderPhoneCatalog(filtered);
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBrand = btn.getAttribute('data-brand') || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      applyFilters();
    });
  }
}

/* ========================================================
   MODAL DETAILS
   ======================================================== */
function initModal() {
  const modal = document.getElementById('phoneModal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

function openPhoneModal(phoneId) {
  const phone = phoneCatalog.find(p => p.id === phoneId);
  if (!phone) return;

  const modal = document.getElementById('phoneModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  const waMsg = `Merhaba Detay Cep Center, ${phone.name} modeli hakkında detaylı bilgi, güncel fiyat ve taksit imkanlarını öğrenmek istiyorum.`;
  const waUrl = createWhatsAppUrl(waMsg);

  modalContent.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${phone.image}" alt="${phone.name}">
    </div>
    <div class="modal-details">
      <h4>${phone.name}</h4>
      <p>${phone.description}</p>
      
      <table class="modal-spec-table">
        <tbody>
          <tr>
            <td>İşlemci:</td>
            <td>${phone.processor}</td>
          </tr>
          <tr>
            <td>Ekran:</td>
            <td>${phone.display}</td>
          </tr>
          <tr>
            <td>Kamera:</td>
            <td>${phone.camera}</td>
          </tr>
          <tr>
            <td>Batarya:</td>
            <td>${phone.battery}</td>
          </tr>
          <tr>
            <td>Dahili Hafıza:</td>
            <td>${phone.storage}</td>
          </tr>
          <tr>
            <td>Garanti:</td>
            <td><strong style="color: #15803D;">${phone.warranty}</strong></td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a href="${waUrl}" target="_blank" class="btn-price-ask" style="padding: 12px; font-size: 0.95rem;">
          <i class="fa-brands fa-whatsapp"></i> Fiyat Bilgisi Al (+90 532 696 06 00)
        </a>
        <a href="tel:${LANDLINE_PHONE}" class="btn-details-modal" style="padding: 10px; font-size: 0.88rem;">
          <i class="fa-solid fa-phone"></i> Servis & Bilgi Hattını Ara (0332 512 33 00)
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ========================================================
   REPAIR & SERVICE PRICE CALCULATOR
   ======================================================== */
function initRepairCalculator() {
  const brandSelect = document.getElementById('calcBrand');
  const modelSelect = document.getElementById('calcModel');
  const issueSelect = document.getElementById('calcIssue');
  const waBtn = document.getElementById('calcWaBtn');
  const timePreview = document.getElementById('calcTimePreview');
  const warrantyPreview = document.getElementById('calcWarrantyPreview');

  if (!brandSelect || !modelSelect || !issueSelect || !waBtn) return;

  const modelsByBrand = {
    apple: [
      'iPhone 18 Pro Max', 'iPhone 18 Pro', 'iPhone 17 Pro Max',
      'iPhone 17 Pro', 'iPhone 17', 'iPhone 16 / 16 Plus', 'iPhone 15 / 15 Pro',
      'iPhone 14 / 13 / 12 / 11 Serisi'
    ],
    samsung: [
      'Galaxy S26 Ultra', 'Galaxy S25 / S24 Serisi', 'Galaxy A57 / A55',
      'Galaxy A37 / A35', 'Galaxy A27 / A25', 'Galaxy A17 / A15',
      'Galaxy A07 / A05', 'Galaxy Z Fold / Flip Serisi'
    ],
    xiaomi: [
      'Redmi Note 15 Pro 5G', 'Redmi Note 15', 'Redmi Note 14 / 13 Pro',
      'Xiaomi Redmi 15', 'Xiaomi Redmi 15C', 'Xiaomi 14 / 13 Ultra Serisi'
    ],
    other: [
      'Huawei', 'Oppo / Realme', 'Vivo', 'General Mobile', 'Diğer Markalar'
    ]
  };

  const updateModels = () => {
    const selectedBrand = brandSelect.value;
    const models = modelsByBrand[selectedBrand] || modelsByBrand['apple'];
    modelSelect.innerHTML = models.map(m => `<option value="${m}">${m}</option>`).join('');
    updateEstimate();
  };

  const updateEstimate = () => {
    const issue = issueSelect.value;
    let timeText = '30 - 45 Dakika';
    let warrantyText = '6 Ay Parça & İşçilik Garantisi';

    if (issue === 'batarya') {
      timeText = '20 - 30 Dakika (Hızlı Değişim)';
      warrantyText = '6 Ay Orijinal Pil Sağlığı Garantisi';
    } else if (issue === 'sivi') {
      timeText = '1 - 2 Saat (Özel Kurutma & Ultrasonik Temizlik)';
      warrantyText = 'İşlem Başarı Garantisi';
    } else if (issue === 'anakart') {
      timeText = 'Aynı Gün İçerisinde';
      warrantyText = 'Mikroskop Onarım Garantisi';
    } else if (issue === 'yazilim') {
      timeText = '15 - 30 Dakika';
      warrantyText = 'Sıfırlama & Veri Aktarım Güvencesi';
    }

    if (timePreview) timePreview.innerText = timeText;
    if (warrantyPreview) warrantyPreview.innerText = warrantyText;

    // WhatsApp butonu URL güncelleme
    const brandName = brandSelect.options[brandSelect.selectedIndex].text;
    const modelName = modelSelect.value;
    const issueName = issueSelect.options[issueSelect.selectedIndex].text;

    const message = `Merhaba Detay Cep Center Servisi,\n\nCihaz Markası: ${brandName}\nModel: ${modelName}\nArıza Türü: ${issueName}\n\nBu tamir için güncel fiyat bilgisi ve parça stok durumunu öğrenebilir miyim?`;
    waBtn.href = createWhatsAppUrl(message);
  };

  brandSelect.addEventListener('change', updateModels);
  modelSelect.addEventListener('change', updateEstimate);
  issueSelect.addEventListener('change', updateEstimate);

  // İlk doldurma
  updateModels();
}

/* ========================================================
   WORKING HOURS & LIVE SHOP STATUS
   ======================================================== */
function initWorkingHoursStatus() {
  const statusBadge = document.getElementById('shopStatusBadge');
  const now = new Date();
  const day = now.getDay(); // 0: Pazar, 1: Pzt, ..., 6: Cts
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  let isOpen = false;
  let statusText = '';

  // Hafta içi ve Cumartesi (1-6): 08:30 - 20:00
  // Pazar (0): 11:00 - 18:00 (Nöbetçi)
  if (day >= 1 && day <= 6) {
    if (currentTime >= 8.5 && currentTime < 20.0) {
      isOpen = true;
      statusText = 'Şu Anda Açığız (Kapanış: 20:00)';
    } else {
      isOpen = false;
      statusText = 'Şu Anda Kapalıyız (Açılış: 08:30)';
    }
  } else if (day === 0) { // Pazar
    if (currentTime >= 11.0 && currentTime < 18.0) {
      isOpen = true;
      statusText = 'Nöbetçi / Açığız (Kapanış: 18:00)';
    } else {
      isOpen = false;
      statusText = 'Pazar Kapalıyız (Yarın 08:30 Açılış)';
    }
  }

  if (statusBadge) {
    if (isOpen) {
      statusBadge.innerHTML = `
        <span class="status-indicator" style="background:#10B981; box-shadow:0 0 8px #10B981;"></span>
        <span style="color:#10B981; font-weight:700;">${statusText}</span>
      `;
    } else {
      statusBadge.innerHTML = `
        <span class="status-indicator" style="background:#F59E0B; box-shadow:0 0 8px #F59E0B;"></span>
        <span style="color:#F59E0B; font-weight:700;">${statusText}</span>
      `;
    }
  }

  // Aktif günü listede vurgula
  const dayItems = document.querySelectorAll('.hours-list li');
  if (dayItems && dayItems.length >= 7) {
    // day: 0 pazar, 1 pzt, 2 salı...
    let mappedIndex = (day === 0) ? 6 : (day - 1);
    if (dayItems[mappedIndex]) {
      dayItems[mappedIndex].classList.add('active-day');
    }
  }
}

/* ========================================================
   FAQ ACCORDION
   ======================================================== */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const question = card.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        faqCards.forEach(c => c.classList.remove('open'));
        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });
}

/* ========================================================
   FLOATING WHATSAPP CHAT POPUP WIDGET
   ======================================================== */
function initWhatsAppWidget() {
  const pulseBtn = document.querySelector('.wa-pulse-btn');
  const chatPopup = document.querySelector('.wa-chat-popup');
  const closeBtn = document.querySelector('.wa-close-btn');
  const quickOpts = document.querySelectorAll('.wa-opt-btn');

  if (pulseBtn && chatPopup) {
    pulseBtn.addEventListener('click', () => {
      chatPopup.classList.toggle('active');
    });
  }

  if (closeBtn && chatPopup) {
    closeBtn.addEventListener('click', () => {
      chatPopup.classList.remove('active');
    });
  }

  quickOpts.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.innerText.trim();
      const message = `Merhaba Detay Cep Center, ${text} hakkında bilgi almak istiyorum.`;
      window.open(createWhatsAppUrl(message), '_blank');
      if (chatPopup) chatPopup.classList.remove('active');
    });
  });
}
