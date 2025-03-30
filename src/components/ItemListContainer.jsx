import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";


function ItemListContainer({ text }) {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const products = 'https://dummyjson.com/products';
        const productsByCategory = `https://dummyjson.com/products/category/${id}`;
          
      /*  fetch(id ? productsByCategory : products)
        .then(res => res.json())
        .then(data => setItems(data.products)); LO COMENTA PARA VER SI LA SEGUNDA OPCION MOSTRADA ME SIRVE*/

       if (id) {
        
        fetch(productsByCategory)
        .then(res => res.json())
        .then(data => setItems(data.products));

    } else {
        fetch(products)
        .then(res => res.json())
        .then(data => setItems(data.products))
    }

    }, [id]);

return (
    <div>
        <h1>{text}</h1>
        <ItemList items={items} />
    </div>
);
}

export default ItemListContainer;
