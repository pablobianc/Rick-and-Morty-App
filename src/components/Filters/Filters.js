import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber }) => {
  return (
    <div className='col-3'>
      <div className='text-center text-primary fw-bold fs-1 mb-3'>Filtro</div>
      <div
        style={{ cursor: "pointer" }}
        className='text-center text-info fw-bold fs-4 text-decoration-underline mb-5'
      >
        Limpiar Filtro
      </div>
      <div className='accordion' id='accordionExample'>
        <Gender />
        <Species />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};
export default Filters;
