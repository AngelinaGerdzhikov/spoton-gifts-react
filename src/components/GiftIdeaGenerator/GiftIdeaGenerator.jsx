import OverlaySection from "../ux/OverlaySection/OverlaySection";
import SectionHeader from "../ux/SectionHeader/SectionHeader";
import SectionTitle from "../ux/SectionTitle/SectionTitle";

import ribbonsImg from "../../assets/ribbons-and-flowers-narrow.jpg";
import GiftIdeaForm from "../GiftIdeaForm/GiftIdeaForm";
import SectionContent from "../ux/SectionContent/SectionContent";

export default function GiftIdeaGenerator() {
    return <OverlaySection imgUrl={ribbonsImg} opacity={'0.8'}>
            <SectionHeader position={'center'}>
                <SectionTitle title={'Gift Idea Generator'} subtitle={'Thoughful Gift Ideas'} position={'center'} />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
            </SectionHeader>
            <SectionContent position="center" width="contained">
                <GiftIdeaForm />
            </SectionContent>
    </OverlaySection>
}