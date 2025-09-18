import {getLoremCached} from "./lorem.js";

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

const btnVariants = ["btn", "btn small", "btn outline"];

export const components = {
    hero: [
        async () => `<section class="hero center">
      <h1>${slogans[Math.floor(Math.random() * slogans.length)]}</h1>
      <p>${await getLoremCached(Math.random() > 0.5 ? 1 : 2)}</p>
      <a href="#" class="${btnVariants[Math.floor(Math.random() * btnVariants.length)]}">
        ${Math.random() > 0.5 ? "Learn more" : "Get started"}
      </a>
    </section>`,
        async () => `<section class="hero split">
      <div>
        <h1>${Math.random() > 0.5
            ? "Portfolio " + Math.floor(Math.random() * 2050)
            : slogans[Math.floor(Math.random() * slogans.length)]}</h1>
        <p>${await getLoremCached(1)}</p>
        <a href="#" class="${btnVariants[Math.floor(Math.random() * btnVariants.length)]}">
          ${Math.random() > 0.5 ? "Discover" : "Explore"}
        </a>
      </div>
      <img src="https://picsum.photos/${Math.random() > 0.5 ? "600/400" : "500/350"}?random=${Math.random()}" alt="Hero">
    </section>`,
        async () => `<section class="hero full-bg" style="background-image:url('https://picsum.photos/${1200 + Math.floor(Math.random() * 100)}/${400 + Math.floor(Math.random() * 100)}?random=${Math.random()}')">
      <h1>${slogans[Math.floor(Math.random() * slogans.length)]}</h1>
    </section>`
    ],
    about: [
        async () => `<section class="about img-left">
      <img src="https://picsum.photos/${Math.random() > 0.5 ? "400/300" : "350/250"}?random=${Math.random()}" alt="About">
      <div>
        <h2>${Math.random() > 0.5 ? "Who I am" : "About Me"}</h2>
        <p>${await getLoremCached(Math.random() > 0.5 ? 1 : 2)}</p>
      </div>
    </section>`,
        async () => `<section class="about simple">
      <h2>${Math.random() > 0.5 ? "About Me" : "My Story"}</h2>
      <p>${await getLoremCached(2)}</p>
    </section>`
    ],
    features: [
        async () => {
            const count = 3 + Math.floor(Math.random() * 3);
            return `<section class="features">
              ${await Promise.all(
                Array.from({length: count}).map(
                    async (_, i) => `
                <div class="card">
                  <h3>${Math.random() > 0.5 ? "Feature " + String.fromCharCode(65 + i) : "Option " + (i + 1)}</h3>
                  <p>${await getLoremCached(1)}</p>
                </div>`
                )
            ).then(arr => arr.join(""))}
            </section>`;
        }
    ],
    cards: [
        async () => {
            const count = 3 + Math.floor(Math.random() * 2);
            return `<section class="cards grid">
              ${await Promise.all(
                Array.from({length: count}).map(
                    async () => `
                <div class="card">
                  <img src="https://picsum.photos/${Math.random() > 0.5 ? "300/200" : "280/180"}?random=${Math.random()}" alt="Card">
                  <h3>${Math.random() > 0.5 ? "Card" : "Project"}</h3>
                  <p>${await getLoremCached(1)}</p>
                </div>`
                )
            ).then(arr => arr.join(""))}
            </section>`;
        }
    ],
    gallery: [
        async () => `<section class="gallery grid">
      ${Array.from({length: 5 + Math.floor(Math.random() * 3)})
            .map(
                () => `
        <img src="https://picsum.photos/${Math.random() > 0.5 ? "300/200" : "250/200"}?random=${Math.random()}" alt="Gallery">`
            )
            .join("")}
    </section>`,
        async () => `<section class="gallery carousel">
      ${Array.from({length: 4 + Math.floor(Math.random() * 3)})
            .map(
                () => `
        <div><img src="https://picsum.photos/${Math.random() > 0.5 ? "400/250" : "350/220"}?random=${Math.random()}" alt="Gallery"></div>`
            )
            .join("")}
    </section>`
    ],
    testimonials: [
        async () => `<section class="testimonials">
      <blockquote>"${await getLoremCached(1)}" <span>- ${Math.random() > 0.5 ? "Alex" : "Taylor"}</span></blockquote>
      <blockquote>"${await getLoremCached(1)}" <span>- ${Math.random() > 0.5 ? "Jamie" : "Chris"}</span></blockquote>
    </section>`,
        async () => `<section class="testimonials grid">
      ${await Promise.all(
            Array.from({length: 2 + Math.floor(Math.random() * 3)}).map(
                async (_, i) => `
        <blockquote>"${await getLoremCached(1)}" <span>- Person ${i + 1}</span></blockquote>`
            )
        ).then(arr => arr.join(""))}
    </section>`
    ],
    pricing: [
        async () => {
            const plans = [
                {name: "Basic", price: "19€"},
                {name: "Pro", price: "49€"},
                {name: "Enterprise", price: "99€"}
            ];
            const featuredIndex = Math.floor(Math.random() * plans.length);
            return `<section class="pricing grid">
      ${await Promise.all(
                plans.map(async (plan, idx) => `
          <div class="card ${idx === featuredIndex ? "featured" : ""}">
            <h3>${plan.name}</h3>
            <strong>${plan.price}</strong>
            <ul>
              ${(await Promise.all(
                    Array.from({length: 2 + Math.floor(Math.random() * 3)}).map(
                        async () => `<li>${await getLoremCached(1)}</li>`
                    )
                )).join("")}
            </ul>
            <a href="#" class="${btnVariants[Math.floor(Math.random() * btnVariants.length)]}">
              ${Math.random() > 0.5 ? "Choose" : "Select"}
            </a>
          </div>
        `)
            ).then(arr => arr.join(""))}
    </section>`;
        },
        async () => {
            const plans = [
                {name: "Starter", price: "15€"},
                {name: "Team", price: "39€"},
                {name: "Business", price: "89€"}
            ];
            const highlightIndex = Math.floor(Math.random() * plans.length);
            return `<section class="pricing rows">
      ${await Promise.all(
                plans.map(async (plan, idx) => `
          <div class="row ${idx === highlightIndex ? "highlight" : ""}">
            <h3>${plan.name}</h3>
            <p>${await getLoremCached(1)}</p>
            <strong>${plan.price}</strong>
            <a href="#" class="${btnVariants[Math.floor(Math.random() * btnVariants.length)]}">
              ${Math.random() > 0.5 ? "Start" : "Get it"}
            </a>
          </div>
        `)
            ).then(arr => arr.join(""))}
    </section>`;
        },
        async () => {
            const plans = [
                {name: "Lite", price: "9€"},
                {name: "Pro", price: "59€"},
                {name: "Ultimate", price: "129€"}
            ];
            return `<section class="pricing minimal">
      ${plans.map(plan => `
        <div>
          <strong>${plan.price}</strong>
          <h3>${plan.name}</h3>
        </div>
      `).join("")}
    </section>`;
        }
    ],
    contact: [
        async () => `<section class="contact">
      <h2>${Math.random() > 0.5 ? "Contact" : "Get in Touch"}</h2>
      <form>
        <input type="text" placeholder="${Math.random() > 0.5 ? "Your Name" : "Name"}" required>
        <input type="email" placeholder="${Math.random() > 0.5 ? "Email Address" : "Email"}" required>
        <textarea placeholder="${Math.random() > 0.5 ? "Write your message..." : "Message"}" required></textarea>
        <button class="${btnVariants[Math.floor(Math.random() * btnVariants.length)]}">Send</button>
      </form>
    </section>`
    ]
};
