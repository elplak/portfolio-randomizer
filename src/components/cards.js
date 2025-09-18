import { randomBool } from "../utils/random.js";
import {getLoremCached} from "../utils/lorem.js";

export const cards = [
    async () => {
        const count = 3 + Math.floor(Math.random() * 2);
        return `<section class="cards grid draggable-section" draggable="true">
      ${await Promise.all(
            Array.from({ length: count }).map(
                async () => `
          <div class="card">
            <img src="https://picsum.photos/${randomBool() ? "300/200" : "280/180"}?random=${Math.random()}" alt="Card">
            <h3>${randomBool() ? "Card" : "Project"}</h3>
            <p>${await getLoremCached(1)}</p>
          </div>`
            )
        ).then(arr => arr.join(""))}
      <button class="delete-section editor-only" onclick="this.closest('section').remove()">
        <i class="fa-solid fa-trash"></i>
      </button>
    </section>`;
    }
];