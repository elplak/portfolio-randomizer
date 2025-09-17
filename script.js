const slogans = [
    "Build faster with style",
    "Everything is possible with our tool",
    "Simple, fast, genius",
    "Design at the push of a button",
    "Frontend as a Service",
    "Beautiful. Fast. Smart.",
    "Where creativity meets code",
    "Next-level design automation",
    "Elegant websites in seconds"
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
    },
    {
        bg: "#fef3c7",
        text: "#78350f",
        primary: "#d97706",
        secondary: "#92400e",
        font: "'Merriweather', serif",
        radius: "14px",
        shadow: "0 6px 18px rgba(0,0,0,0.15)"
    },
    {
        bg: "#0f172a",
        text: "#e2e8f0",
        primary: "#38bdf8",
        secondary: "#0284c7",
        font: "'Fira Sans', sans-serif",
        radius: "18px",
        shadow: "0 10px 28px rgba(0,0,0,0.6)"
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
    },
    {
        hero: "effect-hero-diagonal",
        card: "effect-border",
        gallery: "effect-grayscale",
        button: "effect-pulse"
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

async function getLoremCached(paragraphs = 1) {
    if (!window._loremCache) {
        try {
            const url = `https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text`;
            const res = await fetch(url);
            if (res.ok) {
                window._loremCache = (await res.text()).split("\n");
            }
        } catch (err) {
            console.warn("Bacon Ipsum API failed. Using fallback", err);
            window._loremCache = [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent commodo cursus magna.",
                "Donec ullamcorper nulla non metus auctor fringilla."
            ];
        }
    }
    return window._loremCache.slice(0, paragraphs).join(" ");
}

const components = {
    hero: [
        async () => `<section class="hero center">
      <h1>${slogans[Math.floor(Math.random() * slogans.length)]}</h1>
      <p>${await getLoremCached(1)}</p>
      <a href="#" class="btn">Learn more</a>
    </section>`,
        async () => `<section class="hero split">
      <div>
        <h1>Portfolio ${Math.floor(Math.random() * 2050)}</h1>
        <p>${await getLoremCached(1)}</p>
        <a href="#" class="btn">Discover</a>
      </div>
      <img src="https://picsum.photos/600/400?random=${Math.random()}" alt="Hero">
    </section>`,
        async () => `<section class="hero full-bg" style="background-image:url('https://picsum.photos/1200/400?random=${Math.random()}')">
      <h1>${slogans[Math.floor(Math.random() * slogans.length)]}</h1>
    </section>`
    ],
    about: [
        async () => `<section class="about img-left">
      <img src="https://picsum.photos/400/300?random=${Math.random()}" alt="About">
      <div>
        <h2>Who I am</h2>
        <p>${await getLoremCached(2)}</p>
      </div>
    </section>`,
        async () => `<section class="about simple">
      <h2>About Me</h2>
      <p>${await getLoremCached(2)}</p>
    </section>`
    ],
    features: [
        async () => `<section class="features">
      ${await Promise.all(Array.from({length: 4}).map(async (_, i) => `
        <div class="card">
          <h3>Feature ${String.fromCharCode(65+i)}</h3>
          <p>${await getLoremCached(1)}</p>
        </div>
      `)).then(arr => arr.join(""))}
    </section>`
    ],
    cards: [
        async () => `<section class="cards grid">
      ${await Promise.all(Array.from({length: 3}).map(async () => `
        <div class="card">
          <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Card">
          <h3>Card</h3>
          <p>${await getLoremCached(1)}</p>
        </div>
      `)).then(arr => arr.join(""))}
    </section>`
    ],
    gallery: [
        async () => `<section class="gallery grid">
      ${Array.from({length: 6}).map(() => `
        <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Gallery">
      `).join("")}
    </section>`,
        async () => `<section class="gallery carousel">
      ${Array.from({length: 5}).map(() => `
        <div><img src="https://picsum.photos/400/250?random=${Math.random()}" alt="Gallery"></div>
      `).join("")}
    </section>`
    ],
    testimonials: [
        async () => `<section class="testimonials">
      <blockquote>"${await getLoremCached(1)}" <span>- Alex</span></blockquote>
      <blockquote>"${await getLoremCached(1)}" <span>- Jamie</span></blockquote>
    </section>`,
        async () => `<section class="testimonials grid">
      ${await Promise.all(Array.from({length: 3}).map(async (_, i) => `
        <blockquote>"${await getLoremCached(1)}" <span>- Person ${i+1}</span></blockquote>
      `)).then(arr => arr.join(""))}
    </section>`
    ],
    pricing: [
        async () => `<section class="pricing grid">
      <div class="card">
        <h3>Basic</h3>
        <strong>19€</strong>
        <ul>
          <li>${await getLoremCached(1)}</li>
          <li>${await getLoremCached(1)}</li>
        </ul>
        <a href="#" class="btn small">Choose</a>
      </div>
      <div class="card featured">
        <h3>Pro</h3>
        <strong>49€</strong>
        <ul>
          <li>${await getLoremCached(1)}</li>
          <li>${await getLoremCached(1)}</li>
          <li>${await getLoremCached(1)}</li>
        </ul>
        <a href="#" class="btn small">Choose</a>
      </div>
      <div class="card">
        <h3>Enterprise</h3>
        <strong>99€</strong>
        <ul>
          <li>${await getLoremCached(1)}</li>
          <li>${await getLoremCached(1)}</li>
        </ul>
        <a href="#" class="btn small">Choose</a>
      </div>
    </section>`
    ],
    contact: [
        async () => `<section class="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button class="btn">Send</button>
      </form>
    </section>`
    ]
};

function shuffle(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function getSelectedSections() {
    return Array.from(document.querySelectorAll('.controls input[type="checkbox"]:checked'))
        .map(cb => cb.value);
}

async function generate() {
    let html = "";
    const selected = shuffle(getSelectedSections());

    if (selected.includes("hero")) {
        const hero = components.hero[Math.floor(Math.random() * components.hero.length)];
        html += await hero();
    }

    for (const sec of ["about", "features", "cards", "gallery", "testimonials", "pricing"]) {
        if (selected.includes(sec) && components[sec]) {
            const comp = components[sec][Math.floor(Math.random() * components[sec].length)];
            html += await comp();
        }
    }

    if (components.contact) {
        const contact = components.contact[Math.floor(Math.random() * components.contact.length)];
        html += await contact();
    }

    const layouts = ["container narrow", "container wide", "container boxed", "container fluid"];
    const mainEl = document.querySelector("main.container");
    if (mainEl) {
        mainEl.className = layouts[Math.floor(Math.random() * layouts.length)];
    }

    document.getElementById("app").innerHTML = html;
    applyRandomDesign();
    applyRandomEffects();
}
