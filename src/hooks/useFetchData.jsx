import { useState, useEffect } from 'react';
import axios from '../axios';

// Custom hook: Fetch data using Axios
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  console.log(data)

  return { data, isLoading, error };
}

export default useFetchData;
