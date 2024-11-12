import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import HistoryTable from "../components/HistoryPage/HistoryTable";
import SearchBar from "../components/HistoryPage/SearchBar";
import PlusIcon from "../components/global/icon/plus-icon.svg";
import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-end mb-4">
        <ButtonWithIcon 
          onClick={() => navigate("/create")} 
          label="Create Inspection" 
          bgColor="green" 
          svgIcon={PlusIcon} 
        />
      </div>
      <SearchBar />
      <HistoryTable />
    </div>
  );
}

export default HistoryPage;