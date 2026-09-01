console.log("CONTENEDOR CATEGORIAS");

const categorias = [
    "pizzas",
    "empanadas",
    "bebidas",
    "promos"
];

const portadasCartegorias = {
    pizzas: "images/fondo-pizzas.webp",

    empanadas: "images/fondo-empanadas.webp",

    bebidas: "images/fondo-bebidas.webp",

    promos: "images/fondo-promos.webp"
};


function renderCategorias() {
    const contenedorCategorias = document.querySelector(".contenedor-categorias");
    categorias.forEach(categoria => {
        const divCategoria = document.createElement("div");
        divCategoria.className = "categoria-negocio";
        divCategoria.id = `categoria_${categoria}`;

        const botonCategoria = crearBotonCategoria(categoria);

        const divArticle = renderTarjetas(categoria);

        divCategoria.append(botonCategoria, divArticle);
        contenedorCategorias.appendChild(divCategoria);
    });
}

function crearBotonCategoria(categoria) {
    const botonCategoria = document.createElement("button");
    botonCategoria.type = "button";
    botonCategoria.className = "boton-categoria";
    botonCategoria.id = `boton-${categoria}`;

    const imgBoton = document.createElement("img");
    imgBoton.src = portadasCartegorias[categoria];
    imgBoton.alt = `fondo-${categoria}`;
    imgBoton.loading = "lazy";

    const titleCategoria = document.createElement("span");
    titleCategoria.className = "title-categoria";
    titleCategoria.id = `title-categoria_${categoria}`;
    titleCategoria.textContent = categoria;

    botonCategoria.append(imgBoton, titleCategoria);

    return botonCategoria;
}

renderCategorias();