import React, { createContext, useMemo, useState } from 'react';

type InputStateContextType = {
  inputState: string;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

interface InputStateContextProviderProps {
  children: React.ReactNode;
}

export const InputStateContext = createContext<InputStateContextType>({} as InputStateContextType);

export function InputStateContextProvider({ children }: InputStateContextProviderProps) {
  const [inputState, setInputState] = useState('');
  const value = useMemo(() => ({ inputState, setInputState }), [inputState, setInputState]);

  return <InputStateContext.Provider value={value}>{children}</InputStateContext.Provider>;
}
