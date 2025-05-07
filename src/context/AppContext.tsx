import {createContext, ReactNode, useState} from 'react';

// Define the shape of our context
interface AppContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  word: string | null;
  setWord: (word: string | null) => void;
  error: string | null;
  setError: (error: string | null) => void;
  wordDefinition: string | null;
  setWordDefinition: (wordDefinition: string | null) => void;
  example: string | null;
  setExample: (example: string | null) => void;
}

// Define the props for our provider component
interface AppContextProviderProps {
  children: ReactNode;
}

// Create context with default values
export const AppContext = createContext<AppContextType>({
  word: null,
  setWord: () => {},
  wordDefinition: null,
  setWordDefinition: () => {},
  error: null,
  setError: () => {},
  loading: false,
  setLoading: () => {},
  example: null,
  setExample: () => {},
});

// Create the provider component
export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [word, setWord] = useState<string | null>(null);
  const [wordDefinition, setWordDefinition] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [example, setExample] = useState<string | null>(null);

  const value = {
    word,
    setWord,
    error,
    setError,
    wordDefinition,
    setWordDefinition,
    loading,
    setLoading,
    example,
    setExample,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
