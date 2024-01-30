import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//     headers: {
//       "X-RapidAPI-Key": '706cc8f74emsh6c991e0e5a8039bp1bf064jsnb5ee49f14a99',
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//     params: { ...query },
//   };

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': 'c022a8f70emshd7351c466eda1eap17f969jsn0dc12e01c270',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    
  };

  const fetchData = async () => {
    setIsLoading(true);
  
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  

  

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.request(options);

//       setData(response.data.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       console.log(error)
//     } finally {
//       setIsLoading(false);
//     }
//   };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;