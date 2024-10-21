import styles from "./OverlaySection.module.css";

export default function OverlaySection({imgUrl, opacity, children, ...props}) {

    return <section className={styles.wrapper} style={{backgroundImage: `url(${imgUrl})`}} {...props}>
        <div className={styles.overlay} style={{opacity: opacity}}></div>
        <div className={styles.content}>{children}</div>
    </section>
}