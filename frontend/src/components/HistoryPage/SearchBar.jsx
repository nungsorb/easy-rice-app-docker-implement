import ButtonWithIcon from "../global/input/ButtonWithIcon";
import SingleValueInput from "../global/input/SingleValueInput";
import MagnifierIcon from "../global/icon/magnifier-search.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchingBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilter, setSearchFilter] = useState({
    inspectionId: searchParams.get("inspectionId") ?? "",
    fromDate: searchParams.get("fromDate") ?? "",
    toDate: searchParams.get("toDate") ?? ""
  });

  const clearFilter = () => {
    setSearchFilter({
      inspectionId: "",
      fromDate: "",
      toDate: ""
    });
    setSearchParams({});
  }

  const search = () => {
    const cleanedParams = Object.fromEntries(
      Object.entries(searchFilter).filter(([key, value]) => value !== "")
    );
  
    const queryString = new URLSearchParams(cleanedParams).toString();
    
    navigate(`/history?${queryString}`);
    window.location.reload();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilter({
      ...searchFilter,
      [name]: value
    });
  };

  return (
    <div className="p-4 bg-white rounded-md">
      <div className="grid md:gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SingleValueInput 
          label={"ID"} 
          name={"inspectionId"} 
          value={searchFilter.inspectionId} 
          setValue={handleChange} 
          type={"text"} 
          placeholder={"Search with ID"}
        />
        <SingleValueInput 
          label={"From Date"}
          name={"fromDate"} 
          value={searchFilter.fromDate} 
          setValue={handleChange} 
          type={"date"} 
          placeholder={"Please select From Date"} 
        />
        <SingleValueInput 
          label={"To Date"} 
          name={"toDate"} 
          value={searchFilter.toDate} 
          setValue={handleChange} 
          type={"date"} 
          placeholder={"Please select To Date"}
        />
      </div>
      <div className="flex gap-4 flex-col md:flex-row md:justify-between">
        <div onClick={clearFilter} className="text-sm self-end md:self-center text-red-700 underline hover:cursor-pointer">Clear Filter</div>
        <ButtonWithIcon onClick={search} label={"Search"} bgColor={"green"} svgIcon={MagnifierIcon}/>
      </div>
    </div>
  );
}

export default SearchingBar;