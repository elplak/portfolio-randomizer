import { randomBool } from "../utils/random.js";

export const gallery = [
    async () => `<section class="gallery grid draggable-section" draggable="true">
    ${Array.from({ length: 5 + Math.floor(Math.random() * 3) })
        .map(
            () => `
      <img src="https://picsum.photos/${randomBool() ? "300/200" : "250/200"}?random=${Math.random()}" alt="Gallery">`
        )
        .join("")}
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`,

    async () => `<section class="gallery carousel draggable-section" draggable="true">
    ${Array.from({ length: 4 + Math.floor(Math.random() * 3) })
        .map(
            () => `
      <div><img src="https://picsum.photos/${randomBool() ? "400/250" : "350/220"}?random=${Math.random()}" alt="Gallery"></div>`
        )
        .join("")}
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`
];