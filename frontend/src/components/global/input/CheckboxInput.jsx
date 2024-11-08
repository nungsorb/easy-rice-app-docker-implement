function CheckboxInput({ label }) {
  return (
    <div class="flex">
      <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-600 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-default-checkbox" />
      <label for="hs-default-checkbox" class="text-sm text-gray-700 ms-2">{label}</label>
    </div>
  );  
}

export default CheckboxInput;