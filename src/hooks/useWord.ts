import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { HistoryContext } from "../context/HistoryContext";

const useWord = () => {
    const { setWord, setError, setWordDefinition, setLoading } = useContext(AppContext);
    const { history, setHistory } = useContext(HistoryContext);

    const addToHistory = (word: string, definition: string) => {
        setHistory(prevHistory => {
            // Remove any existing entry with the same word
            const filteredHistory = prevHistory.filter(item => item.word !== word);
            // Add new entry at the beginning
            return [{ word, definition }, ...filteredHistory];
        });
    };

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
                const definitionText = definitions.join(', ');
                setWordDefinition(definitionText);
                setWord(random_word[0]);
                // Add to history after setting the word and definition
                addToHistory(random_word[0], definitionText);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }

    return { fetchRandomWord, history };
}

export default useWord;