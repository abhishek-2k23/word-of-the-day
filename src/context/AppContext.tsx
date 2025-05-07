import { createContext, ReactNode, useState } from "react";

// Define the shape of our context
interface AppContextType {
  word: string | null;
  setWord: (word: string | null) => void;
}

// Define the props for our provider component
interface AppContextProviderProps {
  children: ReactNode;
}

// Create context with default values
export const AppContext = createContext<AppContextType>({
  word: null,
  setWord: () => {},
});

// Create the provider component
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [word, setWord] = useState<string | null>('sample');

  const value = {
    word,
    setWord,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


