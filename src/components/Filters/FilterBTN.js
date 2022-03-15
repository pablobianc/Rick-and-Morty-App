import React from "react";

const FilterBTN = ({ name, index, items }) => {
  return (
    <div>
      {/* <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className='form-check'>
        <input
          className='form-check-input x'
          type='radio'
          name={name}
          id={{ name } - { index }}
        />
        <label className='btn btn-outline-success' for={{ name } - { index }}>
          {items}
        </label>
        <br></br>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault2'
          checked
        />
        <label
          className='btn btn-outline-success'
          for='flexRadioDefault2'
        ></label>
      </div> */}
      <button type='button' onClick={() => console.log(name)}>
        {items}
      </button>
    </div>
  );
};

export default FilterBTN;
