function PercentageTableRow({ rowData }) {
  return (
    <tr className="bg-white border-b">
      {rowData.map((data, index) => 
        <td 
          key={index} 
          className={
            (index === 0 ? "" : "text-right ") + 
            (index === rowData.length - 1 ? "text-green-600 font-semibold " : "") + 
            "px-3 py-2 text-nowrap"
          }
        >
          {data}
        </td>
      )}
    </tr>
  );
}

export default PercentageTableRow;