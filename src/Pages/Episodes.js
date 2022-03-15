import React, { useState, useEffect } from "react";

const Episodes = () => {
  let [id] = useState(1);
  let [info, setInfo] = useState([]);
  let { air_data } = info;
  console.log(info);
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
    })();
  }, [api]);
  return (
    <div className='container'>
      <div className='row'></div>
      <h1 className='text-center'>Episodio</h1>
      <h5 className='text-center'>Air Date{air_data}</h5>
      <div className='row'></div>
    </div>
  );
};

export default Episodes;
