import { useEffect, useState } from "react";
import SamplingPointCheckbox from "../components/CreateInspectionPage/SamplingPointCheckbox";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";
import SingleValueInput from "../components/global/input/SingleValueInput";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditInspectionPage() {
  const navigate = useNavigate();
  const { inspectionId } = useParams();
  const [inputFields, setInputFields] = useState({
    name: "",
    note: "",
    price: "",
    samplingDate: ""
  });

  const [samplingPoints, setSamplingPoints] = useState({
    "Front End": false,
    "Back End": false,
    "Other": false,
  });

  useEffect(() => {
    const fetchInspectionData = async () => {
      const apiUrl = `http://localhost:3001/history/${inspectionId}`;
      try {
        const response = await axios.get(apiUrl);
        const inspectionData = response.data.data;
        setInputFields({
          name: inspectionData.name,
          note: inspectionData.note,
          price: inspectionData.price,
          samplingDate: new Date(inspectionData.samplingDate).toISOString().slice(0, 16)
        });
        setSamplingPoints({
          "Front End": inspectionData.samplingPoint.includes("Front End"),
          "Back End": inspectionData.samplingPoint.includes("Back End"),
          "Other": inspectionData.samplingPoint.includes("Other")
        });
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchInspectionData();
    console.log(samplingPoints);
  }, []);

  const handleSingleValueInputChange = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value
    });
  };

  const handleSamplingPointCheckbox = (e) => {
    const { name, checked } = e.target;
    setSamplingPoints((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/history/${inspectionId}`, {
        ...inputFields,
        samplingPoint: Object.entries(samplingPoints).filter(([_, value]) => value === true).map(([key]) => key),
      });
      navigate(`/view/${inspectionId}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-white p-4 rounded-md max-w-96 m-auto">
      <div className="mb-4 text-lg font-bold text-gray-700">Edit Inspection ID: {inspectionId}</div>
      <div className="flex flex-col">
        <SingleValueInput label={"Note"} name={"note"} value={inputFields.note} setValue={handleSingleValueInputChange} type={"text"} placeholder={"..."}/>
        <SingleValueInput label={"Price"} name={"price"} value={inputFields.price} setValue={handleSingleValueInputChange} type={"text"} placeholder={"..."}/>
        <SamplingPointCheckbox value={samplingPoints} setValue={handleSamplingPointCheckbox} />
        <SingleValueInput label={"Date/Time of Sampling"} name={"samplingDate"} value={inputFields.samplingDate} setValue={handleSingleValueInputChange} type={"datetime-local"} placeholder={"..."}/>
      </div>
      <div className="flex gap-2 justify-end">
        <NoFillButtonWithIcon onClick={() => navigate(-1)} label={"Cancel"} borderColor={"green"} />
        <ButtonWithIcon onClick={handleUpdate} label={"Submit"} bgColor={"green"} />
      </div>
    </div>
  );
}

export default EditInspectionPage;