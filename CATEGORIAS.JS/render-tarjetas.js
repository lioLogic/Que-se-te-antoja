// CREAMOS LAS TARJETAS PARA CADA DIV //

function renderTarjetas(categoria) {
    const contenedor = document.createElement("div");
    contenedor.className = "viewport-categoria cerrado";
    contenedor.id = `viewport-${categoria}`;
    const productos = productosArray[categoria];
    
    productos.forEach(producto => {
        const divArticle = document.createElement("div");
        divArticle.className = "div-article-boton";
        const article = crearArticles(producto);
        const botonPedir = crearBotonPedido(producto);

        divArticle.append(article, botonPedir);
        contenedor.appendChild(divArticle);
    });
    return contenedor;
}

function crearArticles(producto) {
    const articleProducto = document.createElement("article");
    articleProducto.className = "article-producto";
    articleProducto.id = "article_producto";

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre
    img.loading = "lazy";
    img.width = "400";
    img.height = "300";

    const cajaInfo = document.createElement("div");
    cajaInfo.className = "caja-info";
    const titleArticle = document.createElement("h3");
    titleArticle.textContent = producto.nombre;
    const descripcionArticle = document.createElement("p");
    descripcionArticle.textContent = producto.descripcion;

    cajaInfo.append(titleArticle, descripcionArticle);
    articleProducto.append(img, cajaInfo);

    return articleProducto;
}

function crearBotonPedido(producto) {
    const botonPedir = document.createElement("button");
    botonPedir.type = "button";
    botonPedir.className = "boton-pedir";
    botonPedir.textContent = "Hacer pedido";

    return botonPedir;
}