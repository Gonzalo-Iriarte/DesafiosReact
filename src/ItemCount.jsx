import { useState } from "react"


function ItemCount(props){
    const [count, setCount] = useState(props.initial)

    function handleSuma (){
        if (count < props.stock) {
            setCount(count+1)
        }
    }
    function handleResta (){
        if (count > 1) {
            setCount(count-1)
        }
    }

    return (
        <div>
            <button onClick={handleResta}>-</button>
            <span>  {count}  </span>
            <button onClick={handleSuma}>+</button>
            <div>
                <button>Agregar al carrito</button>
                <hr/>
            </div>
        </div>
    )
}

export default ItemCount