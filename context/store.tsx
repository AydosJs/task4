"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextProps {
  selectedId: number[];
  setSelectedId: React.Dispatch<React.SetStateAction<number[]>>;

  loading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const globalContext = createContext<ContextProps | undefined>({
  selectedId: [],
  setSelectedId: () => {},

  loading: false,
  setIsLoading: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedId, setSelectedId] = useState<number[] | []>([]);
  const [loading, setIsLoading] = useState<boolean>(false);

  return (
    <globalContext.Provider
      value={{ selectedId, setSelectedId, loading, setIsLoading }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
