
import ButtonWithIcon from "../global/input/ButtonWithIcon";
import InputText from "../global/input/InputText";
import MagnifierIcon from "../global/icon/magnifier-search.svg";

function SearchingBar() {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="grid md:gap-x-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <InputText label={"ID"} type={"text"} placeholder={"Search with ID"} />
        <InputText label={"From Date"} type={"date"} placeholder={"Please select From Date"} />
        <InputText label={"To Date"} type={"date"} placeholder={"Please select To Date"} />
      </div>
      <div className="flex gap-4 flex-col md:flex-row md:justify-between">
        <div className="text-sm self-end md:self-center text-red-700 underline hover:cursor-pointer">Clear Filter</div>
        <ButtonWithIcon label={"Search"} bgColor={"green"} svgIcon={MagnifierIcon}/>
      </div>
    </div>
  );
}

export default SearchingBar;