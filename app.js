class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.disponible = true;
    }
    Vender() {
        this.disponible = false;
    }
}

// Celulares
let iphone13 = new Producto("Iphone 13", 1000)
let iphone13Pro = new Producto("Iphone 13 PRO", 1200)
let iphone13ProMax = new Producto("Iphone 13 PRO MAX", 1400)

// Tablets
let ipad = new Producto("Ipad", 600)
let ipadPro = new Producto("Ipad PRO", 1000)
let galaxyTab = new Producto("Galaxy Tab", 700)

// Notebooks
let asus20 = new Producto("Asus 20", 1200)
let dell = new Producto("Dell", 600)
let macbook = new Producto("Macbook", 1400)
let lenovo = new Producto("Lenovo", 500)

// Arrays
let arrayCelulares = [iphone13, iphone13Pro, iphone13ProMax]
let arrayTablets = [ipad, ipadPro, galaxyTab]
let arrayNotebooks = [asus20, dell, macbook, lenovo]
let arrayCarritoNombre = []
let arrayCarritoPrecio = []

// Funciones
function nombreProductos(array){
    let texto = ""
    for (i=0; i < array.length ; i++){
        texto += i+1 + "- " + array[i].nombre + " - " + "USD" + array[i].precio + "\n"    
    }    
    let produ = Number(prompt("Productos disponibles: \n" + "\n" + texto + "\nIndique el numero del producto a comprar."))
    
    arrayCarritoNombre.push(array[produ-1].nombre)
    arrayCarritoPrecio.push(array[produ-1].precio)
    
    let seguirComprando = prompt("Queres seguir comprando? si/no").toLowerCase()
    
    
    if (seguirComprando == "si"){
        casoElegido();
    }else if(seguirComprando == "no"){
        
        let precioTotal = 0
        for (i=0; i < arrayCarritoPrecio.length ; i++){
        precioTotal += arrayCarritoPrecio[i];
    }
        let precioCuotas = precioTotal / 3
        let finPrograma = prompt("Sus productos son: \n" + arrayCarritoNombre + "\nEl total de la compra es" + " USD " + precioTotal + "\nPodes abonar en 3 cuotas sin interes de " + precioCuotas.toFixed(2) + "\nLa informacion necesaria con los metodos de pago se enviara via Mail" + "\nPara salir 'salir' Para volver a iniciar 'inicio'").toLowerCase()

        
        if (finPrograma == "salir"){
            alert("Muchas gracias por tu visita!")
        }else if(finPrograma == "inicio"){
            casoElegido()
        }
    }
    
}

function casoElegido(){
    
    let eleccion = Number(prompt("Ingrese el numero del producto deseado: \n1- Celulares \n2- Tablets \n3- Notebooks"))
    
    if (eleccion == 1) {
        nombreProductos(arrayCelulares)
    } else if (eleccion == 2){
        nombreProductos(arrayTablets)
    } else if (eleccion == 3){
        nombreProductos(arrayNotebooks)
    }

}

let nombre = prompt("Bienvenido! Ingrese su nombre por favor.")

while (nombre === "" || nombre === null){
    nombre = prompt("Dato no valido, por favor ingrese su nombre.")
}

let mail = prompt("Por favor ingresa tu mail.")

while (mail === "" || mail === null){
    mail = prompt("Dato no valido, por favor ingrese su mail.")
}

casoElegido()

