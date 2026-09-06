const productosArray = {
    hamburguesas: [
        {
            nombre: "Antojo simple",
            descripcion: "Carne y cheddar.",
            imagen: "images/burgers/burger svg.webp",
            precio: 11000
        },
        {
            nombre: "Antojo doble",
            descripcion: "Doble carne con cheddar.",
            imagen: "images/burgers/burger svg.webp",
            precio: 13000
        },
        {
            nombre: "Antojo triple",
            descripcion: "Triple carne con cheddar.",
            imagen: "images/burgers/burger svg.webp",
            precio: 14000
        },
        {
            nombre: "Antojo bacon",
            descripcion: "Doble, con queso y bacon.",
            imagen: "images/burgers/burger svg.webp",
            precio: 14000
        },
        {
            nombre: "Antojo mortal",
            descripcion: "Triple carne, triple cheddar y bacon.",
            imagen: "images/burgers/burger svg.webp",
            precio: 16000
        },
        {
            nombre: "Antojo fresco",
            descripcion: "Medallon de carne, lechuga y tomate. Lleva salsa especial de la casa.",
            imagen: "images/burgers/antojo fresco.webp",
            precio: 10000
        },
        {
            nombre: "Antojo suave",
            descripcion: "Carne, jamón y tomate.",
            imagen: "images/burgers/burger svg.webp",
            precio: 10000
        },
        {
            nombre: "La Bajonera",
            descripcion: "Doble carne, cheddar, bacon, jamón y huevo.",
            imagen: "images/burgers/burger svg.webp",
            precio: 16000
        }
    ],

    sandwiches: [
        {
            nombre: "Simple",
            descripcion: "",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 13000
        },
        {
            nombre: "Con L y T",
            descripcion: "",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 14000
        },
        {
            nombre: "Con J y Q",
            descripcion: "LLeva jamón y queso.",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 15000
        },
        {
            nombre: "Completo",
            descripcion: "LLeva jamón, queso, lechuga y tomate.",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 16000
        },
        {
            nombre: "Completísimo",
            descripcion: "LLeva jamón, queso, lechuga, tomate y huevo.",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 17000
        },
        {
            nombre: "Napolitano",
            descripcion: "Lleva jamón, queso y salsa.",
            imagen: "images/sandwiches/sandwich svg.webp",
            precio: 17000
        }
    ],

    platos: [
        {
            nombre: "Pastel de papas",
            descripcion: "Con carne cortada a cuchillo, buena cantidad de queso y acompañado con pan.",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Tortilla de papa Simple",
            descripcion: "Clásica, sabrosa y doradita.",
            imagen: "images/platos/plato svg.webp",
            precio: 14000
        },
        {
            nombre: "Tortilla de papa Rellena",
            descripcion: "Rellena de  ¡Una combinación irresistible!",
            imagen: "images/platos/plato svg.webp",
            precio: 15000
        },
        // PLATOS DE PASTAS //
        {
            nombre: "Tallarines al huevo",
            descripcion: "LLeva estofado. Incluye pan y queso.",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Ñoquis",
            descripcion: "LLeva estofado. Incluye pan y queso.",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Ravioles de J y Q",
            descripcion: "LLeva estofado. Incluye pan y queso.",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        // MILANESAS AL PLATO //
        {
            nombre: "Mila al plato",
            descripcion: "Con guarnición",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Mila al plato Simple",
            descripcion: "",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Mila al plato Napo",
            descripcion: "LLeva salsa, queso, tomate.",
            imagen: "images/platos/plato svg.webp",
            precio: 15000
        },
        {
            nombre: "Mila al plato Caballo",
            descripcion: "LLeva huevos fritos.",
            imagen: "images/platos/plato svg.webp",
            precio: 13000
        },
        {
            nombre: "Mila al plato Especial",
            descripcion: "LLeva cheddar, bacón y verdeo.",
            imagen: "images/platos/plato svg.webp",
            precio: 16000
        },
        {
            nombre: "Mila De La Casa",
            descripcion: "LLeva jamón, muzza, cheddar y bacón.",
            imagen: "images/platos/plato svg.webp",
            precio: 17000
        },
        {
            nombre: "Pizzanesa",
            descripcion: "Lleva salsa, jamón, muzza y huevo.",
            imagen: "images/platos/plato svg.webp",
            precio: 17000
        }
    ],

    snacks: [
        // EMPANADAS DE CARNE //
        {
            nombre: "Emapanda de carne",
            descripcion: "Carne cortada a cuchillo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 2500
        },
        {
            nombre: "Emapandas de carne / Media Docena",
            descripcion: "Carne cortada a cuchillo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 13000
        },
        {
            nombre: "Emapandas de carne / La Docena",
            descripcion: "Carne cortada a cuchillo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 24000
        },
        // EMPANADAS DE JAMÓN Y QUESO //
        {
            nombre: "Empanada de J y Q",
            descripcion: "LLeva relleno de jamón y queso.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 2500
        },
        {
            nombre: "Empanadas de J y Q / Media Docena",
            descripcion: "LLeva relleno de jamón y queso.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 13000
        },
        {
            nombre: "Empanadas de J y Q / La Docena",
            descripcion: "LLeva relleno de jamón y queso.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 24000
        },
        // EMPANDAS DE POLLO //
        {
            nombre: "Empanada de pollo",
            descripcion: "Lleva relleno de pollo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 2500
        },
        {
            nombre: "Empanadas de pollo / Media Docena ",
            descripcion: "LLeva relleno de pollo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 13000
        },
        {
            nombre: "Empanadas de pollo / La Docena",
            descripcion: "Lleva relleno de pollo.",
            imagen: "images/snacks/empanada svg.webp",
            precio: 24000
        },
        // TEQUEÑOS //
        {
            nombre: "Tequeños",
            descripcion: "6 unidades acompañadas de papas fritas y 2 dips",
            imagen: "images/snacks/snack svg.webp",
            precio: 13000
        },
    ]
};