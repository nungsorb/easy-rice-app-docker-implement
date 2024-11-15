function SingleValueInput({ label, name, value, setValue, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input 
        className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        name={name}
        value={value}
        onChange={setValue}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SingleValueInput;