import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import HistoryTable from "../components/HistoryPage/HistoryTable";
import SearchBar from "../components/HistoryPage/SearchBar";
import PlusIcon from "../components/global/icon/plus-icon.svg";
import { Link } from "react-router-dom";

function HistoryPage() {
  return (
    <div>
      <div className="flex flex-col items-end mb-4">
        <Link to={"/create"}>
          <ButtonWithIcon label="Create Inspection" bgColor="green" svgIcon={PlusIcon} />
        </Link>
      </div>
      <SearchBar />
      <HistoryTable />
    </div>
  );
}

export default HistoryPage;