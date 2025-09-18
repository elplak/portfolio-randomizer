import { randomChoice, randomBool } from "../utils/random.js";
import { btnVariants } from "../data/buttonVariants.js";
import {getLoremCached} from "../../js/lorem.js";

export const pricing = [
    async () => {
        const plans = [
            { name: "Basic", price: "19€" },
            { name: "Pro", price: "49€" },
            { name: "Enterprise", price: "99€" }
        ];
        const featuredIndex = Math.floor(Math.random() * plans.length);
        return `<section class="pricing grid draggable-section" draggable="true">
      ${await Promise.all(
            plans.map(
                async (plan, idx) => `
        <div class="card ${idx === featuredIndex ? "featured" : ""}">
          <h3>${plan.name}</h3>
          <strong>${plan.price}</strong>
          <ul>
            ${(await Promise.all(
                    Array.from({ length: 2 + Math.floor(Math.random() * 3) }).map(
                        async () => `<li>${await getLoremCached(1)}</li>`
                    )
                )).join("")}
          </ul>
          <a href="#" class="${randomChoice(btnVariants)}">
            ${randomBool() ? "Choose" : "Select"}
          </a>
        </div>`
            )
        ).then(arr => arr.join(""))}
      <button class="delete-section editor-only" onclick="this.closest('section').remove()">
        <i class="fa-solid fa-trash"></i>
      </button>
    </section>`;
    },

    async () => {
        const plans = [
            { name: "Starter", price: "15€" },
            { name: "Team", price: "39€" },
            { name: "Business", price: "89€" }
        ];
        const highlightIndex = Math.floor(Math.random() * plans.length);
        return `<section class="pricing rows draggable-section" draggable="true">
      ${await Promise.all(
            plans.map(
                async (plan, idx) => `
        <div class="row ${idx === highlightIndex ? "highlight" : ""}">
          <h3>${plan.name}</h3>
          <p>${await getLoremCached(1)}</p>
          <strong>${plan.price}</strong>
          <a href="#" class="${randomChoice(btnVariants)}">
            ${randomBool() ? "Start" : "Get it"}
          </a>
        </div>`
            )
        ).then(arr => arr.join(""))}
      <button class="delete-section editor-only" onclick="this.closest('section').remove()">
        <i class="fa-solid fa-trash"></i>
      </button>
    </section>`;
    },

    async () => {
        const plans = [
            { name: "Lite", price: "9€" },
            { name: "Pro", price: "59€" },
            { name: "Ultimate", price: "129€" }
        ];
        return `<section class="pricing minimal draggable-section" draggable="true">
      ${plans
            .map(
                plan => `
        <div>
          <strong>${plan.price}</strong>
          <h3>${plan.name}</h3>
        </div>`
            )
            .join("")}
      <button class="delete-section editor-only" onclick="this.closest('section').remove()">
        <i class="fa-solid fa-trash"></i>
      </button>
    </section>`;
    }
];