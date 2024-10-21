import { useContext } from "react";
import GiftIdeaList from "../GiftIdeaList/GiftIdeaList";
import Section from "../ux/Section/Section";
import { GiftIdeaGeneratorContext } from "../../store/gift-idea-gen-context";

export default function GiftIdeaResults() {
    const { giftIdeaResults, loading } = useContext(GiftIdeaGeneratorContext);

    let results = <p style={{textAlign: 'center'}}>Please fill in the form to discover gift ideas.</p>;

    if (giftIdeaResults.length > 0) {
        results = giftIdeaResults.map((list, i) => <GiftIdeaList key={i} list={list}/>)
    }

    return <Section width="contained" position="center">
        {loading && <progress></progress>}
        {!loading && results}
    </Section>
}