// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav drawer
const navToggle = document.getElementById("navToggle");
const drawer = document.getElementById("mobileDrawer");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  drawer.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  drawer.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle) navToggle.addEventListener("click", openDrawer);
if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

// Hero: cycling search queries, styled like a typed search bar
const queries = [
  "chimney inspection near me",
  "how much does a roof replacement cost",
  "best local roofing contractor",
  "commercial flat roof repair"
];

const typedEl = document.getElementById("typedQuery");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typedEl) {
  if (reduceMotion) {
    typedEl.textContent = queries[0];
  } else {
    let qIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = queries[qIndex];

      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          qIndex = (qIndex + 1) % queries.length;
        }
      }

      setTimeout(tick, deleting ? 28 : 48);
    }

    tick();
  }
}

// ---- Case study filter tabs ----
const filterTabs = document.querySelectorAll(".filter-tab");
const caseItems = document.querySelectorAll(".case-item");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const filter = tab.dataset.filter;
    caseItems.forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("is-hidden", !match);
    });
  });
});

// ---- Case study detail modal ----
const csModalData = {
  "covenant-realty": {
    badge: "Real Estate Case Study",
    title: "Covenant Realty — Tampa Real Estate SEO",
    subtitle: "Remote SEO Executive Engagement | Tampa, FL, USA",
    img: "images/case-covenant-realty-gsc.png",
    problem: "Low non-branded organic visibility for the Tampa real estate market — just 152 clicks and 19.2K impressions across the prior 3 months, with rankings averaging position 24.3.",
    strategy: [
      "Optimized location-based pages for Tampa & surrounding areas",
      "Improved on-page SEO — titles, meta descriptions, internal linking",
      "Published buyer-focused and seller-focused content",
      "Strengthened local keyword targeting for competitive Tampa real estate terms"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "178,000" },
      { lbl: "Organic Clicks", val: "675" },
      { lbl: "Avg. Position", val: "13.6" }
    ]
  },
  "oyolloo": {
    badge: "Local & B2B Case Study",
    title: "Oyolloo — Full-Stack Agency SEO",
    subtitle: "Full-Stack SEO Engagement | Remote, USA",
    img: "images/case-oyolloo-gsc.png",
    problem: "Limited local visibility in a highly competitive market, with weak on-page and local keyword targeting, inconsistent NAP data, and an underutilized Google Business Profile.",
    strategy: [
      "Conducted high-intent local and semantic keyword research to build topical authority",
      "Optimized Google Business Profile with consistent NAP, services, posts, and reviews",
      "Implemented on-page and entity-based SEO, including schema markup",
      "Built local backlinks and citations to boost authority and geographic relevance"
    ],
    stats: [
      { lbl: "Total Clicks (3mo)", val: "12,900" },
      { lbl: "Total Impressions", val: "2.32M" },
      { lbl: "Avg. Position", val: "41" }
    ]
  },
  "dhaka-matrimonial": {
    badge: "Local & B2B Case Study",
    title: "Dhaka Matrimonial — Local & Semantic SEO",
    subtitle: "Matrimony Platform SEO | Dhaka, Bangladesh",
    img: "images/case-dhaka-matrimonial-gsc.png",
    problem: "Minimal organic visibility and few verified sign-ups, with only 10 clicks and 73 impressions across the prior 3 months.",
    strategy: [
      "Optimized member profile and service pages for search intent",
      "Streamlined site navigation to reduce drop-off",
      "Rebuilt the experience mobile-first for better usability"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "61,200" },
      { lbl: "Organic Clicks", val: "1,310" },
      { lbl: "Avg. Position", val: "14.9" }
    ]
  },
  "marrfa": {
    badge: "Real Estate Case Study",
    title: "Marrfa — Dubai Real Estate Platform",
    subtitle: "International Real Estate SEO | Dubai, UAE",
    img: "images/case-marrfa-gsc.png",
    problem: "A Dubai real-estate platform needed stronger visibility with global investors, starting from roughly 225 clicks and 8.48K impressions per 28-day period.",
    strategy: [
      "Optimized project and listing pages for investor search intent",
      "Improved site speed across key landing pages",
      "Simplified navigation to shorten the path to inquiry"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "30,000" },
      { lbl: "Organic Clicks", val: "389" },
      { lbl: "Impression Growth", val: "+254%" }
    ]
  },
  "australian-co": {
    badge: "E-Commerce Case Study",
    title: "Australian Co — Multi-Brand E-Commerce SEO",
    subtitle: "Multi-Brand E-Commerce SEO | Australia",
    img: "images/case-australian-co-gsc.png",
    problem: "SEO efforts were fragmented across multiple Australian product lines under one parent brand, limiting combined visibility — starting from just 11 clicks and 934 impressions over 3 months.",
    strategy: [
      "Cross-promoted brands under a consolidated SEO strategy",
      "Unified technical SEO and structured data across all brand sites",
      "Improved UX and internal linking across the site network"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "57,000" },
      { lbl: "Organic Clicks", val: "664" },
      { lbl: "Clicks Growth", val: "60x" }
    ]
  },
  "australian-bottle-co": {
    badge: "E-Commerce Case Study",
    title: "Australian Bottle Co — E-Commerce SEO",
    subtitle: "Eco-Friendly Product SEO | Australia",
    img: "images/case-australian-bottle-co-gsc.png",
    problem: "An eco-friendly drink bottle brand had limited online visibility and sales, starting from 100 clicks and 9.25K impressions over 3 months.",
    strategy: [
      "Optimized product pages for search intent and conversions",
      "Enhanced mobile usability across the shopping flow",
      "Spotlighted sustainability messaging in on-page content"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "155,000" },
      { lbl: "Organic Clicks", val: "532" },
      { lbl: "Clicks Growth", val: "+432%" }
    ]
  },
  "australian-beanie-co": {
    badge: "E-Commerce Case Study",
    title: "Australian Beanie Co — E-Commerce SEO",
    subtitle: "Handcrafted Product SEO | Australia",
    img: "images/case-australian-beanie-co-gsc.png",
    problem: "A handcrafted beanie brand was looking to boost online sales, starting from 208 clicks and 12.2K impressions over 3 months.",
    strategy: [
      "Rewrote product descriptions to target buyer search intent",
      "Added supporting blog content for topical relevance",
      "Simplified the shopping experience to reduce friction"
    ],
    stats: [
      { lbl: "GSC Impressions", val: "42,100" },
      { lbl: "Organic Clicks", val: "704" },
      { lbl: "Clicks Growth", val: "+238%" }
    ]
  }
};

