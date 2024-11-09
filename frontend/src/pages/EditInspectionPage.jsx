import SamplingPointCheckbox from "../components/CreateInspectionPage/SamplingPointCheckbox";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";
import SingleValueInput from "../components/global/input/SingleValueInput";

function EditInspectionPage() {
  return (
    <div className="bg-white p-4 rounded-md max-w-96 m-auto">
      <div className="mb-4 text-lg font-bold text-gray-700">Edit Inspection ID: EC-0000-0000</div>
      <div className="flex flex-col">
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

export default EditInspectionPage;