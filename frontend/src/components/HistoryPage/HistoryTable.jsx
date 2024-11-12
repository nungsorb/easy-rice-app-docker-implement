import { useState, useEffect } from "react";
import SimplePagination from "../global/common/SimplePagination";
import HistoryTableRow from "./HistoryTableRow";
import { convertDateFormat } from "../../util/time.js";
import axios from "axios";

function HistoryTable() {
  const columns = ["Create Date - Time", "Inspection ID", "Name", "Standard", "Note", "Action"];
  const [inspectionHistory, setInspectionHistory] = useState(null)

  useEffect(() => {
    const fetchHistory = async () => {
      const apiUrl = 'http://localhost:3001/history';
      try {
        const response = await axios.get(apiUrl);
        setInspectionHistory(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHistory();
  }, []);
   
  return (
    <>
      <div className="flex flex-col my-4">
        <div className="overflow-x-auto border rounded-md">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-green-700">
                  <tr>
                    {columns.map((col, index) => 
                      <th key={index} scope="col" className="px-6 py-3 text-start text-sm font-medium text-white text-nowrap">{col}</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {inspectionHistory?.map((record, index) => 
                    <HistoryTableRow
                      key={index}
                      createDate={convertDateFormat(record.createDate)} 
                      inspectionId={record.inspectionId} 
                      name={record.name} 
                      standard={record.standardName} 
                      note={record.note} 
                  />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SimplePagination total={100} />
    </>
  );
}

export default HistoryTable;