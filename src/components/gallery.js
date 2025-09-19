import { randomBool } from "../utils/random.js";

export const gallery = [
    async () => `<section class="gallery grid draggable-section" draggable="true">
    ${Array.from({ length: 5 + Math.floor(Math.random() * 3) })
        .map(
            () => `
        <div class="img-wrapper">
          <div class="spinner"></div>
          <img data-src="https://picsum.photos/${
                randomBool() ? "300/200" : "250/200"
            }?random=${Math.random()}" alt="Gallery">
        </div>`
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
      <div>
        <div class="img-wrapper">
          <div class="spinner"></div>
          <img data-src="https://picsum.photos/${
                randomBool() ? "400/250" : "350/220"
            }?random=${Math.random()}" alt="Gallery">
        </div>
      </div>`
        )
        .join("")}
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`
];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".img-wrapper img").forEach(img => {
        const src = img.getAttribute("data-src");
        if (!src) {
            return;
        }

        img.addEventListener("load", () => {
            img.closest(".img-wrapper").classList.add("loaded");
        });

        img.src = src;
    });
});
