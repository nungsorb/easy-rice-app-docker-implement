import CheckboxInput from "../global/input/CheckboxInput";

function SamplingPointCheckbox() {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Sampling Point
      </label>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-10">
        <CheckboxInput label={"Front End"} />
        <CheckboxInput label={"Back End"} />
        <CheckboxInput label={"Other"} />
      </div>
    </div>
  );
}

export default SamplingPointCheckbox;