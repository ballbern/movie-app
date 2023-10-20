import React, { useContext, createContext, ReactNode } from "react";

type MovieProviderProps = {
  children: ReactNode;
};

type MovieContextProps = {
  gridLayout: (num: number) => void;
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

  return (
    <MovieContext.Provider
      value={{
        gridLayout,
        layout,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