const csModalOverlay = document.getElementById("csModalOverlay");
if (csModalOverlay) {
  const csModalBadge = document.getElementById("csModalBadge");
  const csModalTitle = document.getElementById("csModalTitle");
  const csModalSubtitle = document.getElementById("csModalSubtitle");
  const csModalImg = document.getElementById("csModalImg");
  const csModalProblem = document.getElementById("csModalProblem");
  const csModalStrategy = document.getElementById("csModalStrategy");
  const csModalStats = document.getElementById("csModalStats");
  const csModalClose = document.getElementById("csModalClose");

  function openCsModal(id) {
    const data = csModalData[id];
    if (!data) return;

    csModalBadge.textContent = data.badge;
    csModalTitle.textContent = data.title;
    csModalSubtitle.textContent = data.subtitle;
    csModalImg.src = data.img;
    csModalImg.alt = data.title + " — Google Search Console performance";
    csModalProblem.textContent = data.problem;

    csModalStrategy.innerHTML = "";
    data.strategy.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      csModalStrategy.appendChild(li);
    });

    csModalStats.innerHTML = "";
    data.stats.forEach((stat) => {
      const div = document.createElement("div");
      div.innerHTML = `<span class="lbl">${stat.lbl}</span><span class="val">${stat.val}</span>`;
      csModalStats.appendChild(div);
    });

    csModalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeCsModal() {
    csModalOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-case-modal]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openCsModal(link.dataset.caseModal);
    });
  });

  csModalClose.addEventListener("click", closeCsModal);
  csModalOverlay.addEventListener("click", (e) => {
    if (e.target === csModalOverlay) closeCsModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !csModalOverlay.hidden) closeCsModal();
  });
}

