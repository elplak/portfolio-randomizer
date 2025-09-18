import { randomChoice, randomBool } from "../utils/random.js";
import { btnVariants } from "../data/buttonVariants.js";

export const contact = [
    async () => `<section class="contact draggable-section" draggable="true">
    <h2>${randomBool() ? "Contact" : "Get in Touch"}</h2>
    <form>
      <input type="text" placeholder="${randomBool() ? "Your Name" : "Name"}" required>
      <input type="email" placeholder="${randomBool() ? "Email Address" : "Email"}" required>
      <textarea placeholder="${randomBool() ? "Write your message..." : "Message"}" required></textarea>
      <button class="${randomChoice(btnVariants)}">Send</button>
    </form>
    <button class="delete-section editor-only" onclick="this.closest('section').remove()">
      <i class="fa-solid fa-trash"></i>
    </button>
  </section>`
];