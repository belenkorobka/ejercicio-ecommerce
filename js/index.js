window.onload = function () {

    let dataBase = [
        {
          description: 'Reloj de muñeca para hombres'
        },
        {
          description: 'Juguete de super heroe para niñas'
        },
        {
          description: 'Video juego de aventura para consola PS4'
        },
        {
          description: 'Camara fotográfica profesional'
        },
        {
          description: 'Libro recetas de cocina'
        },
        {
          description: 'Televisor Samsung 55 pulgadas'
        },
        {
          description: 'Ropa interior dama'
        }
      ]

    let botonesAgregar = []
    let carritoCompra = document.getElementById('carritoCompra')
    let contador = 0;
    let productosAgregados = []

    // if (localStorage.getItem('contador')) {
    //     carritoCompra.innerHTML = localStorage.getItem('contador')
    // } else {
    //     carritoCompra.innerHTML = '0'
    // }
    carritoCompra.innerHTML = localStorage.getItem('contador') ? localStorage.getItem('contador') : contador


    function mostrarProductos () {
        let productosLista = document.getElementById('productos')

        for (let i = 0; i < dataBase.length; i++) {
            let nuevoProducto = document.createElement('li')
            nuevoProducto.innerHTML = `<span class="producto"> ${dataBase[i].description}</span> <span class="botonAgregar" id="producto${i}">Agregar al carrito</span>`
            productosLista.appendChild(nuevoProducto)
            botonesAgregar[i] = document.getElementById(`producto${i}`)
            
            botonesAgregar[i].addEventListener('click', () => {
                agregarCarrito(i)
            }) 
        }        
    }

    mostrarProductos()

    function agregarCarrito(indice) {
        alert(`Agregaste al carrito el articulo ${dataBase[indice].description}`);
        contador += 1;
        carritoCompra.innerHTML = contador;

        localStorage.setItem('contador', contador)
        productosAgregados.push({description: dataBase[indice].description})
        localStorage.setItem('productos', JSON.stringify(productosAgregados))
    }

    carritoCompra.addEventListener('click', () => {
        if (contador > 0) {
            window.location.href = 'http://127.0.0.1:5500/Sprint%202/clase%2027%20-%20workshop/ejercicio%20-%20ecommerce/pagar.html'
        } else {
            alert('no agregaste nada al carrito')
        }
    })
}