import { createContext } from 'react';
import { Folder } from '../../types/types';

export const FoldersContext = createContext<Folder[]>([]);
