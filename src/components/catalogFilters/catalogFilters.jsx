import React, { useState } from 'react';
import { ApplyButton, LabelPrice, LabelType, LabelMaterial, Labels, SelectSort, FiltersAll } from "./CatalogFilters.styled.jsx";

const CatalogFilter = ({ applyFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("Any");
  const [selectedMaterial, setSelectedMaterial] = useState("Any");
  const [selectedPriceRange, setSelectedPriceRange] = useState("Any");

  const handleApplyClick = () => {
    applyFilter({
      minPrice,
      maxPrice,
      sortBy,
      searchInput,
      type: selectedType,
      material: selectedMaterial,
      priceRange: selectedPriceRange, 
    });
  };

  return (
    <div>
      <FiltersAll>


      <LabelPrice>
        {/* <div className='price__select'> */}
        Price
        <select
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option value="Any" className='PriceOptions'>Any Price</option>
          <option value="0-1000" className='PriceOptions'>Up to $1000</option>
          <option value="1000-2000" className='PriceOptions'>$1000 - $2000</option>
          <option value="2000" className='PriceOptions'>Above $2000</option>
        </select>
        {/* </div> */}
      </LabelPrice>

      <LabelType>
        Type
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="Any">Any Type</option>
          <option value="Computer Desk">Computer Desk</option>
          <option value="Kitchen Table">Kitchen Table</option>
          <option value="Coffee Table">Coffee Table</option>
        </select>
      </LabelType>

      <LabelMaterial>
        Material
        <select
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
        >
          <option value="Any">Any Material</option>
          <option value="Wood">Wood</option>
          <option value="Glass">Glass</option>
        </select>
      </LabelMaterial>

      <Labels>
        Search
        <input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Type something..."
        />
      </Labels>

      <ApplyButton onClick={handleApplyClick}>
        <p>Apply</p>
      </ApplyButton>

      </FiltersAll>
    </div>
  );
};

export default CatalogFilter;
