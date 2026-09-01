const mapeoCategorias = {
    'boton-pizzas': 'viewport-pizzas',
    'boton-empanadas': 'viewport-empanadas',
    'boton-bebidas': 'viewport-bebidas',
    'boton-promos': 'viewport-promos'
};

function animarViewport() {
    Object.keys(mapeoCategorias).forEach(idBotones => {
        const botonCategoria = document.getElementById(idBotones);
        if (botonCategoria) {
            botonCategoria.addEventListener("click", () => {
                const idViewportCateogoria = mapeoCategorias[idBotones];
                const viewportActivo = document.getElementById(idViewportCateogoria);

                if (viewportActivo) {
                    const viewportAbierto = viewportActivo.classList.contains("abierto");
                    if (viewportAbierto) {
                        viewportActivo.classList.remove("abierto");
                        viewportActivo.classList.add("cerrando");
                        setTimeout(() => {
                            viewportActivo.classList.remove("cerrando");
                            viewportActivo.classList.add("cerrado");
                        }, 400);
                    } else {
                        viewportActivo.classList.remove("cerrado", "cerrando");
                        viewportActivo.classList.add("abierto");
                    }
                }
            });
        }
    });
}

animarViewport();