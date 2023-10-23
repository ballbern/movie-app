import React, { useContext, createContext, ReactNode } from "react";

type MovieProviderProps = {
  children: ReactNode;
};

type MovieContextProps = {
  gridLayout: (num: number) => void;
  toggleTheme: (toggle: boolean) => void;
  layout: number;
};

// create the context.
const MovieContext = createContext({} as MovieContextProps);

// custom hook used to return  context.
export const useMovie = () => {
  return useContext(MovieContext);
};

// the context provider.
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [layout, setLayout] = React.useState(3);

  const gridLayout = (num: number) => setLayout(num);

  const toggleTheme = (toggle: boolean) => {
    const body = document.body;
    if (toggle) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
  };

  return (
    <MovieContext.Provider
      value={{
        gridLayout,
        toggleTheme,
        layout,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
