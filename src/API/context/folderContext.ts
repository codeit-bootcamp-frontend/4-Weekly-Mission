import { createContext } from 'react';

interface contextType {
  kebabID: number | null;
  changeKebabID: (value: number | null) => void;
}

const folderContext = createContext<contextType>({
  kebabID: null,
  changeKebabID: () => {},
});

export default folderContext;
