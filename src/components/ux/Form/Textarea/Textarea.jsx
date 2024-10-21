import styles from "../form.module.css";

export default function Textarea({ id, label, ...props}) {
    return <div className={styles['form-field']}>
        <label htmlFor={id} className={styles.label}>{label}{props.required ? <span className={styles.asterix}> *</span> : ''}</label>
        <textarea id={id} className={styles.textarea} {...props} />
    </div>
}