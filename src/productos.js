class Producto {
    constructor(id, nombre, descripcion, precio, stock, imagen) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.stock = stock
        this.precio = precio
        this.imagen = imagen
        
    }
   
}

let p1 = new Producto (1, "Latest Album", "Album", 1, 450, "../images/album.jpg")
let p2 = new Producto (2, "Black Hoddie", "Clothes", 1, 120, "../images/black-hoodie.jpg")
let p3 = new Producto (3, "Original Sinname", "CD", 1, 220, "../images/originalCD.jpg")
let p4 = new Producto (4, "White T-shirt", "Clothes", 1, 12, "../images/white-Tshirt.jpg")
let p5 = new Producto (5, "Ring with band logo", "Jewllery", 1, 25, "../images/ring.jpg")
let p6 = new Producto (6, "Black and white necklace", "Jewllery", 1, 33, "../images/necklace.jpg")
let p7 = new Producto (7, "Sinname Hat", "Clothes", 1, 8, "../images/hat.webp")
let p8 = new Producto (8, "Grey Jacket", "Clothes", 1, 95, "../images/jacket.jpg")

let productosStock = [p1, p2, p3, p4, p5, p6, p7, p8]

export default productosStock