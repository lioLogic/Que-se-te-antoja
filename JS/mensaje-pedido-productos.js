function crearMensajePedido(negocio, categoria, producto) {
    const telefono = negocio.whatsapp;
    const mensaje = `¡Hola! ¿Cómo va? Quisiera pedir el siguiente antojo: \n\n` +
        `🏷️ *Categoría:* ${categoria}\n` +
        `🛒 *${producto.nombre}*\n` +
        `📝 _${producto.descripcion}_\n` +
        `💰 *Precio:* $${producto.precio}`;

    const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}