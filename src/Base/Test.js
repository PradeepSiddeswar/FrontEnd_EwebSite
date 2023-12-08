import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { _id } = useParams();
  const [data, setData] = useState([]); // Initialize data as null

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://postlogin.onrender.com/form/items/${_id}`, requestOptions)
      .then(response => response.json())
      .then(result =>{setData(result)
         console.log(result,"hb")})
      .catch(error => console.log('error', error));
  }, [_id]);
  

  return (
    <>
      <h1>Fetching API data here hhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
      {data ? (
        <>
          <p>{data.selectedCategories}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default Test;
