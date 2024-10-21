import styles from "./SectionContent.module.css";

export default function SectionContent({children, position = 'left', width = 'full'}) {
    return <article className={`${styles[position]} ${styles.wrapper}`}>
        <div className={styles[width]}>
            {children}
        </div>
    </article>
}