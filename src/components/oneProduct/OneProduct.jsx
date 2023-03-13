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
                    <h2>{item.title}</h2>
                    <h3>{item.category}</h3>
                    <img src={item.image}></img>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )
        })
      }
    </div>
  );
}

export default OneProduct;