// ---- Shared image lightbox (proof gallery + certificates) ----
const imgLightboxOverlay = document.getElementById("imgLightboxOverlay");
if (imgLightboxOverlay) {
  const imgLightboxImg = document.getElementById("imgLightboxImg");
  const imgLightboxClose = document.getElementById("imgLightboxClose");

  function openImgLightbox(src, alt) {
    imgLightboxImg.src = src;
    imgLightboxImg.alt = alt || "";
    imgLightboxOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeImgLightbox() {
    imgLightboxOverlay.hidden = true;
    imgLightboxImg.src = "";
    document.body.style.overflow = "";
  }

  // Certificates — anchors that link straight to the image
  document.querySelectorAll(".cred-item[href]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const img = link.querySelector("img");
      openImgLightbox(link.getAttribute("href"), img ? img.alt : "");
    });
  });

  // AI search visibility proof gallery — plain images inside figures
  document.querySelectorAll(".proof-card img").forEach((img) => {
    img.addEventListener("click", () => {
      openImgLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  imgLightboxClose.addEventListener("click", closeImgLightbox);
  imgLightboxOverlay.addEventListener("click", (e) => {
    if (e.target === imgLightboxOverlay) closeImgLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !imgLightboxOverlay.hidden) closeImgLightbox();
  });
}

// ---- Growth estimator ----
const visitorsRange = document.getElementById("visitorsRange");
const convRange = document.getElementById("convRange");
const valueRange = document.getElementById("valueRange");
const scenarioBtns = document.querySelectorAll(".scenario-btn");

let growthRate = 0.5;

function fmtNumber(n) {
  return Math.round(n).toLocaleString("en-US");
}
function fmtCurrency(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function updateEstimator() {
  if (!visitorsRange) return;

  const visitors = Number(visitorsRange.value);
  const conv = Number(convRange.value);
  const value = Number(valueRange.value);

  document.getElementById("visitorsOut").textContent = fmtNumber(visitors);
  document.getElementById("convOut").textContent = conv + "%";
  document.getElementById("valueOut").textContent = "$" + value;

  const extraVisitors = visitors * growthRate;
  const extraConversions = extraVisitors * (conv / 100);
  const extraRevenue = extraConversions * value;

  document.getElementById("outVisitors").textContent = "+" + fmtNumber(extraVisitors);
  document.getElementById("outConversions").textContent = "+" + fmtNumber(extraConversions);
  document.getElementById("outRevenue").textContent = "+" + fmtCurrency(extraRevenue);
}

[visitorsRange, convRange, valueRange].forEach((el) => {
  if (el) el.addEventListener("input", updateEstimator);
});

scenarioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    scenarioBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    growthRate = Number(btn.dataset.rate);
    updateEstimator();
  });
});

updateEstimator();

// ---- Free Instant SEO Audit popup ----
const seoAuditOverlay = document.getElementById("seoAuditOverlay");
if (seoAuditOverlay) {
  const openSeoAuditBtn = document.getElementById("openSeoAuditBtn");
  const seoAuditClose = document.getElementById("seoAuditClose");
  const seoAuditForm = document.getElementById("seoAuditForm");

  function openSeoAudit() {
    seoAuditOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeSeoAudit() {
    seoAuditOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  if (openSeoAuditBtn) openSeoAuditBtn.addEventListener("click", openSeoAudit);
  seoAuditClose.addEventListener("click", closeSeoAudit);
  seoAuditOverlay.addEventListener("click", (e) => {
    if (e.target === seoAuditOverlay) closeSeoAudit();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !seoAuditOverlay.hidden) closeSeoAudit();
  });

  seoAuditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const website = document.getElementById("auditWebsite").value.trim();
    const email = document.getElementById("auditEmail").value.trim();

    const subject = `Free Instant SEO Audit Request — ${website}`;
    const body =
      `Website: ${website}\n` +
      `Email: ${email}\n\n` +
      `Please send me a free instant SEO audit.`;

    window.location.href =
      `mailto:mossammatfaria1999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// ---- Contact inquiry form (mailto) ----
const inquiryForm = document.getElementById("inquiryForm");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("fEmail").value.trim();
    const website = document.getElementById("fWebsite").value.trim();
    const budget = document.getElementById("fBudget").value;
    const message = document.getElementById("fMessage").value.trim();

    const subject = `SEO inquiry from ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Website: ${website || "—"}\n` +
      `Budget: ${budget}\n\n` +
      `Goals:\n${message}`;

    window.location.href =
      `mailto:mossammatfaria1999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
