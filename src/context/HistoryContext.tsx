import {ReactNode, createContext, useState} from "react";

interface History {
    word: string,
    definition: string,
}

interface HistoryContextType {
    history: History[],
    setHistory: React.Dispatch<React.SetStateAction<History[]>>,
}

export const HistoryContext = createContext<HistoryContextType>({
    history: [],
    setHistory: () => {}
})

interface IHistoryContextProvider {
    children: ReactNode
}

const HistoryContextProvider = ({children}: IHistoryContextProvider) => {
    const [history, setHistory] = useState<History[]>([]);

    const value = {
        history,
        setHistory
    }

    return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
}

export default HistoryContextProvider;