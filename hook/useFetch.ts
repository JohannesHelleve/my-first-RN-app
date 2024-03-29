import { useState, useEffect } from 'react';
import axios from 'axios';



const rapidApiKey = process.env.RAPID_API_KEY;


const useFetch = (endpoint : string, query : object) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
      setIsLoading(true);

      try{
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error : any) {
        setError(error);
        alert('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    }
    useEffect(() => {
      fetchData();
    }, []);

    const refetch = () => {
      setIsLoading(true);
      fetchData();
     }

    return { data, isLoading, error, refetch }

}

export default useFetch;
