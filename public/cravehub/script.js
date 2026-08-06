/* =============================================================
   CraveHub — Main JavaScript (vanilla, no dependencies)
   1 Data · 2 Shell (nav/footer) · 3 Global UI · 4 Menu
   5 AI CraveBot · 6 Deals · 7 Contact · 8 Boot
   ============================================================= */
(function () {
  "use strict";

  /* ---------- 1. Data ---------- */
  var IMG = "/cravehub/img/";

  var MENU = [
    { id: "b1", name: "CraveHub Signature Burger", cat: "burgers", price: 1290, rating: 4.9, reviews: 1240, img: "menu/b1.jpg", tag: "Bestseller", spicy: 1, protein: "beef", desc: "Double flame-grilled beef, aged cheddar, smoked aioli and brioche bun.", kcal: 780 },
    { id: "b2", name: "Smoky BBQ Beef Stack", cat: "burgers", price: 1150, rating: 4.7, reviews: 860, img: "menu/b2.jpg", tag: "Chef's Pick", spicy: 2, protein: "beef", desc: "Slow-smoked patty, crispy onions and house BBQ glaze.", kcal: 820 },
    { id: "b3", name: "Garden Crunch Veggie", cat: "burgers", price: 890, rating: 4.6, reviews: 410, img: "menu/b3.jpg", tag: "Healthy", spicy: 0, protein: "veg", desc: "Chickpea-quinoa patty, avocado smash and herbed yogurt.", kcal: 520 },
    { id: "p1", name: "Molten Pepperoni Pizza", cat: "pizza", price: 1490, rating: 4.8, reviews: 990, img: "menu/p1.jpg", tag: "Trending", spicy: 1, protein: "beef", desc: "Stone-baked 12\" base, triple cheese and cured pepperoni.", kcal: 940 },
    { id: "p2", name: "Fiery Tikka Pizza", cat: "pizza", price: 1590, rating: 4.7, reviews: 640, img: "menu/p2.jpg", tag: "Spicy", spicy: 3, protein: "chicken", desc: "Chargrilled tikka chicken, jalapeño and chilli drizzle.", kcal: 980 },
    { id: "p3", name: "Garden Margherita", cat: "pizza", price: 1090, rating: 4.5, reviews: 380, img: "menu/p3.jpg", tag: "Classic", spicy: 0, protein: "veg", desc: "San Marzano tomato, fior di latte and fresh basil.", kcal: 720 },
    { id: "c1", name: "Golden Crispy Chicken", cat: "chicken", price: 990, rating: 4.9, reviews: 1510, img: "menu/c1.jpg", tag: "Bestseller", spicy: 1, protein: "chicken", desc: "Six-piece buttermilk-brined chicken with signature crumb.", kcal: 690 },
    { id: "c2", name: "Nashville Hot Wings", cat: "chicken", price: 850, rating: 4.8, reviews: 720, img: "menu/c2.jpg", tag: "Spicy", spicy: 3, protein: "chicken", desc: "Eight wings tossed in cayenne-honey heat.", kcal: 610 },
    { id: "c3", name: "Grilled Herb Chicken", cat: "chicken", price: 1080, rating: 4.6, reviews: 330, img: "menu/c3.jpg", tag: "Healthy", spicy: 0, protein: "chicken", desc: "Lean grilled breast, lemon-herb rub, side salad.", kcal: 430 },
    { id: "f1", name: "Loaded Crave Fries", cat: "fries", price: 590, rating: 4.8, reviews: 880, img: "menu/f1.jpg", tag: "Trending", spicy: 1, protein: "veg", desc: "Skin-on fries, molten cheese sauce and smoked spice dust.", kcal: 520 },
    { id: "f2", name: "Classic Golden Fries", cat: "fries", price: 390, rating: 4.6, reviews: 1200, img: "menu/f2.jpg", tag: "Classic", spicy: 0, protein: "veg", desc: "Double-cooked, sea-salted, endlessly dippable.", kcal: 340 },
    { id: "f3", name: "Peri Peri Fries", cat: "fries", price: 490, rating: 4.7, reviews: 560, img: "menu/f3.jpg", tag: "Spicy", spicy: 2, protein: "veg", desc: "Fries dusted with African bird's-eye peri peri.", kcal: 380 },
    { id: "w1", name: "Chargrilled Chicken Wrap", cat: "wraps", price: 790, rating: 4.7, reviews: 620, img: "menu/w1.jpg", tag: "Bestseller", spicy: 1, protein: "chicken", desc: "Grilled chicken, garlic mayo and crisp greens in a warm tortilla.", kcal: 480 },
    { id: "w2", name: "Volcano Beef Wrap", cat: "wraps", price: 890, rating: 4.6, reviews: 340, img: "menu/w2.jpg", tag: "Spicy", spicy: 3, protein: "beef", desc: "Spiced beef strips, chipotle sauce and pickled onion.", kcal: 610 },
    { id: "w3", name: "Falafel Green Wrap", cat: "wraps", price: 690, rating: 4.5, reviews: 260, img: "menu/w3.jpg", tag: "Healthy", spicy: 0, protein: "veg", desc: "Baked falafel, hummus, tabbouleh and tahini.", kcal: 420 },
    { id: "d1", name: "Molten Chocolate Lava", cat: "desserts", price: 590, rating: 4.9, reviews: 940, img: "menu/d1.jpg", tag: "Chef's Pick", spicy: 0, protein: "veg", desc: "Warm chocolate cake with a flowing berry-cocoa core.", kcal: 460 },
    { id: "d2", name: "Salted Caramel Sundae", cat: "desserts", price: 450, rating: 4.7, reviews: 510, img: "menu/d2.jpg", tag: "Sweet", spicy: 0, protein: "veg", desc: "Vanilla soft-serve, caramel ribbon and toasted nuts.", kcal: 390 },
    { id: "x1", name: "Crave Cola Fizz", cat: "drinks", price: 250, rating: 4.6, reviews: 700, img: "menu/x1.jpg", tag: "Classic", spicy: 0, protein: "veg", desc: "Ice-cold cola over crushed ice with a citrus twist.", kcal: 160 },
    { id: "x2", name: "Mango Chill Cooler", cat: "drinks", price: 350, rating: 4.8, reviews: 430, img: "menu/x2.jpg", tag: "Healthy", spicy: 0, protein: "veg", desc: "Alphonso mango blended with yogurt and mint.", kcal: 210 },
    { id: "x3", name: "Iced Cocoa Storm", cat: "drinks", price: 390, rating: 4.7, reviews: 380, img: "menu/x3.jpg", tag: "Trending", spicy: 0, protein: "veg", desc: "Cold-brew cocoa, milk foam and dark chocolate shavings.", kcal: 280 }
  ];

  var NAV = [
    { href: "index.html", label: "Home" },
    { href: "menu.html", label: "Menu" },
    { href: "ai.html", label: "AI Recommendation" },
    { href: "deals.html", label: "Deals" },
    { href: "about.html", label: "About" },
    { href: "contact.html", label: "Contact" }
  ];

  /* ---------- helpers ---------- */
  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $$(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }
  function money(v) { return "Rs " + v.toLocaleString("en-PK"); }
  function stars(r) {
    var full = Math.round(r);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function toast(msg, ok) {
    var stack = $("#toast-stack");
    if (!stack) { stack = document.createElement("div"); stack.id = "toast-stack"; document.body.appendChild(stack); }
    var el = document.createElement("div");
    el.className = "toast" + (ok ? " toast--ok" : "");
    el.textContent = msg;
    stack.appendChild(el);
    setTimeout(function () { el.style.opacity = "0"; el.style.transform = "translateY(10px)"; }, 2400);
    setTimeout(function () { el.remove(); }, 3000);
  }

  /* ---------- 2. Shell: navigation + footer ---------- */
  function currentPage() {
    var p = location.pathname.split("/").pop();
    return !p || p === "" ? "index.html" : p;
  }

  function buildShell() {
    var page = currentPage();
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.href === page ? ' class="is-active" aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("");

    var header = $("#site-header");
    if (header) {
      header.innerHTML =
        '<nav class="nav" id="nav" aria-label="Primary">' +
          '<div class="container nav__inner">' +
            '<a class="brand" href="index.html" aria-label="CraveHub home">' +
              '<img src="' + IMG + 'logo.png" alt="CraveHub logo" width="38" height="38">' +
              '<span>CraveHub<small>Every bite tells a story</small></span>' +
            "</a>" +
            '<div class="nav__links">' + links + "</div>" +
            '<div class="nav__tools">' +
              '<button class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode">🌙</button>' +
              '<button class="icon-btn" id="cart-btn" aria-label="View cart">🛒<span class="cart-count" id="cart-count">0</span></button>' +
              '<a class="btn btn--primary btn--sm" href="contact.html">Order Now</a>' +
              '<button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">☰</button>' +
            "</div>" +
          "</div>" +
        "</nav>" +
        '<div class="nav__mobile glass" id="nav-mobile">' + links + "</div>";
    }

    var footer = $("#site-footer");
    if (footer) {
      footer.innerHTML =
        '<footer class="footer">' +
          '<div class="container">' +
            '<div class="footer__grid">' +
              "<div>" +
                '<a class="brand" href="index.html"><img src="' + IMG + 'logo.png" alt="" width="38" height="38"><span>CraveHub<small>Every bite tells a story</small></span></a>' +
                '<p style="margin-top:16px;max-width:300px;font-size:0.92rem">Premium fast food crafted with obsessive quality, served fresh across Pakistan since 2015.</p>' +
                '<div class="socials">' +
                  '<a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a>' +
                  '<a href="#" aria-label="TikTok">♪</a><a href="#" aria-label="X">✕</a>' +
                "</div>" +
              "</div>" +
              "<div><h4>Explore</h4><ul>" + NAV.map(function (n) { return "<li><a href=\"" + n.href + "\">" + n.label + "</a></li>"; }).join("") + "</ul></div>" +
              "<div><h4>Company</h4><ul>" +
                '<li><a href="about.html">Our Story</a></li><li><a href="about.html">Careers</a></li>' +
                '<li><a href="deals.html">Loyalty Rewards</a></li><li><a href="deals.html">Gift Cards</a></li>' +
                '<li><a href="contact.html">Franchise</a></li></ul></div>' +
              "<div><h4>Contact</h4><ul>" +
                "<li>📍 45 Food Street, Gulberg III, Lahore</li>" +
                '<li>☎ <a href="tel:+923001234567">+92 300 1234567</a></li>' +
                '<li>✉ <a href="mailto:contact@cravehub.pk">contact@cravehub.pk</a></li>' +
                "<li>🌐 www.cravehub.pk</li>" +
                "<li>🚚 Delivery 10:30 AM – 11:30 PM</li></ul></div>" +
            "</div>" +
            '<div class="footer__bottom"><span>© ' + new Date().getFullYear() + " CraveHub Pakistan. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div>" +
          "</div>" +
        "</footer>";
    }
  }

  /* ---------- 3. Global UI behaviours ---------- */
  /* Loader: dismissed as soon as the shell is painted — no artificial delay */
  function initLoader() {
    var loader = $("#loader");
    if (!loader) return;
    var done = function () { loader.classList.add("is-done"); };
    requestAnimationFrame(done);
    window.addEventListener("load", done);
  }

  /* One rAF-throttled scroll pass drives sticky nav + back-to-top button */
  function initScrollUi() {
    var nav = $("#nav"), top = $("#to-top"), queued = false;
    function paint() {
      queued = false;
      var y = window.scrollY;
      if (nav) nav.classList.toggle("is-stuck", y > 24);
      if (top) top.classList.toggle("is-visible", y > 500);
    }
    paint();
    window.addEventListener("scroll", function () {
      if (!queued) { queued = true; requestAnimationFrame(paint); }
    }, { passive: true });
    if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* Warm up the next page on nav hover/touch so navigation feels instant */
  function initPrefetch() {
    var seen = {};
    document.addEventListener("pointerenter", function (e) {
      var a = e.target.closest && e.target.closest('a[href$=".html"]');
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || seen[href]) return;
      seen[href] = 1;
      var link = document.createElement("link");
      link.rel = "prefetch";
      link.href = href;
      document.head.appendChild(link);
    }, true);
  }

  function initMobileMenu() {
    var burger = $("#burger"), panel = $("#nav-mobile");
    if (!burger || !panel) return;
    burger.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      burger.textContent = open ? "✕" : "☰";
    });
    $$("a", panel).forEach(function (a) {
      a.addEventListener("click", function () { panel.classList.remove("is-open"); burger.textContent = "☰"; });
    });
  }

  function initTheme() {
    var btn = $("#theme-toggle");
    var saved = localStorage.getItem("ch-theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
    if (btn) {
      btn.textContent = saved === "dark" ? "☀️" : "🌙";
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("ch-theme", next);
        btn.textContent = next === "dark" ? "☀️" : "🌙";
      });
    }
  }

  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach(function (i) { i.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" });
    items.forEach(function (i) { io.observe(i); });
  }

  function initCounters() {
    var nodes = $$("[data-count]");
    if (!nodes.length) return;
    var run = function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1600, start = performance.now();
      var step = function (now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = target * eased;
        el.textContent = (target % 1 ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* Ripple fires on pointerdown so buttons react instantly to a press */
  function initRipple() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.addEventListener("pointerdown", function (e) {
      var btn = e.target.closest(".btn, .filter, .opt");
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var span = document.createElement("span");
      span.className = "ripple";
      span.style.width = span.style.height = size + "px";
      span.style.left = e.clientX - rect.left - size / 2 + "px";
      span.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(span);
      setTimeout(function () { span.remove(); }, 660);
    }, { passive: true });
  }

  /* ---------- 3b. Shopping cart (localStorage) ---------- */
  var CART_KEY = "ch-cart-v2";

  function cartGet() {
    try {
      var raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(raw) ? raw.filter(function (l) { return l && l.name; }) : [];
    } catch (err) { return []; }
  }
  function cartSave(lines) {
    localStorage.setItem(CART_KEY, JSON.stringify(lines));
    renderCartBadge();
    renderCartPage();
  }
  function cartCount() {
    return cartGet().reduce(function (n, l) { return n + (parseInt(l.qty, 10) || 0); }, 0);
  }
  function cartTotal() {
    return cartGet().reduce(function (n, l) { return n + (l.price || 0) * (parseInt(l.qty, 10) || 0); }, 0);
  }
  function renderCartBadge() {
    var el = $("#cart-count");
    if (!el) return;
    el.textContent = String(cartCount());
  }
  function badgePop() {
    var el = $("#cart-count");
    if (el) { el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); }
  }

  /* Resolve a clicked [data-add] button into a cart line */
  function lineFromButton(btn) {
    var name = btn.getAttribute("data-add");
    var id = btn.getAttribute("data-id");
    var match = MENU.filter(function (m) { return m.id === id || m.name === name; })[0];
    if (match) return { id: match.id, name: match.name, price: match.price, img: IMG + match.img };
    var price = parseInt(btn.getAttribute("data-price") || "0", 10) || 0;
    var img = btn.getAttribute("data-img") || (IMG + "menu/b1.jpg");
    return { id: id || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name: name, price: price, img: img.indexOf("/") === 0 ? img : IMG + img };
  }

  function cartAdd(line, qty) {
    var lines = cartGet();
    var existing = lines.filter(function (l) { return l.id === line.id; })[0];
    if (existing) existing.qty = (parseInt(existing.qty, 10) || 0) + (qty || 1);
    else lines.push({ id: line.id, name: line.name, price: line.price, img: line.img, qty: qty || 1 });
    cartSave(lines);
    badgePop();
    toast(line.name + " added to cart", true);
  }
  function cartSetQty(id, delta) {
    var lines = cartGet();
    lines.forEach(function (l) { if (l.id === id) l.qty = (parseInt(l.qty, 10) || 1) + delta; });
    cartSave(lines.filter(function (l) { return l.qty > 0; }));
  }
  function cartRemove(id) {
    cartSave(cartGet().filter(function (l) { return l.id !== id; }));
  }

  function renderCartPage() {
    var wrap = $("#cart-root");
    if (!wrap) return;
    var lines = cartGet();
    if (!lines.length) {
      wrap.innerHTML =
        '<div class="empty-state reveal">' +
          "<h3>Your cart is empty</h3>" +
          "<p>Nothing here yet — explore the menu and add something crave-worthy.</p>" +
          '<a class="btn btn--primary" style="margin-top:18px" href="menu.html">Browse the menu</a>' +
        "</div>";
      initReveal();
      return;
    }
    var total = cartTotal();
    wrap.innerHTML =
      '<div class="cart-layout">' +
        '<div class="cart-lines">' +
          lines.map(function (l) {
            return (
              '<article class="card cart-line reveal" data-line="' + esc(l.id) + '">' +
                '<img src="' + esc(l.img) + '" alt="' + esc(l.name) + '" loading="lazy" decoding="async" width="120" height="120">' +
                '<div class="cart-line__info">' +
                  "<h3>" + esc(l.name) + "</h3>" +
                  '<span class="form-note">' + money(l.price) + " each</span>" +
                  '<div class="qty" role="group" aria-label="Quantity for ' + esc(l.name) + '">' +
                    '<button class="icon-btn" data-qty="-1" aria-label="Decrease quantity">−</button>' +
                    "<b>" + l.qty + "</b>" +
                    '<button class="icon-btn" data-qty="1" aria-label="Increase quantity">+</button>' +
                  "</div>" +
                "</div>" +
                '<div class="cart-line__end">' +
                  '<span class="price">' + money(l.price * l.qty) + "</span>" +
                  '<button class="btn btn--ghost btn--sm" data-remove aria-label="Remove ' + esc(l.name) + '">Remove</button>' +
                "</div>" +
              "</article>"
            );
          }).join("") +
        "</div>" +
        '<aside class="card cart-summary reveal" data-delay="1">' +
          "<h3>Order summary</h3>" +
          '<div class="hours-row"><span>Items</span><b>' + cartCount() + "</b></div>" +
          '<div class="hours-row"><span>Subtotal</span><b>' + money(total) + "</b></div>" +
          '<div class="hours-row"><span>Delivery</span><b>' + (total >= 1500 ? "Free" : money(149)) + "</b></div>" +
          '<div class="hours-row cart-summary__total"><span>Total</span><b>' + money(total >= 1500 ? total : total + 149) + "</b></div>" +
          '<button class="btn btn--primary btn--block" id="cart-checkout" style="margin-top:16px">Checkout</button>' +
          '<a class="btn btn--ghost btn--block" style="margin-top:10px" href="menu.html">Continue Shopping</a>' +
          '<button class="btn btn--ghost btn--block" id="cart-clear" style="margin-top:10px">Clear Cart</button>' +
        "</aside>" +
      "</div>";
    initReveal();
  }

  function initCart() {
    renderCartBadge();
    renderCartPage();

    var btn = $("#cart-btn");
    if (btn) btn.addEventListener("click", function () { location.href = "cart.html"; });

    document.addEventListener("click", function (e) {
      var add = e.target.closest("[data-add]");
      if (add) { cartAdd(lineFromButton(add)); return; }

      var line = e.target.closest("[data-line]");
      if (line) {
        var id = line.getAttribute("data-line");
        var q = e.target.closest("[data-qty]");
        if (q) { cartSetQty(id, parseInt(q.getAttribute("data-qty"), 10)); return; }
        if (e.target.closest("[data-remove]")) { cartRemove(id); toast("Item removed from cart"); return; }
      }

      if (e.target.closest("#cart-clear")) { cartSave([]); toast("Cart cleared"); return; }
      if (e.target.closest("#cart-checkout")) { checkout(); }
    });
  }

  /* Checkout: hand the order over to the Contact page form. */
  var ORDER_KEY = "cravehub_pending_order";

  function orderSummaryText() {
    var lines = cartGet();
    var sub = cartTotal();
    var delivery = sub >= 1500 ? 0 : 149;
    var body = ["Hi CraveHub team, I'd like to place this order:", ""];
    lines.forEach(function (l) {
      var qty = parseInt(l.qty, 10) || 0;
      body.push("• " + qty + " × " + l.name + " — " + money((l.price || 0) * qty));
    });
    body.push("");
    body.push("Subtotal: " + money(sub));
    body.push("Delivery: " + (delivery ? money(delivery) : "Free"));
    body.push("Order total: " + money(sub + delivery));
    body.push("");
    body.push("Preferred delivery address / time: ");
    return body.join("\n");
  }

  function checkout() {
    if (!cartCount()) { toast("Your cart is empty — add something delicious first."); return; }
    try { sessionStorage.setItem(ORDER_KEY, orderSummaryText()); } catch (err) { /* storage blocked */ }
    toast("Taking you to checkout details…", true);
    location.href = "contact.html#contact-form";
  }

  /* On the Contact page: prefill the order, scroll to the form, focus it. */
  function initCheckoutHandoff() {
    var form = $("#contact-form");
    if (!form) return;

    var pending = "";
    try { pending = sessionStorage.getItem(ORDER_KEY) || ""; } catch (err) { pending = ""; }
    var wantsForm = pending || location.hash === "#contact-form";
    if (!wantsForm) return;

    if (pending) {
      try { sessionStorage.removeItem(ORDER_KEY); } catch (err) { /* noop */ }
      var msg = $("#cf-msg"), topic = $("#cf-topic");
      if (msg && !msg.value.trim()) msg.value = pending;
      if (topic) {
        for (var i = 0; i < topic.options.length; i++) {
          if (/order/i.test(topic.options[i].text)) { topic.selectedIndex = i; break; }
        }
      }
    }

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(function () {
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"), 10) || 76;
      var top = form.getBoundingClientRect().top + window.pageYOffset - navH - 20;
      window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? "auto" : "smooth" });
      var first = $("#cf-name");
      if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, reduce ? 0 : 600);
      if (pending) toast("Order details added — just confirm and send.", true);
    });
  }



  /* Accordions & sliders (shared) */
  function initFaq() {
    $$(".faq__item").forEach(function (item) {
      var q = $(".faq__q", item), a = $(".faq__a", item);
      if (!q || !a) return;
      q.setAttribute("aria-expanded", "false");
      q.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", String(open));
        a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
      });
    });
  }

  function initSlider() {
    var slider = $("#testimonials");
    if (!slider) return;
    var track = $(".slider__track", slider);
    var slides = $$(".slide", track);
    var dotsWrap = $("#slider-dots");
    var index = 0, timer;
    slides.forEach(function (_, i) {
      var d = document.createElement("button");
      d.className = "dot" + (i === 0 ? " is-active" : "");
      d.setAttribute("aria-label", "Go to review " + (i + 1));
      d.addEventListener("click", function () { go(i); restart(); });
      dotsWrap.appendChild(d);
    });
    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      $$(".dot", dotsWrap).forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(index + 1); }, 5200); }
    restart();
    slider.addEventListener("mouseenter", function () { clearInterval(timer); });
    slider.addEventListener("mouseleave", restart);
  }

  /* ---------- 4. Menu page ---------- */
  function cardHTML(item) {
    return (
      '<article class="card food-card reveal" data-cat="' + item.cat + '" data-name="' + esc(item.name.toLowerCase()) + '">' +
        '<div class="food-card__media">' +
          '<span class="chip food-card__tag' + (item.tag === "Spicy" ? " chip--hot" : "") + '">' + item.tag + "</span>" +
          '<img src="' + IMG + item.img + '" alt="' + esc(item.name) + '" loading="lazy" decoding="async" width="640" height="640">' +
          '<div class="food-card__quick"><button class="btn btn--glass btn--sm btn--block" data-quick="' + item.id + '">Quick View</button></div>' +
        "</div>" +
        '<div class="food-card__body">' +
          '<div class="food-card__top"><h3>' + esc(item.name) + '</h3><span class="price">' + money(item.price) + "</span></div>" +
          '<div class="stars">' + stars(item.rating) + "<span>" + item.rating.toFixed(1) + " (" + item.reviews + ")</span></div>" +
          '<p class="food-card__desc">' + esc(item.desc) + "</p>" +
          '<button class="btn btn--primary btn--sm btn--block" data-id="' + item.id + '" data-add="' + esc(item.name) + '">Add to Cart</button>' +
        "</div>" +
      "</article>"
    );
  }

  function renderList(target, items) {
    var wrap = $(target);
    if (!wrap) return;
    wrap.innerHTML = items.length
      ? items.map(cardHTML).join("")
      : '<div class="empty-state"><h3>No dishes found</h3><p>Try another category or search term.</p></div>';
    initReveal();
  }

  function initFeatured() {
    var ids = ["b1", "p1", "c1", "f1", "w1", "d1"];
    var picks = MENU.filter(function (m) { return ids.indexOf(m.id) > -1; });
    if ($("#featured-grid")) renderList("#featured-grid", picks);
    if ($("#chef-grid")) renderList("#chef-grid", MENU.filter(function (m) { return m.tag === "Chef's Pick" || m.tag === "Trending"; }));
    if ($("#healthy-grid")) renderList("#healthy-grid", MENU.filter(function (m) { return m.tag === "Healthy"; }));
  }

  function initMenuPage() {
    var grid = $("#menu-grid");
    if (!grid) return;
    var state = { cat: "all", q: "" };
    function apply() {
      var list = MENU.filter(function (m) {
        var okCat = state.cat === "all" || m.cat === state.cat;
        var okQ = !state.q || (m.name + " " + m.desc + " " + m.cat).toLowerCase().indexOf(state.q) > -1;
        return okCat && okQ;
      });
      renderList("#menu-grid", list);
      var count = $("#result-count");
      if (count) count.textContent = list.length + " item" + (list.length === 1 ? "" : "s");
    }
    $$(".filter").forEach(function (f) {
      f.addEventListener("click", function () {
        $$(".filter").forEach(function (x) { x.classList.remove("is-active"); });
        f.classList.add("is-active");
        state.cat = f.getAttribute("data-filter");
        apply();
      });
    });
    var search = $("#menu-search");
    if (search) search.addEventListener("input", function () { state.q = search.value.trim().toLowerCase(); apply(); });
    apply();
  }

  function initQuickView() {
    var modal = $("#quick-modal");
    if (!modal) return;
    var box = $("#quick-body");
    function open(item) {
      box.innerHTML =
        '<img src="' + IMG + item.img + '" alt="' + esc(item.name) + '" loading="lazy" decoding="async" width="640" height="640">' +
        '<div class="modal__body">' +
          '<span class="chip">' + item.tag + "</span>" +
          "<h3>" + esc(item.name) + "</h3>" +
          '<div class="stars">' + stars(item.rating) + "<span>" + item.rating.toFixed(1) + "</span></div>" +
          "<p style=\"color:var(--text-soft);font-size:0.93rem\">" + esc(item.desc) + "</p>" +
          '<div class="nutri"><span>' + item.kcal + " kcal</span><span>Spice " + item.spicy + "/3</span><span>" + item.protein + "</span></div>" +
          '<div class="food-card__top"><span class="price" style="font-size:1.5rem">' + money(item.price) + "</span></div>" +
          '<button class="btn btn--primary btn--block" data-id="' + item.id + '" data-add="' + esc(item.name) + '">Add to Cart</button>' +
        "</div>";
      modal.classList.add("is-open");
    }
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-quick]");
      if (t) {
        var item = MENU.filter(function (m) { return m.id === t.getAttribute("data-quick"); })[0];
        if (item) open(item);
      }
      if (e.target.closest("[data-close-modal]") || e.target === modal) modal.classList.remove("is-open");
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") modal.classList.remove("is-open"); });
  }

  /* ---------- 5. CraveBot recommendation engine ---------- */
  function initAiPage() {
    var form = $("#ai-form");
    if (!form) return;
    var prefs = { protein: "chicken", spice: "1", budget: 1200, hunger: "2", drink: "yes" };

    $$("[data-group]", form).forEach(function (group) {
      $$(".opt", group).forEach(function (opt) {
        opt.addEventListener("click", function () {
          $$(".opt", group).forEach(function (o) { o.classList.remove("is-active"); o.setAttribute("aria-pressed", "false"); });
          opt.classList.add("is-active");
          opt.setAttribute("aria-pressed", "true");
          prefs[group.getAttribute("data-group")] = opt.getAttribute("data-value");
        });
      });
    });

    var budget = $("#budget"), budgetOut = $("#budget-out");
    budget.addEventListener("input", function () {
      prefs.budget = parseInt(budget.value, 10);
      budgetOut.textContent = money(prefs.budget);
    });
    budgetOut.textContent = money(prefs.budget);

    function score(item) {
      var s = 0, why = [];
      if (item.protein === prefs.protein) { s += 34; why.push("Matches your " + prefs.protein + " preference."); }
      else if (prefs.protein === "any") { s += 18; why.push("Open protein choice — this one is a crowd favourite."); }
      var spice = parseInt(prefs.spice, 10);
      var diff = Math.abs(item.spicy - spice);
      s += Math.max(0, 26 - diff * 10);
      if (diff === 0) why.push("Spice level " + item.spicy + "/3 is exactly what you asked for.");
      if (item.price <= prefs.budget) { s += 20; why.push("Comfortably inside your " + money(prefs.budget) + " budget."); }
      else { s -= 22; }
      var hunger = parseInt(prefs.hunger, 10);
      var wantKcal = hunger === 1 ? 400 : hunger === 2 ? 650 : 900;
      s += Math.max(0, 20 - Math.abs(item.kcal - wantKcal) / 22);
      if (Math.abs(item.kcal - wantKcal) < 150) why.push("Portion size (" + item.kcal + " kcal) fits how hungry you are.");
      s += (item.rating - 4.4) * 12;
      if (item.rating >= 4.8) why.push("Rated " + item.rating.toFixed(1) + "★ by " + item.reviews + " CraveHub guests.");
      return { score: s, why: why };
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pool = MENU.filter(function (m) { return m.cat !== "drinks"; });
      var ranked = pool.map(function (m) {
        var r = score(m);
        return { item: m, score: r.score, why: r.why };
      }).sort(function (a, b) { return b.score - a.score; });

      var best = ranked[0];
      var sides = ranked.slice(1, 3).map(function (r) { return r.item; });
      var drink = prefs.drink === "yes" ? MENU.filter(function (m) { return m.cat === "drinks"; }).sort(function (a, b) { return b.rating - a.rating; })[0] : null;
      var total = best.item.price + (drink ? drink.price : 0);
      var match = Math.max(72, Math.min(99, Math.round(best.score)));

      var out = $("#ai-result");
      out.innerHTML =
        '<div class="card result-card glass">' +
          '<img src="' + IMG + best.item.img + '" alt="' + esc(best.item.name) + '" loading="lazy" decoding="async" width="640" height="640">' +
          '<div class="result-card__body">' +
            '<span class="chip">CraveBot match ' + match + "%</span>" +
            "<h3>" + esc(best.item.name) + "</h3>" +
            '<div class="match-bar"><i></i></div>' +
            "<p style=\"color:var(--text-soft);font-size:0.94rem\">" + esc(best.item.desc) + "</p>" +
            "<h4 style=\"font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--primary)\">Why this meal</h4>" +
            '<ul class="reason-list">' + best.why.slice(0, 4).map(function (w) { return "<li>" + esc(w) + "</li>"; }).join("") + "</ul>" +
            (drink ? '<p class="form-note">Paired drink: <strong>' + esc(drink.name) + "</strong> (" + money(drink.price) + ")</p>" : "") +
            '<p class="form-note">Also worth trying: ' + sides.map(function (s) { return esc(s.name); }).join(" · ") + "</p>" +
            '<div class="food-card__top"><span class="price" style="font-size:1.6rem">' + money(total) + '</span><button class="btn btn--primary" data-id="' + best.item.id + '" data-add="' + esc(best.item.name) + '">Add meal to cart</button></div>' +
          "</div>" +
        "</div>";
      out.classList.add("is-visible");
      setTimeout(function () { var bar = $(".match-bar i", out); if (bar) bar.style.width = match + "%"; }, 80);
      out.scrollIntoView({ behavior: "smooth", block: "center" });
      initReveal();
    });
  }

  /* ---------- 6. Countdown timers ---------- */
  function initCountdowns() {
    var nodes = $$("[data-countdown]");
    if (!nodes.length) return;
    var targets = nodes.map(function (n) {
      var hours = parseFloat(n.getAttribute("data-countdown"));
      return { el: n, end: Date.now() + hours * 3600 * 1000 };
    });
    function pad(v) { return String(v).padStart(2, "0"); }
    function tick() {
      targets.forEach(function (t) {
        var diff = Math.max(0, t.end - Date.now());
        var d = Math.floor(diff / 86400000);
        var h = Math.floor((diff % 86400000) / 3600000);
        var m = Math.floor((diff % 3600000) / 60000);
        var s = Math.floor((diff % 60000) / 1000);
        t.el.innerHTML =
          "<div><b>" + pad(d) + "</b><small>Days</small></div>" +
          "<div><b>" + pad(h) + "</b><small>Hrs</small></div>" +
          "<div><b>" + pad(m) + "</b><small>Min</small></div>" +
          "<div><b>" + pad(s) + "</b><small>Sec</small></div>";
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- 7. Forms & validation ---------- */
  function setError(input, msg) {
    var holder = input.parentElement.querySelector(".error-msg");
    if (holder) holder.textContent = msg || "";
    input.classList.toggle("is-invalid", !!msg);
    return !msg;
  }

  function showOrderSuccess() {
    var modal = document.createElement("div");
    modal.className = "modal modal--order";
    modal.innerHTML =
      '<div class="modal__box"><div class="order-ok">' +
        '<span class="order-ok__mark">✅</span>' +
        "<h3>Order Placed Successfully!</h3>" +
        "<p>Thank you for choosing CraveHub. Your order has been received successfully. Our team will contact you shortly to confirm your order.</p>" +
      "</div></div>";
    document.body.appendChild(modal);
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    setTimeout(function () { location.href = "index.html"; }, 2600);
  }

  function initContactForm() {
    var form = $("#contact-form");
    if (!form) return;
    form.setAttribute("novalidate", "novalidate");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#cf-name"), email = $("#cf-email"), phone = $("#cf-phone"), msg = $("#cf-msg");
      var ok = true;
      ok = setError(name, name.value.trim().length < 2 ? "Please enter your full name." : "") && ok;
      ok = setError(email, /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email.value.trim()) ? "" : "Enter a valid email address.") && ok;
      ok = setError(phone, phone.value.trim() && !/^[+0-9\s-]{7,}$/.test(phone.value.trim()) ? "Enter a valid phone number." : "") && ok;
      ok = setError(msg, msg.value.trim().length < 10 ? "Tell us a little more (10+ characters)." : "") && ok;
      if (!ok) { toast("Please fix the highlighted fields."); return; }
      cartSave([]);
      form.reset();
      showOrderSuccess();
    });
  }

  function initNewsletters() {
    $$(".newsletter-form").forEach(function (form) {
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = form.querySelector("input[type=email]");
        if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(input.value.trim())) {
          input.classList.add("is-invalid");
          toast("Please enter a valid email address.");
          return;
        }
        input.classList.remove("is-invalid");
        form.reset();
        toast("You're subscribed — welcome to the CraveHub club!", true);
      });
    });
  }

  /* ---------- 8. Boot ---------- */
  function boot() {
    buildShell();
    initTheme();
    initLoader();
    initScrollUi();
    initMobileMenu();
    initRipple();
    initPrefetch();
    initCart();
    initFeatured();
    initMenuPage();
    initQuickView();
    initAiPage();
    initCountdowns();
    initContactForm();
    initCheckoutHandoff();

    initNewsletters();
    initFaq();
    initSlider();
    initCounters();
    initReveal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
