document.querySelectorAll("article").forEach(item => {
    item.addEventListener("click", () => {
        alert("Sección seleccionada");
    });
});
document.querySelectorAll("article").forEach(item => {
    item.addEventListener("click", () => {
        alert("Sección seleccionada");
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("details").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("details").forEach(el => {
            if (el !== item) {
                el.removeAttribute("open");
            }
        });
    });
});
document.querySelectorAll("article").forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "#ffff99"; // Resalta el artículo sin mostrar alerta
    });
});

function buscarTexto() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let articles = document.querySelectorAll("article");
    let encontrado = false;

    articles.forEach(article => {
        let text = article.innerText.toLowerCase();
        if (text.includes(input) && input.length > 0) {
            article.style.backgroundColor = "#ffff99"; // Resalta los resultados
            if (!encontrado) {
                article.scrollIntoView({ behavior: "smooth", block: "start" }); // Mueve al usuario
                encontrado = true;
            }
        } else {
            article.style.backgroundColor = "white"; // Restaura el fondo si no coincide
        }
    });
}
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");

    function toggleAccordion() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    }

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", toggleAccordion);
    }

    // Abrir automáticamente el primer acordeón al cargar la página
    if (acc.length > 0) {
        acc[0].classList.add("active");
        var firstPanel = acc[0].nextElementSibling;
        if (firstPanel) firstPanel.style.display = "block";
    }
});
