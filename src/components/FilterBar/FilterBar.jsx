import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

export default function Page() {
  const [filter, setFilter] = useState('all');
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/users/1/links');
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setData();
    }
  };

  useEffect(() => {
    setIsLoading(false);
    fetchData();
    setIsLoading(true);
  }, [filter]);

  return (
    <div>
      <FilterBar filter={filter} onchangeFilter={setFilter}></FilterBar>
      {isloading ? <p>Loading...</p> : <Card data={data}></Card>}
    </div>
  );

  function Button({ children }) {
    return <button>{children}</button>;
  }

  function FilterBar(filter, onchangeFilter) {
    return (
      <div>
        <Button
          onClick={() => {
            onchangeFilter('all');
          }}
          selected={filter === 'all'}>
          전체
        </Button>
        <Button
          onClick={() => {
            onchangeFilter('like');
          }}
          selected={filter === 'like'}>
          즐겨찾기
        </Button>
      </div>
    );
  }
}
