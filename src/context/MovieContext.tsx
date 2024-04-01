import { useContext, createContext, ReactNode, useState } from "react";

type MovieProviderProps = {
  children: ReactNode;
};

type MovieContextProps = {
  gridLayout: (num: number) => void;
  toggleTheme: (toggle: boolean) => void;
  layout: number;
  prevPage: () => void;
  nextPage: () => void;
  page: number;
};

// create the context.
const MovieContext = createContext({} as MovieContextProps);

// custom hook used to return  context.
export const useMovie = () => {
  return useContext(MovieContext);
};

// the context provider.
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [layout, setLayout] = useState(3);
  const [page, setPage] = useState(1);

  const gridLayout = (num: number) => setLayout(num);

  const toggleTheme = (toggle: boolean) => {
    const body = document.body;
    if (toggle) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  };

  const nextPage = () => setPage(prevPage => prevPage + 1);

  const prevPage = () => setPage(prevPage => prevPage - 1);

  return (
    <MovieContext.Provider
      value={{
        gridLayout,
        toggleTheme,
        nextPage,
        prevPage,
        layout,
        page,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
