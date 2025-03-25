import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img className={styles.imagem} src="https://i.pinimg.com/736x/87/1c/59/871c59a95205840c0b884d7a425b7481.jpg" alt="Banner de livraria" />
        </div>
    )
}

export default Banner;