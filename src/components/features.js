import {getLoremCached} from "../lorem.js";

export const features = [
    async () => {
        const count = 3 + Math.floor(Math.random() * 3);
        return `<section class="features draggable-section" draggable="true">
      ${await Promise.all(
            Array.from({ length: count }).map(
                async (_, i) => `
          <div class="card">
            <h3>${Math.random() > 0.5 ? "Feature " + String.fromCharCode(65 + i) : "Option " + (i + 1)}</h3>
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