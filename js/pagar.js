window.onload = function () {
    let productosAgregados = localStorage.getItem('productos')
    let listaProductos = document.getElementById('productosAgregados')
    let botonComprar = document.getElementById('comprar')
    
    function mostrarProductos() {
        productosAgregados = JSON.parse(localStorage.getItem('productos'))
        for (let i = 0; i < productosAgregados.length; i++) {
            let nuevoProducto = document.createElement('li')
            nuevoProducto.innerHTML = productosAgregados[i].description
            listaProductos.appendChild(nuevoProducto)
        }
    }

    mostrarProductos()

    botonComprar.addEventListener('click', () => {
        alert('Tu compra se realizó correctamente')
        localStorage.clear()
        window.location.href = 'http://127.0.0.1:5500/Sprint%202/clase%2027%20-%20workshop/ejercicio%20-%20ecommerce/index.html'
    })
}