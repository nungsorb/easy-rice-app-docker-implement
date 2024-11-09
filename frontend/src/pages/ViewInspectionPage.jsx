import LabelWithDataField from "../components/ViewInspectionPage/LabelWithDataField";
import PercentageTable from "../components/ViewInspectionPage/PercentageTable";
import PercentageTableRow from "../components/ViewInspectionPage/PercentageTableRow";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";

function ViewInspectionPage() {
  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <div className="flex flex-col gap-2 self-center lg:self-start max-w-72">
        <div>
          <img 
            src="https://easyrice-es-trade-data.s3.ap-southeast-1.amazonaws.com/example-rice.webp" 
            alt="example rice" 
          />
        </div>
        <div className="flex gap-2 justify-end">
          <NoFillButtonWithIcon label={"Back"} borderColor={"green"} />
          <ButtonWithIcon label={"Edit"} bgColor={"green"} />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-slate-200 rounded-md">
        <div className="p-4 bg-white rounded-md grid lg:grid-cols-2 gap-x-6">
          <LabelWithDataField label={"Create Date - Time"} data={"09/11/2024 - 09:00:00"} />
          <LabelWithDataField label={"Inspection ID"} data={"EC-0000-0000"} />
          <LabelWithDataField label={"Standard"} data={"Standard 1"} />
          <LabelWithDataField label={"Total Sample"} data={"42 Kernal"}/>
          <LabelWithDataField label={"Update Date - Time"} data={"09/11/2024 - 09:00:00"} />
        </div>
        <div className="p-4 bg-white rounded-md grid lg:grid-cols-2 gap-x-6">
          <LabelWithDataField label={"Note"} data={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis aliquid rerum rem architecto! Unde quia modi quisquam labore vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis aliquid rerum rem architecto! Unde quia modi quisquam labore vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facilis aliquid rerum rem architecto! Unde quia modi quisquam labore vero."} />
          <LabelWithDataField label={"Price"} data={"12,345"} />
          <LabelWithDataField label={"Data/Time of Sampling"} data={"09/11/2024 - 09:00:00"} />
          <LabelWithDataField label={"Sampling Point"} data={"Front End, Back End, Other"} />
        </div>
        <div className="p-4 bg-white">
          <div className="font-bold text-slate-700 text-lg mb-4">Composition</div>
          <PercentageTable columns={["Name", "Length", "Actual"]}>
            <PercentageTableRow rowData={["ข้าวเต็มเมล็ด", ">= 7", "0.00 %"]} />
            <PercentageTableRow rowData={["ข้าวหักใหญ่", "3.5 - 6.99", "0.00 %"]} />
            <PercentageTableRow rowData={["ข้าวหักธรรมดา", "0 - 3.49", "0.00 %"]} />
          </PercentageTable>
        </div>
        <div className="p-4 bg-white">
          <div className="font-bold text-slate-700 text-lg mb-4">Defect</div>
          <PercentageTable columns={["Name", "Actual"]}>
            <PercentageTableRow rowData={["yellow", "0.00 %"]} />
            <PercentageTableRow rowData={["paddy", "0.00 %"]} />
            <PercentageTableRow rowData={["damaged", "0.00 %"]} />
          </PercentageTable>
        </div>
      </div>
    </div>
  );
}

export default ViewInspectionPage;