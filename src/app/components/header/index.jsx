import Link from 'next/link';
import styles from './header.module.css';

const Header = ()  => {
    return (
        <header className={styles.header}>
            <section className={styles.logo}>
                <h1 className={styles.titulo}>Entre Páginas</h1>
            </section>
            <nav className={styles.nav}> 
                <Link href="#highlights" className={styles.link}>
                    Destaques
                </Link>
                <Link href="#category" className={styles.link}>
                    Categorias
                </Link>
                <Link href="#releases" className={styles.link}>
                    Lançamentos
                </Link>
                <Link href="#newsletter" className={styles.link}>
                    Notícias
                </Link>
                <Link href="#cart" className={styles.link}>
                    Carrinho
                </Link>
            </nav>
        </header>
    )
}

export default Header;