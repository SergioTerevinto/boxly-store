import styles from './ItemDetail.module.css';

function ItemDetail({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.name} className={styles.image} />

      <div className={styles.info}>
        <h1 className={styles.name}>{item.name}</h1>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>${item.price}</p>

        <div className={styles.buttons}>
          <button>Ver más</button>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
