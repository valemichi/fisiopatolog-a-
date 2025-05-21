// === ACORDEÓN: Solo un panel abierto a la vez ===
document.querySelectorAll(".accordion").forEach((accordion) => {
    accordion.addEventListener("click", function () {
        document.querySelectorAll(".accordion").forEach((otherAccordion) => {
            if (otherAccordion !== this) {
                otherAccordion.classList.remove("active");
                const otherPanel = otherAccordion.nextElementSibling;
                otherPanel.style.display = "none";
            }
        });

        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// === BUSCADOR DE TEXTO EN ARTÍCULOS ===
function buscarTexto() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let articles = document.querySelectorAll("article");
    let encontrado = false;

    articles.forEach(article => {
        let text = article.innerText.toLowerCase();
        if (text.includes(input) && input.length > 0) {
            article.style.backgroundColor = "#ffff99"; // Resalta los resultados
            if (!encontrado) {
                article.scrollIntoView({ behavior: "smooth", block: "start" });
                encontrado = true;
            }
        } else {
            article.style.backgroundColor = "white"; // Restaura si no coincide
        }
    });
}

// === CLICK EN ARTÍCULOS: Cambia el fondo (sin alerta) ===
document.querySelectorAll("article").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll("article").forEach(a => a.style.backgroundColor = "white");
        item.style.backgroundColor = "#ffff99";
    });
});

// === DETAILS: Abre solo uno a la vez (si usas <details>) ===
document.querySelectorAll("details").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelectorAll("details").forEach((el) => {
            if (el !== item) el.removeAttribute("open");
        });
    });
});

