const negocio = {
    localName: "¿Qué se te antoja?",
    heroDescripcion: "Hamburguesas, milanesas, pastas y más",
    whatsapp: "541169046165"
};

const $ = (selector) => document.querySelectorAll(selector);

const elementos = {
    localName: $(".local-name"),
    heroDescripcion: $(".hero-desc")
};

function renderStrings() {
    elementos.localName.forEach(e => {
        e.textContent = negocio.localName;
    });
    elementos.heroDescripcion.forEach(e => {
        e.textContent = negocio.heroDescripcion;
    });
}

renderStrings();