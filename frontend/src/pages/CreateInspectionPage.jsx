import SamplingPointCheckbox from "../components/CreateInspectionPage/SamplingPointCheckbox";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import DropdownInput from "../components/global/input/DropdownInput";
import FileInput from "../components/global/input/FileInput";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";
import SingleValueInput from "../components/global/input/SingleValueInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { serialize } from 'object-to-formdata';

function CreateInspectionPage() {
  const navigate = useNavigate();
  const [standards, setStandards] = useState(null);
  const [inputFields, setInputFields] = useState({
    name: "",
    note: "",
    price: "",
    samplingDate: ""
  });
   
  const [selectedStandardIndex, setSelectStandardIndex] = useState(0);
  const [resultFile, setResultFile] = useState(null);
  const [samplingPoints, setSamplingPoints] = useState({
    "Front End": false,
    "Back End": false,
    "Other": false,
  });

  useEffect(() => {
    const fetchStandards = async () => {
      const apiUrl = `http://localhost:3001/standard`;
      try {
        const response = await axios.get(apiUrl);
        setStandards(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStandards();
  }, []);

  const handleSingleValueInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setResultFile(selectedFile);
  };

  const handleSamplingPointCheckbox = (e) => {
    const { name, checked } = e.target;
    setSamplingPoints((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCreateInspection = async () => {
    const selectedStandard = standards[selectedStandardIndex];
    const data = {
      ...inputFields,
      samplingPoint: Object.entries(samplingPoints).filter(([_, value]) => value === true).map(([key]) => key),
      standardId: selectedStandard.id,
      standardName: selectedStandard.name,
      standardData: selectedStandard.standardData
    }
    try {
      const formData = serialize(data, { indices: true });
      if (resultFile) {
        formData.append('file', resultFile);
      }
      const response = await axios.post('http://localhost:3001/history', 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-white p-4 rounded-md max-w-96 m-auto">
      <div className="mb-4 text-lg font-bold text-gray-700">Create Inspection</div>
      <div className="flex flex-col">
        <SingleValueInput label={"Name*"} name={"name"} value={inputFields.name} setValue={handleSingleValueInputChange} type={"text"} placeholder={"..."}/>
        <DropdownInput label={"Standard*"} value={selectedStandardIndex} setValue={(e) => setSelectStandardIndex(Number(e.target.value))} options={standards} />
        <FileInput label={"Upload File"} setValue={handleFileChange} />
        <div className="border-b-2 mb-4" />
        <SingleValueInput label={"Note"} name={"note"} value={inputFields.note} setValue={handleSingleValueInputChange} type={"text"} placeholder={"..."}/>
        <SingleValueInput label={"Price"} name={"price"} value={inputFields.price} setValue={handleSingleValueInputChange} type={"text"} placeholder={"..."}/>
        <SamplingPointCheckbox value={samplingPoints} setValue={handleSamplingPointCheckbox} />
        <SingleValueInput label={"Date/Time of Sampling"} name={"samplingDate"} value={inputFields.samplingDate} setValue={handleSingleValueInputChange} type={"datetime-local"} placeholder={"..."}/>
      </div>
      <div className="flex gap-2 justify-end">
        <NoFillButtonWithIcon onClick={() => navigate(-1)} label={"Cancel"} borderColor={"green"} />
        <ButtonWithIcon onClick={handleCreateInspection} label={"Submit"} bgColor={"green"} />
      </div>
    </div>
  );
}

export default CreateInspectionPage;