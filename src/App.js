import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
// import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let [search, setSearch] = useState("");
  let [, setStatus] = useState("");

  let [fetchedData, updateFechedData] = useState([]);

  useEffect(() => {
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
    async function fetchData() {
      let data = await fetch(api).then((res) => res.json());
      updateFechedData(data.results);
      setTotalPages(data.info.pages);
    }

    fetchData();
  }, [pageNumber, search]);

  async function filter(filter, search) {
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}-&${filter}=${search}`;
    let data = await fetch(api).then((res) => res.json());
    updateFechedData(data.results);
    setTotalPages(data.info.pages);
  }

  async function clearFilter() {
    let api = "https://rickandmortyapi.com/api/character/";
    let data = await fetch(api).then((res) => res.json());
    updateFechedData(data.results);
    setTotalPages(data.info.pages);
  }

  return (
    <div className='App'>
      <Search setSearch={setSearch} />

      <div className='container'>
        <div className='row'>
          <Filters
            setStatus={filter}
            setPageNumber={setPageNumber}
            clearFilter={clearFilter}
          />

          <div className='col-8'>
            <div className='row'>
              <Cards
                renderItems={fetchedData}
                handlePage={setPageNumber}
                pageNumber={pageNumber}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
