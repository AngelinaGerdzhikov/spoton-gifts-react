import styles from "./Section.module.css";

export default function Section({children, position = 'left', width = 'full', ...props}) {
    return <section className={`${styles.wrapper} ${styles[position]}`} {...props}>
        <div className={styles[width]}>{children}</div>
    </section>
}