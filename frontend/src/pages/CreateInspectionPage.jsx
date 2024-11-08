import SamplingPointCheckbox from "../components/CreateInspectionPage/SamplingPointCheckbox";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import DropdownInput from "../components/global/input/DropdownInput";
import FileInput from "../components/global/input/FileInput";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";
import SingleValueInput from "../components/global/input/SingleValueInput";

function CreateInspectionPage() {
  const standards = [
    { name: "Please Select Standard", value: null },
    { name: "Standard 1", value: "standard_1" },
    { name: "Standard 2", value: "standard_2" },
  ];

  return (
    <div className="bg-white p-4 rounded-md max-w-96 m-auto">
      <div className="mb-4 text-lg font-bold text-gray-700">Create Inspection</div>
      <div className="flex flex-col">
        <SingleValueInput label={"Name*"} type={"text"} placeholder={"..."}/>
        <DropdownInput label={"Standard*"} options={standards} />
        <FileInput label={"Upload File"} />
        <div className="border-b-2 mb-4" />
        <SingleValueInput label={"Note"} type={"text"} placeholder={"..."}/>
        <SingleValueInput label={"Price"} type={"text"} placeholder={"..."}/>
        <SamplingPointCheckbox />
        <SingleValueInput label={"Date/Time of Sampling"} type={"datetime-local"} placeholder={"..."}/>
      </div>
      <div className="flex gap-2 justify-end">
        <NoFillButtonWithIcon label={"Cancel"} borderColor={"green"} />
        <ButtonWithIcon label={"Submit"} bgColor={"green"} />
      </div>
    </div>
  );
}

export default CreateInspectionPage;