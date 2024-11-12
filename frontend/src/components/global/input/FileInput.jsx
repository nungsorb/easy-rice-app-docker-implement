function FileInput({ label, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input 
        type="file"
        onChange={setValue}
        className="text-sm shadow block w-full border border-gray-200 rounded text-gray-700 focus:z-10 focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none
        file:bg-gray-50 file:border-0
          file:me-4
          file:py-2 file:px-3"
      />
    </div>
  );
}

export default FileInput;