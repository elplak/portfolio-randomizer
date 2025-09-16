const slogans = [
    "Build faster with style",
    "Everything is possible with our tool",
    "Simple, fast, genius",
    "Design at the push of a button",
    "Frontend as a Service",
    "Beautiful. Fast. Smart."
];

const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Praesent commodo cursus magna, vel scelerisque nisl.",
    "Integer posuere erat a ante venenatis dapibus.",
    "Aenean lacinia bibendum nulla sed consectetur."
];

const themes = [
    {
        bg: "#ffffff",
        text: "#111827",
        primary: "#2563eb",
        secondary: "#1e40af",
        font: "'Inter', sans-serif",
        radius: "12px",
        shadow: "0 4px 16px rgba(0,0,0,0.06)"
    },
    {
        bg: "#f8f9fa",
        text: "#1f2937",
        primary: "#0d9488",
        secondary: "#115e59",
        font: "'Poppins', sans-serif",
        radius: "16px",
        shadow: "0 6px 20px rgba(0,0,0,0.08)"
    },
    {
        bg: "#fafafa",
        text: "#1a1a1a",
        primary: "#f59e0b",
        secondary: "#b45309",
        font: "'Outfit', sans-serif",
        radius: "20px",
        shadow: "0 8px 24px rgba(0,0,0,0.1)"
    },
    {
        bg: "#1a1a1a",
        text: "#f3f4f6",
        primary: "#e11d48",
        secondary: "#9f1239",
        font: "'Roboto Slab', serif",
        radius: "10px",
        shadow: "0 8px 20px rgba(0,0,0,0.4)"
    }
];

const effects = [
    {
        hero: "effect-hero-spin",
        card: "effect-glass",
        gallery: "effect-tilt",
        button: "effect-glow"
    },
    {
        hero: "effect-hero-gradient",
        card: "effect-lift",
        gallery: "effect-zoom",
        button: "effect-outline"
    },
    {
        hero: "effect-hero-parallax",
        card: "effect-shadow",
        gallery: "effect-rotate",
        button: "effect-bounce"
    }
];

function applyRandomDesign() {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.setProperty("--primary", theme.primary);
    document.body.style.setProperty("--secondary", theme.secondary);
    document.body.style.setProperty("--bg", theme.bg);
    document.body.style.setProperty("--text", theme.text);
    document.body.style.fontFamily = theme.font;
    document.body.style.setProperty("--radius", theme.radius);
    document.body.style.setProperty("--shadow", theme.shadow);
    document.body.style.setProperty("--section-bg", theme.bg);
    document.body.style.setProperty("--section-text", theme.text);
    document.body.style.setProperty("--card-bg", theme.bg);
    document.body.style.setProperty("--card-text", theme.text);
}

function applyRandomEffects() {
    const effect = effects[Math.floor(Math.random() * effects.length)];
    document.body.className = "";
    document.body.classList.add(effect.hero, effect.card, effect.gallery, effect.button);
}

const components = {
    hero: [
        () => `<section class="hero center">
      <h1>${slogans[Math.floor(Math.random() * slogans.length)]}</h1>
      <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
      <a href="#" class="btn">Learn more</a>
    </section>`,
        () => `<section class="hero split">
      <div>
        <h1>Portfolio 2025</h1>
        <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
        <a href="#" class="btn">Discover</a>
      </div>
      <img src="https://picsum.photos/600/400?random=${Math.random()}" alt="Hero">
    </section>`,
        () => `<section class="hero full-bg" style="background-image:url('https://picsum.photos/1200/400?random=${Math.random()}')">
      <h1>Creative Works</h1>
    </section>`
    ],
    about: [
        () => `<section class="about img-left">
      <img src="https://picsum.photos/400/300?random=${Math.random()}" alt="About">
      <div>
        <h2>Who I am</h2>
        <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
      </div>
    </section>`
    ],
    gallery: [
        () => `<section class="gallery grid">
      ${Array.from({length: 6}).map(() => `
        <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Gallery">
      `).join("")}
    </section>`
    ],
    testimonials: [
        () => `<section class="testimonials">
      <blockquote>"${texts[Math.floor(Math.random() * texts.length)]}" <span>- Person A</span></blockquote>
      <blockquote>"${texts[Math.floor(Math.random() * texts.length)]}" <span>- Person B</span></blockquote>
    </section>`
    ],
    pricing: [
        () => `<section class="pricing">
      <div class="card"><h3>Basic</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p><strong>19€</strong></div>
      <div class="card featured"><h3>Pro</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p><strong>49€</strong></div>
      <div class="card"><h3>Enterprise</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p><strong>99€</strong></div>
    </section>`
    ],
    contact: [
        () => `<section class="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button class="btn">Send</button>
      </form>
    </section>`
    ],
    features: [
        () => `<section class="features">
      <div class="card"><h3>Feature A</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p></div>
      <div class="card"><h3>Feature B</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p></div>
      <div class="card"><h3>Feature C</h3><p>${texts[Math.floor(Math.random() * texts.length)]}</p></div>
    </section>`
    ],
    cards: [
        () => `<section class="cards">
      ${Array.from({length: 3}).map(() => `
        <div class="card">
          <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Card">
          <h3>Card</h3>
          <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
        </div>`).join("")}
    </section>`
    ],
    blog: [
        () => `<section class="blog">
      ${Array.from({length: 2}).map(() => `
        <article class="card">
          <h3>Blog Post</h3>
          <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
          <a href="#" class="btn small">Read more</a>
        </article>`).join("")}
    </section>`
    ],
    shop: [
        () => `<section class="shop">
      ${Array.from({length: 3}).map(() => `
        <div class="card">
          <img src="https://picsum.photos/250/200?random=${Math.random()}" alt="Product">
          <h3>Product</h3>
          <strong>${Math.floor(Math.random() * 90 + 10)} €</strong>
          <button class="btn">Buy</button>
        </div>`).join("")}
    </section>`
    ]
};

function getSelectedSections() {
    return Array.from(document.querySelectorAll('.controls input[type="checkbox"]:checked'))
        .map(cb => cb.value);
}

function generate() {
    let html = "";
    const selected = shuffle(getSelectedSections());

    if (selected.includes("hero")) {
        const hero = components.hero[Math.floor(Math.random() * components.hero.length)];
        html += hero();
    }

    ["about", "features", "cards", "gallery", "testimonials", "blog", "shop", "pricing"].forEach(sec => {
        if (selected.includes(sec) && components[sec]) {
            const comp = components[sec][Math.floor(Math.random() * components[sec].length)];
            html += comp();
        }
    });

    if (components.contact) {
        const contact = components.contact[Math.floor(Math.random() * components.contact.length)];
        html += contact();
    }

    const layouts = ["container narrow", "container wide", "container boxed"];
    const mainEl = document.querySelector("main.container");
    if (mainEl) {
        mainEl.className = layouts[Math.floor(Math.random() * layouts.length)];
    }

    document.getElementById("app").innerHTML = html;
    applyRandomDesign();
    applyRandomEffects();
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
