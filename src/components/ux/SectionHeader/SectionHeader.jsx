import styles from './SectionHeader.module.css';

export default function SectionHeader({children, position = 'left'}) {
    return <section className={styles.wrapper}>
        <div className={`${styles[position]}`}> 
            {children}
        </div>
    </section>
}