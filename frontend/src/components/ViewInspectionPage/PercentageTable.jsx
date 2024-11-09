function PercentageTable({ children, columns }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-gray-700 bg-slate-200">
          <tr>
            {columns.map((name, index) => 
              <th 
                key={index} 
                scope="col" 
                className={
                  (index === 0 ? "w-4/5 " : "text-right ") + 
                  "px-3 py-2 text-nowrap"
                }
              >
                {name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default PercentageTable;