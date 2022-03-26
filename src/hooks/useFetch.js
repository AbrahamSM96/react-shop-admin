import { useState, useEffect } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch(endpoint)
      .then((res) => res.json())
      .catch((error) => console.log(error));
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return data;
};

export default useFetch;
