function CheckboxInput({ label }) {
  return (
    <div className="flex">
      <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-gray-600 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-default-checkbox" />
      <label htmlFor="hs-default-checkbox" className="text-sm text-gray-700 ms-2">{label}</label>
    </div>
  );  
}

export default CheckboxInput;