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
        bg: "#ffffff", text: "#1a1a1a", primary: "#2563eb", secondary: "#1d4ed8",
        font: "'Poppins', sans-serif",
        sectionBg: "#f9fafb", sectionText: "#111",
        cardBg: "#fff", cardText: "#1a1a1a"
    },
    {
        bg: "#0f172a", text: "#e2e8f0", primary: "#9333ea", secondary: "#6b21a8",
        font: "'Roboto Slab', serif",
        sectionBg: "#1e293b", sectionText: "#e2e8f0",
        cardBg: "#1e293b", cardText: "#e2e8f0"
    },
    {
        bg: "#f9fafb", text: "#111", primary: "#f59e0b", secondary: "#d97706",
        font: "'Inter', sans-serif",
        sectionBg: "#fff", sectionText: "#111",
        cardBg: "#fff", cardText: "#111"
    }
];

function applyRandomDesign() {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.setProperty("--primary", theme.primary);
    document.body.style.setProperty("--secondary", theme.secondary);
    document.body.style.setProperty("--bg", theme.bg);
    document.body.style.setProperty("--text", theme.text);
    document.body.style.setProperty("--radius", "14px");
    document.body.style.setProperty("--shadow", "0 8px 24px rgba(0,0,0,0.08)");
    document.body.style.fontFamily = theme.font;
    document.body.style.setProperty("--section-bg", theme.sectionBg);
    document.body.style.setProperty("--section-text", theme.sectionText);
    document.body.style.setProperty("--card-bg", theme.cardBg);
    document.body.style.setProperty("--card-text", theme.cardText);
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
        () => `<section class="about">
      <h2>About me</h2>
      <p>${texts[Math.floor(Math.random() * texts.length)]}</p>
    </section>`,
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
    const selected = getSelectedSections();

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

    document.getElementById("app").innerHTML = html;
    applyRandomDesign();
}