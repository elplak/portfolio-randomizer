function initLayoutControls() {
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");

    if (!generateBtn || !downloadBtn) {
        return;
    }

    generateBtn.addEventListener("click", () => {
        generate();
    });

    downloadBtn.addEventListener("click", () => {
        const content = document.getElementById("app").innerHTML;
        const toolbarEl = document.querySelector(".toolbar");
        const footerEl = document.querySelector(".footer");
        const footerHTML = footerEl ? `<footer class="footer">${footerEl.innerHTML}</footer>` : "";

        const fullHTML = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Meine Random Website</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="layout.css">
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

        const blob = new Blob([fullHTML], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        const anchorElement = document.createElement("a");
        anchorElement.href = url;
        anchorElement.download = "index.html";
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
        URL.revokeObjectURL(url);
    });
}
