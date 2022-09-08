import React from "react";
import Item from "./Item"

function ItemList ({productos}){
    
    return (
        <>
        {productos.map(thisproducto =>{
                return (
                    <Item producto={thisproducto} key={thisproducto.id} />
                )
        })
        }
        </>
    )
}

export default ItemList