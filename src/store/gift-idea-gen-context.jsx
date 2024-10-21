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
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ giftIdeaResults, setGiftIdeaResults ] = useState([]);

    useEffect(() => {
        if (input) {
            setLoading(true);
            setErrorMessage(null);
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
                if (response.status === 400) {
                        const res = await response.json();
                        if (res.error && res.error.message) {
                            setErrorMessage(res.error.message);
                            setLoading(false);
                            setGiftIdeaResults([]);
                            return;
                        }
                } else {
                    throw new Error(`Response status: ${response.status}`);
                }
            }

            const res = await response.json();
            setGiftIdeaResults(res.content);
            setLoading(false);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    const handleSubmit = (data) => {
        setInput(data);
    }

    const clearError = () => {
        setErrorMessage(null);
    }

    const context = {
        input: {...input},
        giftIdeaResults,
        loading,
        errorMessage,
        handleSubmit,
        clearError
    }

    return <GiftIdeaGeneratorContext.Provider value={context}>
        {children}
    </GiftIdeaGeneratorContext.Provider>
}
