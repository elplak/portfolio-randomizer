import { getLoremCached } from "./lorem.js";

export const slogans = [
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

export const components = {
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
      ${await Promise.all(Array.from({ length: 4 }).map(async (_, i) => `
        <div class="card">
          <h3>Feature ${String.fromCharCode(65 + i)}</h3>
          <p>${await getLoremCached(1)}</p>
        </div>
      `)).then(arr => arr.join(""))}
    </section>`
    ],
    cards: [
        async () => `<section class="cards grid">
      ${await Promise.all(Array.from({ length: 3 }).map(async () => `
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
      ${Array.from({ length: 6 }).map(() => `
        <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Gallery">
      `).join("")}
    </section>`,
        async () => `<section class="gallery carousel">
      ${Array.from({ length: 5 }).map(() => `
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
      ${await Promise.all(Array.from({ length: 3 }).map(async (_, i) => `
        <blockquote>"${await getLoremCached(1)}" <span>- Person ${i + 1}</span></blockquote>
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
