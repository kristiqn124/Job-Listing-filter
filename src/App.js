import "./App.css";
import FilterSort from "./components/FilterSort";
import FilterCard from "./UI/FilterCard";

import JobList from "./components/JobList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [arrFilters, setArrFilters] = useState([]);

  const getData = () => {
    axios.get(`data.json`).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const onClickFilterHandler = (element) => {
    if (!arrFilters.includes(element)) {
      setArrFilters((prev) => [...prev, element]);
    }
  };
  const onClickDeleteHandler = (el) => {
    setArrFilters((prev) => prev.filter((item) => item !== el));
  };
  const onClickDeleteAllHandler = (el) => {
    setArrFilters([]);
  };
  return (
    <div className="App">
      <FilterCard />
      <FilterSort
        filterData={arrFilters}
        deleteHandler={onClickDeleteHandler}
        deleteAllHandler={onClickDeleteAllHandler}
      ></FilterSort>
      <JobList
        filterList={arrFilters}
        onChange={onClickFilterHandler}
        data={data}
      />
    </div>
  );
}

export default App;
