console.log("CONTENEDOR CATEGORIAS");

const categorias = [
    "hamburguesas",
    "sandwiches",
    "platos",
    "snacks"
];

const portadasCartegorias = {
    hamburguesas: "https://images.openai.com/static-rsc-4/gjEOXFzypReip1bQJbTMG-dgICTZ23Ddf_hdZWfpVZULoKApBByVbROEYS8R-1pIMWfyGiPgjUGOvaI0_ET6t-yqMugiZuGg_FnnHwPBNqzzmxProrXjudw196pElPpwSt7VR_MtFRjqYCsS8Mb1DGP3TJNjihhJCuhFA-G3gLCT7fcXtcst7AhpzzNz73yH?purpose=fullsize",

    sandwiches: "https://images.openai.com/static-rsc-4/TsEOx74x4Kx3P4QC1K48uJsw1WGBEBOiy3psVq6bfSWU2KKJ2CBMC1OJCALJONFe2GOTWEk8IvyXxayQhZwoxQeEUC4AarTa9q4cXTJ-HtrYQk3lJDXs4paysY1rkFh_UhTBZwiLEcv67T7kNy-FPV7PTqVaGTIq3sg7XUyDGzTaZ-SSg1OcOugGHAdaNXyf?purpose=fullsize",

    platos: "https://images.openai.com/static-rsc-4/E-8HGyXDIXl6pq_lw6NJR1t8xekhvwZ28lARDOmNaxtSF9Xgjj-h7lp8L0IJXLr7e51EnSIUiSf5Z9fUTB5OvLx-y863R2NCYo5YaijXEIE6Q5XB4I5eFs1F5_TlYz5p6Hh50EMyEg6GsPU_jJKsV_28fuiUXEtbBwM3W9y0kN0sqqQgiuxrZ6DpbQHseP0M?purpose=fullsize",

    snacks: "https://images.openai.com/static-rsc-4/tDTvXCXSVBPyUF5365H2yjCzfEq3Mx_yaPCw8y7F80VL34-eLLiuzCbY8sbZ5m2fCB7MNqSi6ig2PNQjlE35SGqE4Dfiu0Co-JyBWETyvaeNsVoI2ruO1nXn-pLJDuEBhNiQYb_o0xGGyrYTXB0eGD2u-6H9t6uKJ73mhCkaMjJB-ZYPUUs0ABVxvFG2VZiS?purpose=fullsize"
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