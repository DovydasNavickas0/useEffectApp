import styles from "./OneProduct.module.css"

function OneProduct(props) {
    console.log(props.items)

    //console.log(styles.list)
    //console.log(styles.oneProduct)

  return (
    <div className={styles.list}>
      {
        props.items.map(item => {
            return(
                <div key={item.id} className={styles.oneProduct}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <h3 className={styles.category}>{item.category}</h3>
                        <h3 className={styles.price}>{item.price}$</h3>
                        <img src={item.image} alt="productImg"></img>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                </div>
            )
        })
      }
    </div>
  );
}

export default OneProduct;