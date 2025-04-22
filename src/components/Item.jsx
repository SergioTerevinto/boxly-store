import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from './Item.module.css'; 
function Item({ item }) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(item, 1);
  };

  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <div className={styles.buttons}>
       
        <button onClick={handleAddToCart}>Comprar</button>

       
        <Link to={`/product/${item.id}`}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
