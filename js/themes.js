export const themes = [
    {
        bg: "#ffffff",
        text: "#111827",
        primary: "#2563eb",
        secondary: "#1e40af",
        font: "'Inter', sans-serif",
        radius: "12px",
        shadow: "0 4px 16px rgba(0,0,0,0.06)"
    },
    {
        bg: "#f8f9fa",
        text: "#1f2937",
        primary: "#0d9488",
        secondary: "#115e59",
        font: "'Poppins', sans-serif",
        radius: "16px",
        shadow: "0 6px 20px rgba(0,0,0,0.08)"
    },
    {
        bg: "#fafafa",
        text: "#1a1a1a",
        primary: "#f59e0b",
        secondary: "#b45309",
        font: "'Outfit', sans-serif",
        radius: "20px",
        shadow: "0 8px 24px rgba(0,0,0,0.1)"
    },
    {
        bg: "#1a1a1a",
        text: "#f3f4f6",
        primary: "#e11d48",
        secondary: "#9f1239",
        font: "'Roboto Slab', serif",
        radius: "10px",
        shadow: "0 8px 20px rgba(0,0,0,0.4)"
    },
    {
        bg: "#fef3c7",
        text: "#78350f",
        primary: "#d97706",
        secondary: "#92400e",
        font: "'Merriweather', serif",
        radius: "14px",
        shadow: "0 6px 18px rgba(0,0,0,0.15)"
    },
    {
        bg: "#0f172a",
        text: "#e2e8f0",
        primary: "#38bdf8",
        secondary: "#0284c7",
        font: "'Fira Sans', sans-serif",
        radius: "18px",
        shadow: "0 10px 28px rgba(0,0,0,0.6)"
    }
];

export function applyRandomDesign() {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    document.body.style.setProperty("--primary", theme.primary);
    document.body.style.setProperty("--secondary", theme.secondary);
    document.body.style.setProperty("--bg", theme.bg);
    document.body.style.setProperty("--text", theme.text);
    document.body.style.fontFamily = theme.font;
    document.body.style.setProperty("--radius", theme.radius);
    document.body.style.setProperty("--shadow", theme.shadow);
    document.body.style.setProperty("--section-bg", theme.bg);
    document.body.style.setProperty("--section-text", theme.text);
    document.body.style.setProperty("--card-bg", theme.bg);
    document.body.style.setProperty("--card-text", theme.text);
}
