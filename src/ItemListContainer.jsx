import { useEffect, useState } from "react";
import productosStock from "./productos"
import ItemList from './ItemList'

function getProductos() {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            resolve(productosStock)
        }, 5000);
    })
}

function ItemListContainer (props) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos().then(respuestaPromesa =>{
            setProductos (respuestaPromesa)
        })
    }, [])

    return (
        <div>
            <ItemList  />
        </div>
    )
}

export default ItemListContainer