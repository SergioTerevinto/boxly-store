import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from './ItemDetailContainer.module.css';
import {getItem, filterByCategory} from "../firebase/db.js";


export default function ItemDetailContainer () {
    const [detail, setDetail] = useState();
    const {id} = useParams();

useEffect(() => {
    getItem(id)
    .then ((item) => {
        setDetail(item);
    })
}, [id]);

    return (
        <div className={styles.container}>
            <img src={detail?.image} alt={detail?.name} />
            <h1>{detail?.name}</h1>
            <p>{detail?.description}</p> 
            <p>{detail?.price}</p>
            <button>AGREGAR AL CARRITO</button>
        </div>
    );
}