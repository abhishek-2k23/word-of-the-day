import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useWord = () => {
    const { setWord, setError, setWordDefinition, setLoading } = useContext(AppContext);

    const fetchRandomWord = async () => {
        try {
            setWord(null);
            setWordDefinition(null);
            setLoading(true);
            const wordResponse = await fetch('https://random-word-api.herokuapp.com/word');
            const random_word = await wordResponse.json();
            
            if (random_word[0]) {
                const definitionResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${random_word[0]}`);
                const definition = await definitionResponse.json();
                
                if (definition?.title === "No Definitions Found") {
                    console.log('no definition found');
                    return fetchRandomWord();
                }

                const definitions = definition[0].meanings[0].definitions.map((d: { definition: string }) => d.definition);
                setWordDefinition(definitions.join(', '));
                setWord(random_word[0]);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        }finally{
            setLoading(false);
        }
    }

    return { fetchRandomWord };
}

export default useWord;