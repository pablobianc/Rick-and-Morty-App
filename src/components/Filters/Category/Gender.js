import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ setStatus }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingOne'>
        <button
          className='accordion-button fs-2s fw-bold'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseOne'
          aria-expanded='true'
          aria-controls='collapseOne'
        >
          Genero
        </button>
      </h2>
      <div
        id='collapseOne'
        className='accordion-collapse collapse show'
        aria-labelledby='headingOne'
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body d-flex flex-wrap bg-light gap-3'></div>
        {genders.map((items, index) => (
          <FilterBTN
            key={index}
            name='gender'
            index={index}
            items={items}
            setStatus={setStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Gender;
