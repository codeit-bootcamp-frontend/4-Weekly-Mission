import React, { useState, useEffect } from 'react';
import { calculateTimePassed, formatDate } from '../utils/dateUtils';

export interface Link {
  id: string;
  title: string;
  url: string;
  createdAt: string; 
  timePassed: string; 
  formattedDate: string;
}

export function useFetchCardsData(): Link[] {
  const [cardsData, setCardsData] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://bootcamp-api.codeit.kr/api/sample/folder`,
        );
        if (!response.ok) {
          throw new Error('response 전달 실패');
        }
        const data = await response.json();
        setCardsData(
          data.folder.links.map((link: Link) => ({
            ...link,
            timePassed: calculateTimePassed(link.createdAt),
            formattedDate: formatDate(link.createdAt),
          })),
        );
      } catch (error) {
        console.error('에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  return cardsData;
}
