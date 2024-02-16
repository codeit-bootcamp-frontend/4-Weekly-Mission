import { useState } from 'react';
import './InputBar.css';
const InputBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };
  return (
    <div className="InputBar">
      <div>
        <input type="text" value={search} onChange={handleChange} placeholder="링크를 검색해 보세요." />
      </div>
    </div>
  );
};

export default InputBar;
