import {getLoremCached} from "../lorem.js";

export const testimonials = [
    async () => `<section class="testimonials draggable-section" draggable="true">
    <blockquote>"${await getLoremCached(1)}" <span>- ${Math.random() > 0.5 ? "Alex" : "Taylor"}</span></blockquote>
    <blockquote>"${await getLoremCached(1)}" <span>- ${Math.random() > 0.5 ? "Jamie" : "Chris"}</span></blockquote>
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`,

    async () => `<section class="testimonials grid draggable-section" draggable="true">
    ${await Promise.all(
        Array.from({ length: 2 + Math.floor(Math.random() * 3) }).map(
            async (_, i) => `
      <blockquote>"${await getLoremCached(1)}" <span>- Person ${i + 1}</span></blockquote>`
        )
    ).then(arr => arr.join(""))}
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`
];