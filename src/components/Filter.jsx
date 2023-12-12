import React from "react";
import { sortOption, statusOption, typeOption } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../redux/jobSlice";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter-sec">
      <h2>Filtreleme Seçenekleri</h2>
      <form>
        <div>
          <label htmlFor="">Arama</label>
          <input
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="ör: amazon"
          />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select name="status" id="">
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
          <select name="type" id="">
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
          <select name="status" id="">
            <option disabled selected>
              Seçiniz
            </option>
            {sortOption.map((sort) => (
              <option>{sort}</option>
            ))}
          </select>
        </div>

        <div>
          <button type="button">Filtreleri Temizle</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
