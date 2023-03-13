import styles from "./header.module.css"

function TheHeader() {

    return (
        <div className={styles.header}>
            <h2 className={styles.headertext}>XYZ store</h2>
        </div>
    );
}

export default TheHeader