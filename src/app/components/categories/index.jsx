import styles from './category.module.css';

const Category = ({ id }) => {
    return (
        <section className={styles.sectionCategory} id={id}>

            <h1 className={styles.titulo}>Categoria</h1>
            <div className={styles.categorias}>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Romance</h2>
                </div>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Ficção Ciéntifica</h2>
                </div>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Suspense</h2>
                </div>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Terror</h2>
                </div>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Aventura</h2>
                </div>

                <div className={styles.categoria}>
                    <h2 className={styles.nomeCategoria}>Ação</h2>
                </div>

            </div>

        </section>
    )
}

export default Category;