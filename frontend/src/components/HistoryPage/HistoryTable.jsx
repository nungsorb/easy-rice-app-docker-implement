import SimplePagination from "../global/common/SimplePagination";
import HistoryTableRow from "./HistoryTableRow";

function HistoryTable() {
  const columns = ["Create Date - Time", "Inspection ID", "Name", "Standard", "Note", "Action"];
  
  const mockRows = () => {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      rows.push(
        <HistoryTableRow 
          id={i}
          createDate={"08/11/2024 09:00:00"} 
          inspectionId={"MI-000-0000"} 
          name={"Lorem ipsum dolor sit amet."} 
          standard={"Lorem ipsum dolor sit amet."} 
          note={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at nemo odio distinctio nobis sapiente odit fuga, in quis, cupiditate esse cum. Officiis quis aperiam rem hic, fuga animi blanditiis id tempore veniam ipsum, quam quas dicta recusandae qui neque odit ex asperiores sit amet unde architecto repellat quisquam. Rerum illum facilis, soluta quasi consectetur eveniet beatae quia, architecto porro quae nemo! Dolorum ipsam incidunt ab officiis maxime dolore, cumque, eveniet mollitia dignissimos aut delectus harum voluptates aliquid quidem eos excepturi provident illum at hic nesciunt commodi molestiae quos. Praesentium vitae tempora voluptatibus repellendus dicta alias quidem quo velit saepe!"} 
        />
      );
    }
    return rows;
  };
   
  return (
    <>
      <div class="flex flex-col my-4">
        <div class="overflow-x-auto border rounded-md">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-green-700">
                  <tr>
                    {columns.map((col, index) => 
                      <th id={index} scope="col" class="px-6 py-3 text-start text-sm font-medium text-white text-nowrap">{col}</th>
                    )}
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-300">
                  {mockRows().map((row) => row)}
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