import React, { useEffect, useState } from "react";
import styles from "./Cards.module.scss";
import Pagination from "../Pagination/Pagination";

const Cards = ({ pageNumber, renderItems, handlePage }) => {
  // const [pageCount, setPageCount] = useState(0);

  // const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   const endOffset = itemOffset + 10;
  //   setCurrentItems(results.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(results.length / 10));
  // }, [itemOffset]);

  // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * 10) % results.length;
  //   setItemOffset(newOffset);
  // };

  const colors = {
    Dead: "red",
    Alive: "green",
    unknown: "gray",
  };

  return (
    <>
      {renderItems
        ? renderItems.map((x) => {
            let { id, name, image, location, status } = x;

            return (
              <div key={id} className='col-4 mb-5 position-relative'>
                <div className={styles.cards}>
                  <img src={image} alt='' className={styles.img} />
                  <div style={{ padding: "10px" }} className='content'>
                    <div className='fs-3 fw-bold'>{name}</div>
                    <div className=''>
                      <div className='fs-7 fw-bold text-primary'>
                        Ultima ubicacion
                      </div>
                      <div className='fs-4'>{location.name}</div>
                    </div>
                  </div>
                  <div
                    className={styles.badge}
                    style={{ backgroundColor: colors[status] }}
                  >
                    {status}
                  </div>
                </div>
              </div>
            );
          })
        : "No se encontraron resultados"}
      <button
        type='button'
        onClick={() => {
          if (pageNumber <= 1) return null;
          handlePage((prev) => prev - 1);
        }}
      >
        previous
      </button>
      <button type='button' onClick={() => handlePage((prev) => prev + 1)}>
        next
      </button>
    </>
  );
};

export default Cards;
