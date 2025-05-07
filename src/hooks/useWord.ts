import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {HistoryContext} from '../context/HistoryContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_STORAGE_KEY = '@word_history';

const useWord = () => {
  const {setWord, setError, setWordDefinition, setLoading} =
    useContext(AppContext);
  const {history, setHistory} = useContext(HistoryContext);

  // Load history from AsyncStorage when component mounts
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const storedHistory = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
        if (storedHistory) {
          setHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error('Error loading history:', error);
      }
    };
    loadHistory();
  }, [setHistory]);

  const addToHistory = async (word: string, definition: string) => {
    try {
      setHistory(prevHistory => {
        // Remove any existing entry with the same word
        const filteredHistory = prevHistory.filter(item => item.word !== word);
        // Add new entry at the beginning
        const newHistory = [{word, definition}, ...filteredHistory];
        // Save to AsyncStorage
        AsyncStorage.setItem(
          HISTORY_STORAGE_KEY,
          JSON.stringify(newHistory),
        ).catch(error => console.error('Error saving history:', error));
        return newHistory;
      });
    } catch (error) {
      console.error('Error updating history:', error);
    }
  };

  const fetchRandomWord = async () => {
    try {
      setWord(null);
      setWordDefinition(null);
      setLoading(true);
      const wordResponse = await fetch(
        'https://random-word-api.herokuapp.com/word',
      );
      const random_word = await wordResponse.json();

      if (random_word[0]) {
        const definitionResponse = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${random_word[0]}`,
        );
        const definition = await definitionResponse.json();

        if (definition?.title === 'No Definitions Found') {
          console.log('no definition found');
          return fetchRandomWord();
        }

        const definitions = definition[0].meanings[0].definitions.map(
          (d: {definition: string}) => d.definition,
        );
        const definitionText = definitions.join(', ');
        setWordDefinition(definitionText);
        setWord(random_word[0]);
        // Add to history after setting the word and definition
        await addToHistory(random_word[0], definitionText);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {fetchRandomWord, history};
};

export default useWord;
