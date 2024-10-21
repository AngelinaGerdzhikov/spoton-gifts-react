import styles from "../form.module.css";

export default function Select({id, label, selectOptions, ...props}) {
    return <div className={styles['form-field']}>
    <label htmlFor={id} className={styles.label}>{label}{props.required ? <span className={styles.asterix}> *</span> : ''}</label>
    <select id={id} className={styles.select} {...props}>
     {selectOptions.map(option => {
        return <option value={option.id} key={option.id}>{option.label}</option>
     })}
    </select>
</div>
}