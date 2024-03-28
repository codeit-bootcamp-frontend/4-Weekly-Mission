import React, { createContext, useMemo, useState } from 'react';

type InputStateContextType = {
  inputState: string;
  setInputState: React.Dispatch<React.SetStateAction<string>>;
};

interface InputStateContextProviderProps {
  children: React.ReactNode;
}

const InputStateContext = createContext<InputStateContextType>({} as InputStateContextType);

export default function InputStateContextProvider({ children }: InputStateContextProviderProps) {
  const [inputState, setInputState] = useState('');
  const value = useMemo(() => ({ inputState, setInputState }), [inputState, setInputState]);

  return <InputStateContext.Provider value={value}>{children}</InputStateContext.Provider>;
}
