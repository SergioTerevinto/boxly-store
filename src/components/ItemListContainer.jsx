import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { getItems, filterByCategory } from "../firebase/db"


function ItemListContainer({ text }) {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            filterByCategory(id)
                .then(data => setItems(data))
        } else {
        getItems ()
            .then(data => setItems(data)) 
        }
    }, [id])

return (
    <div>
        <h1>{text}</h1>
        <ItemList items={items} />
    </div>
);
}

export default ItemListContainer
