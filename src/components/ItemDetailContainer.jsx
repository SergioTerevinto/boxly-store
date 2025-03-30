import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from './ItemDetailContainer.module.css';


export default function ItemDetailContainer () {
    const [detail, setDetail] = useState();
    const {id} = useParams();

useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => setDetail(data))
}
, [id]);

    return (
        <div className={styles.container}>
            <img src={detail?.thumbnail} alt={detail?.title} />
            <h1>{detail?.title}</h1>
            <p>{detail?.description}</p> 
            <p>{detail?.price}</p>
            <button>AGREGAR AL CARRITO</button>
        </div>
    );
}