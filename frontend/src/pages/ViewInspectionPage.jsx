import LabelWithDataField from "../components/ViewInspectionPage/LabelWithDataField";
import PercentageTable from "../components/ViewInspectionPage/PercentageTable";
import PercentageTableRow from "../components/ViewInspectionPage/PercentageTableRow";
import ButtonWithIcon from "../components/global/input/ButtonWithIcon";
import NoFillButtonWithIcon from "../components/global/input/NoFillButtonWithIcon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { convertDateFormat } from "../util/time";

function ViewInspectionPage() {
  const navigate = useNavigate();
  const { inspectionId } = useParams();
  const [inspectionData, setInspectionData] = useState(null);

  useEffect(() => {
    const fetchInspectionData = async () => {
      const apiUrl = `http://localhost:3001/history/${inspectionId}`;
      try {
        const response = await axios.get(apiUrl);
        setInspectionData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchInspectionData();
  }, []);

  const lengthCriteriaString = (conditionMin, minLength, conditionMax, maxLength) => {
    const operators = {
      LT: '<', 
      LE: '<=',
      GT: '>',
      GE: '>=',
      EQ: '=',   
      NE: '!='
    };

    const minConditionString = conditionMin ? `${operators[conditionMin]}${minLength.toFixed(2)}` : '';
    const maxConditionString = conditionMax ? `${operators[conditionMax]}${maxLength.toFixed(2)}` : '';
    if (minConditionString === maxConditionString) {
      return minConditionString;
    }
    
    return `${minConditionString} ${maxConditionString}`
  }

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
          <NoFillButtonWithIcon onClick={() => navigate(-1)} label={"Back"} borderColor={"green"} />
          <ButtonWithIcon onClick={() => navigate(`/edit/${inspectionId}`)} label={"Edit"} bgColor={"green"} />
        </div>
      </div>
      {inspectionData ?
        (
          <div className="flex flex-col gap-4 p-4 bg-slate-200 rounded-md w-full">
            <div className="p-4 bg-white rounded-md grid lg:grid-cols-2 gap-x-6">
              <LabelWithDataField label={"Create Date - Time"} data={convertDateFormat(inspectionData.createDate)} />
              <LabelWithDataField label={"Inspection ID"} data={inspectionData.inspectionId} />
              <LabelWithDataField label={"Standard"} data={inspectionData.standardName} />
              <LabelWithDataField label={"Result Path"} data={inspectionData.resultPath ?? 'No file upload'} />
              <LabelWithDataField
                label={"Update Date - Time"}
                data={inspectionData.updateDate ? convertDateFormat(inspectionData.updateDate) : '-'}
              />
            </div>
            <div className="p-4 bg-white rounded-md grid lg:grid-cols-2 gap-x-6">
              <LabelWithDataField label={"Note"} data={inspectionData.note} />
              <LabelWithDataField label={"Price"} data={inspectionData.price} />
              <LabelWithDataField 
                label={"Data/Time of Sampling"} 
                data={inspectionData.samplingDate ? convertDateFormat(inspectionData.samplingDate) : '-'}
              />
              <LabelWithDataField label={"Sampling Point"} data={inspectionData.samplingPoint.join(', ')} />
            </div>
            <div className="p-4 bg-white">
              <div className="font-bold text-slate-700 text-lg mb-4">Composition</div>
              <PercentageTable columns={["Name", "Length", "Actual"]}>
                {inspectionData.standardData.map((data, index) => 
                  <PercentageTableRow 
                    key={index} 
                    rowData={
                      [
                        data.name, 
                        lengthCriteriaString(data.conditionMin, data.minLength, data.conditionMax, data.maxLength),
                        "0.00 %"
                      ]
                    } 
                  />
                )}
              </PercentageTable>
            </div>
            <div className="p-4 bg-white">
              <div className="font-bold text-slate-700 text-lg mb-4">Defect</div>
              <PercentageTable columns={["Name", "Actual"]}>
                <PercentageTableRow rowData={["yellow", "0.00 %"]} />
                <PercentageTableRow rowData={["paddy", "0.00 %"]} />
                <PercentageTableRow rowData={["damaged", "0.00 %"]} />
                <PercentageTableRow rowData={["glutinous", "0.00 %"]} />
                <PercentageTableRow rowData={["chalky", "0.00 %"]} />
                <PercentageTableRow rowData={["red", "0.00 %"]} />
                <PercentageTableRow rowData={["total", "0.00 %"]} />
              </PercentageTable>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center text-center gap-4 p-4 bg-slate-200 rounded-md w-full">
            <div className="">
              ~ No Data Found ~
            </div>
          </div>
        )
      }
    </div>
  );
}

export default ViewInspectionPage;