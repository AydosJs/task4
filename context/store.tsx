"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  selectedId: number[];
  setSelectedId: React.Dispatch<React.SetStateAction<number[]>>;
}

const globalContext = createContext<ContextProps | undefined>({
  selectedId: [],
  setSelectedId: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedId, setSelectedId] = useState<number[] | []>([]);

  return (
    <globalContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
