import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from './ItemDetailContainer.module.css'
import { getItem } from "../firebase/db.js"
import { useCart } from "../context/CartContext"

export default function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const [count, setCount] = useState(1)
    const { id } = useParams()
    const { addToCart } = useCart()

    useEffect(() => {
        getItem(id).then((item) => setDetail(item))
    }, [id])

    const handleSub = () => {
        if (count > 1) setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleAddToCart = () => {
        if (detail) {
            addToCart(detail, count)
        }
    }

    return (
        <div className={styles.container}>
            <img src={detail?.image} alt={detail?.name} className={styles.image} />
            <h1>{detail?.name}</h1>
            <p>{detail?.description}</p>
            <p className={styles.price}>${detail?.price}</p>

            <div className={styles.counter}>
                <button onClick={handleSub}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}
