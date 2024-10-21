import { useContext } from "react";
import CtaButton from "../ux/CtaButton/CtaButton";
import Input from "../ux/Form/Input/Input";
import Select from "../ux/Form/Select/Select";
import Textarea from "../ux/Form/Textarea/Textarea";
import styles from "./GiftIdeaForm.module.css";
import { GiftIdeaGeneratorContext } from "../../store/gift-idea-gen-context";
import ErrorMessage from "../ux/ErrorMessage/ErrorMessage";

export default function GiftIdeaForm() {
    const { handleSubmit: onSubmit, loading, errorMessage, clearError } = useContext(GiftIdeaGeneratorContext);
    const genderOptions = [
        {id: 'female', label: 'Female'},
        {id: 'male', label: 'Male'}
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        onSubmit(data);
    }


    return <form onSubmit={handleSubmit} onChange={clearError}>
        <div className={styles.col2}>
            <Input required id={'occasion'} name={'occasion'} label={'Occasion'} type={'text'} placeholder={"Mother's Day"}/>
            <Input required id={'relationship'} name={'relationship'} label={'Relationship'} type={'text'} placeholder={'Mother'}/>
        </div>
        <div className={styles.col2}>
            <Select required id={'gender'} name={'gender'} label={'Gender'} selectOptions={genderOptions} placeholder={'What is their gender'}/>
            <Input required id={'age'} name={'age'} label={'Age'} type={'number'} placeholder={'Age'}/>
            <Input required id={'career'} name={'career'} label={'Career'} type={'text'} placeholder={'Nurse Practitioner'}/>
        </div>
        <Input required id={'hobby'} name={'hobby'} label={'Hobbies & Interests'} type={'text'} placeholder={'Baking, Drawing with watercolor'}/>
        <Textarea required id={'personality'} name={'personality'} label={'Personality'} placeholder={'Quiet person who appreciates sentimental gifts'} rows="3"/>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <CtaButton text={loading ? 'Generating Ideas...' : 'Discover Gifts'} width="full" position="center" disabled={loading || errorMessage}/>
    </form>
}