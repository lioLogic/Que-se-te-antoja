const negocio = {
    localName: "Pizza luigi's",
    heroDescripcion: "Las mejores pizzas de toda la ciudad",
    whatsapp: "541169046165"
};

const $ = (selector) => document.querySelectorAll(selector);

const elementos = {
    localName: $(".local-name"),
    
};

function renderStrings() {
    elementos.localName.forEach(e => {
        e.textContent = negocio.localName;
    });
}

renderStrings();