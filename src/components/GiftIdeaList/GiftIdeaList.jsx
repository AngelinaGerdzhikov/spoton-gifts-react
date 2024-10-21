import GiftIdea from "../GiftIdea/GiftIdea";
import styles from "./GiftIdeaList.module.css";

export default function GiftIdeaList({list}) {
    return <section className={styles.wrapper}>
        <h2>{list.title}</h2>
        <p>{list.description}</p>
        <ul>{list.giftIdeas.map((idea, i) => <GiftIdea giftIdea={idea} index={i} key={i}/>)}</ul>
    </section>
}