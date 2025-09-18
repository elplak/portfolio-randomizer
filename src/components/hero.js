import { randomChoice, randomBool } from "../utils/random.js";
import { slogans } from "../data/slogans.js";
import { btnVariants } from "../data/buttonVariants.js";
import {getLoremCached} from "../utils/lorem.js";

export const hero = [
    async () => `<section class="hero center draggable-section" draggable="true">
    <h1>${randomChoice(slogans)}</h1>
    <p>${await getLoremCached(randomBool() ? 1 : 2)}</p>
    <a href="#" class="${randomChoice(btnVariants)}">
      ${randomBool() ? "Learn more" : "Get started"}
    </a>
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`,

    async () => `<section class="hero split draggable-section" draggable="true">
    <div>
      <h1>${randomBool()
        ? "Portfolio " + Math.floor(Math.random() * 2050)
        : randomChoice(slogans)}</h1>
      <p>${await getLoremCached(1)}</p>
      <a href="#" class="${randomChoice(btnVariants)}">
        ${randomBool() ? "Discover" : "Explore"}
      </a>
    </div>
    <img src="https://picsum.photos/${randomBool() ? "600/400" : "500/350"}?random=${Math.random()}" alt="Hero">
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`,

    async () => `<section class="hero full-bg draggable-section" draggable="true" style="background-image:url('https://picsum.photos/${1200 + Math.floor(Math.random() * 100)}/${400 + Math.floor(Math.random() * 100)}?random=${Math.random()}')">
    <h1>${randomChoice(slogans)}</h1>
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`
];