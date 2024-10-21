import { createContext, useEffect, useState } from "react";

const INITIAL_CONTEXT = {
    input: {
        "occasion": "",
        "relationship": "",
        "gender": "",
        "age": null,
        "career": "",
        "hobby": "",
        "personality": ""
    },
    giftIdeaResults:[],
    handleSubmit: () => {}
}

export const GiftIdeaGeneratorContext = createContext(INITIAL_CONTEXT);

export default function GiftIdeaGeneratorContextProvider({children}) {
    const [input, setInput] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ giftIdeaResults, setGiftIdeaResults ] = useState([]);

    useEffect(() => {
        if (input) {
            setLoading(true);
            fetchIdeas(input);
        }
    },[input]);

    const fetchIdeas = async (input) => {
        const url = `${import.meta.env.VITE_API_URL}/generateGiftIdeas`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({ input: input }),
            });

            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const res = await response.json();
            setGiftIdeaResults(res.content);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleSubmit = (data) => {
        setInput(data);
    }

    const context = {
        input: {...input},
        giftIdeaResults,
        loading,
        handleSubmit
    }

    return <GiftIdeaGeneratorContext.Provider value={context}>
        {children}
    </GiftIdeaGeneratorContext.Provider>
}
