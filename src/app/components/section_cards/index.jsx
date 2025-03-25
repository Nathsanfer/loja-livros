import styles from "./section_cards.module.css";

const SectionCards = ({ children, titulo, id }) => {
    return (
        <section className={styles.sectionCards} id={id}>
            <h1 className={styles.tituloSection}>{titulo}</h1>
            <div className={styles.cards}>{children}</div>
        </section>
    )
}

export default SectionCards;