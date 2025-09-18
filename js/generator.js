import { applyRandomDesign } from "./themes.js";
import { applyRandomEffects } from "./effects.js";
import { components } from "../src/components";
import { enableSectionDragDrop } from "./dragdrop.js";

function shuffle(array) {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

function getSelectedSections() {
    return Array.from(document.querySelectorAll('.controls input[type="checkbox"]:checked'))
        .map(cb => cb.value);
}

export async function generate() {
    let html = "";
    const selected = shuffle(getSelectedSections());

    if (selected.includes("hero")) {
        const hero = components.hero[Math.floor(Math.random() * components.hero.length)];
        html += await hero();
    }

    for (const sec of ["about", "features", "cards", "gallery", "testimonials", "pricing"]) {
        if (selected.includes(sec) && components[sec]) {
            const comp = components[sec][Math.floor(Math.random() * components[sec].length)];
            html += await comp();
        }
    }

    if (components.contact) {
        const contact = components.contact[Math.floor(Math.random() * components.contact.length)];
        html += await contact();
    }

    const layouts = ["container narrow", "container wide", "container boxed", "container fluid"];
    const mainEl = document.querySelector("main.container");
    if (mainEl) {
        mainEl.className = layouts[Math.floor(Math.random() * layouts.length)];
    }

    document.getElementById("app").innerHTML = html;
    applyRandomDesign();
    applyRandomEffects();
    enableSectionDragDrop();
}
