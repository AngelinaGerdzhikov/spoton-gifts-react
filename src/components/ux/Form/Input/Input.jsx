import styles from "../form.module.css";

export default function Input({ id, label, ...props}) {
    return <div className={styles['form-field']}>
        <label htmlFor={id} className={styles.label}>{label}{props.required ? <span className={styles.asterix}> *</span> : ''}</label>
        <input id={id} className={styles.input} {...props} />
    </div>
}