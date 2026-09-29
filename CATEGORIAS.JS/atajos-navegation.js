const categoriasConfig = {
    'hamburguesas': {
        botonScroll: 'scroll_hamburguesas',
        portada: 'categoria_hamburguesas',
        viewport: 'viewport-hamburguesas'
    },
    'sandwiches': {
        botonScroll: 'scroll_sandwiches',
        portada: 'categoria_sandwiches',
        viewport: 'viewport-sandwiches'
    },
    'platos': {
        botonScroll: 'scroll_platos',
        portada: 'categoria_platos',
        viewport: 'viewport-platos'
    },
    'snacks': {
        botonScroll: 'scroll_snacks',
        portada: 'categoria_snacks',
        viewport: 'viewport-snacks'
    }
};


function scrollViewport() {
    Object.keys(categoriasConfig).forEach(categoria => {
        // Obtenemos la configuración específica de esta categoría
        const config = categoriasConfig[categoria];
        
        const botonScroll = document.getElementById(config.botonScroll);
        const portadaDestino = document.getElementById(config.portada);
        const viewportActivo = document.getElementById(config.viewport);

        if (botonScroll && portadaDestino && viewportActivo) {
            botonScroll.addEventListener("click", () => {
                
                // 1. Mandas el scroll a la portada visible
                portadaDestino.scrollIntoView({ behavior: 'smooth' });

                const viewportAbierto = viewportActivo.classList.contains("abierto");
                
                if (viewportAbierto) {
                    // ... Tu lógica actual de cerrar el viewport con setTimeout ...
                } else {
                    // 2. Creamos el observador para vigilar la PORTADA
                    const observador = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                // 3. Al llegar a la portada, abrimos el VIEWPORT
                                viewportActivo.classList.remove("cerrado", "cerrando");
                                viewportActivo.classList.add("abierto");

                                // 4. Apagamos el sensor de la portada
                                observador.unobserve(portadaDestino);
                            }
                        });
                    }, { threshold: 0 });

                    // Encendemos el sensor en la portada
                    observador.observe(portadaDestino);
                }
            });
        }
    });
}


scrollViewport();