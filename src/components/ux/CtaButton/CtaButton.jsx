import styles from "./CtaButton.module.css";

export default function CtaButton({text, position = 'center', width = 'content', ...props}) {
    return <div className={`${styles.wrapper} ${styles[position]}`}>
        <button className={`${styles.button} ${styles[width]}`} {...props}>
            {text}
        </button>
    </div>

}