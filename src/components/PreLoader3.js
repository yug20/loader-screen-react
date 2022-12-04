import React, { useEffect, useState } from 'react';
import './PreLoader3.css';
import { Triangle } from 'react-loader-spinner';

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <div id="loader">
          <div id="box"></div>
          <div id="hill"></div>
        </div>
      ) : (
        <>
          <h1>Your Data</h1>
        </>
      )}
    </>
  );
}

export default PreLoader3;
