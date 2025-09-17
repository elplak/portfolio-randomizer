export const effects = [
    {
        hero: "effect-hero-spin",
        card: "effect-glass",
        gallery: "effect-tilt",
        button: "effect-glow"
    },
    {
        hero: "effect-hero-gradient",
        card: "effect-lift",
        gallery: "effect-zoom",
        button: "effect-outline"
    },
    {
        hero: "effect-hero-parallax",
        card: "effect-shadow",
        gallery: "effect-rotate",
        button: "effect-bounce"
    },
    {
        hero: "effect-hero-diagonal",
        card: "effect-border",
        gallery: "effect-grayscale",
        button: "effect-pulse"
    }
];

export function applyRandomEffects() {
    const effect = effects[Math.floor(Math.random() * effects.length)];
    document.body.className = "";
    document.body.classList.add(effect.hero, effect.card, effect.gallery, effect.button);
}
