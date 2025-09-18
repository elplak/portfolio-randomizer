import { generate } from "./generator.js";

export function initLayoutControls() {
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");

    if (!generateBtn || !downloadBtn) {
        return;
    }

    generateBtn.addEventListener("click", async () => {
        await generate();
    });

    downloadBtn.addEventListener("click", async () => {
        const appClone = document.getElementById("app").cloneNode(true);
        appClone.querySelectorAll(".editor-only").forEach(el => el.remove()); // remove editor-only elements

        const content = appClone.innerHTML;

        const toolbarEl = document.querySelector(".toolbar");
        const footerEl = document.querySelector(".footer");
        const footerHTML = footerEl ? `<footer class="footer">${footerEl.innerHTML}</footer>` : "";

        const fullHTML = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine Random Website</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/effects.css">
  <link rel="stylesheet" href="css/toolbar.css">
</head>
<body>
<header class="toolbar">
  ${toolbarEl ? toolbarEl.innerHTML : ""}
</header>
<main class="container">
  ${content}
</main>
${footerHTML}
</body>
</html>`;

        const zip = new JSZip();
        zip.file("index.html", fullHTML);

        const cssFiles = ["css/styles.css", "css/effects.css", "css/toolbar.css"];
        for (const file of cssFiles) {
            try {
                const response = await fetch(file);
                let text = await response.text();

                // Editor-spezifisches CSS entfernen, falls noch in styles.css enthalten
                text = text.replace(/\.delete-section[\s\S]*?\}/g, "");
                text = text.replace(/\.editor-only[\s\S]*?\}/g, "");

                zip.file(file, text);
            } catch (e) {
                console.warn(`Konnte ${file} nicht laden:`, e);
            }
        }

        const imgElements = document.querySelectorAll("img");
        for (const img of imgElements) {
            try {
                const response = await fetch(img.src);
                const blob = await response.blob();
                const filename = img.src.split("/").pop();
                zip.file(filename, blob);
            } catch (e) {
                console.warn(`Konnte Bild ${img.src} nicht laden:`, e);
            }
        }

        const blob = await zip.generateAsync({ type: "blob" });
        saveAs(blob, "website.zip");
    });
}