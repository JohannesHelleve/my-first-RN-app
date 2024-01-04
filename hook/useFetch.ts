import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';


const rapidApiKey = RAPID_API_KEY;
 k
const useFetch = (endpoint : string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

}