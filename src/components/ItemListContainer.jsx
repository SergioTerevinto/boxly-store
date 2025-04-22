import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItems, filterByCategory } from "../firebase/db";
import Item from "./Item";
import styles from './ItemListContainer.module.css';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      getItems().then(setItems);
    } else {
      filterByCategory(id).then(setItems);
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODOS LOS PRODUCTOS</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
