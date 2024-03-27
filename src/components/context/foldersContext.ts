import { createContext } from 'react';
import { Folder } from '../../types/api';

export const FoldersContext = createContext<Folder[]>([]);
