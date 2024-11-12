function DropdownInput({ label, value, setValue, options }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={setValue}
        className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {options?.map((option, index) => 
          <option key={index} value={index}>{option.name}</option>
        )}
      </select>
    </div>
  );
}

export default DropdownInput;