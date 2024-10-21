import CtaButton from "../ux/CtaButton/CtaButton";
import styles from "./GiftIdea.module.css";

export default function GiftIdea({giftIdea, index}) {
    return <li className={styles.gift}>
        <h4>#{index + 1} {giftIdea.title}</h4>
        <p>{giftIdea.description}</p>
        {/* <CtaButton text={'Find Products'} position="right" width="full"></CtaButton> */}
    </li>
}