import React, { useRef } from "react";
import { sortOption, statusOption, typeOption } from "../helpers/constants";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
} from "../redux/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    dispatch(clearFilters());
    inputRef.current.value = "";
    typeRef.current.value = "Seçiniz";
    statusRef.current.value = "Seçiniz";
    sortRef.current.value = "Seçiniz";
  };

  return (
    <div className="filter-sec">
      <h2>Filtreleme Seçenekleri</h2>
      <form>
        <div>
          <label htmlFor="">Arama</label>
          <input
            ref={inputRef}
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="ör: amazon"
          />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select
            ref={statusRef}
            name="status"
            id=""
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {statusOption.map((statu) => (
              <option>{statu}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Tür</label>
          <select
            ref={typeRef}
            name="type"
            id=""
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {typeOption.map((type) => (
              <option>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Sırala</label>
          <select
            ref={sortRef}
            name="status"
            id=""
            onChange={(e) => dispatch(sortJobs(e.target.value))}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {sortOption.map((sort) => (
              <option>{sort}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button" onClick={handleReset}>
            Filtreleri Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
