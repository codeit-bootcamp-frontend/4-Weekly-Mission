import { useState, useEffect } from 'react';
import FolderList from './FolderList';
import { getFolders } from '../api';

function App() {
  const [items, setItems] = useState([]);

 const handleLoad = async () => {
  const folders = await getFolders();
  setItems(folders);
 }
 
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="App">
      <FolderList items={items}/>
    </div>
  );
}

export default App;
