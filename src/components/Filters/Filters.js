import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPageNumber, clearFilter }) => {
  return (
    <div className='col-3'>
      <div className='text-center text-primary fw-bold fs-1 mb-3'></div>
      <button
        onClick={clearFilter}
        type='button'
        style={{ cursor: "pointer" }}
        className='text-center text-dark fw-bold fs-3 mb-5'
      >
        Limpiar filtro
      </button>
      <div className='accordion' id='accordionExample'>
        <Gender setStatus={setStatus} />
        <Species setStatus={setStatus} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
  );
};
export default Filters;
