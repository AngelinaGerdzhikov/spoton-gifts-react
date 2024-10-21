import styles from './SectionTitle.module.css';

export default function SectionTitle({title, subtitle, position = 'left', Heading = 'h1'}) {
    return <div className={`${styles.wrapper} ${styles[position]}`}>
        <h4 className={`${styles.subtitle} ${position}`}>{subtitle}</h4>
        <Heading>{title}</Heading>
    </div>
}