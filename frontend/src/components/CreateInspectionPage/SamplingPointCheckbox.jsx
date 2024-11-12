import CheckboxInput from "../global/input/CheckboxInput";

function SamplingPointCheckbox({ value, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Sampling Point
      </label>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-10">
        <CheckboxInput label={"Front End"} name={"Front End"} value={value["Front End"]} setValue={setValue} />
        <CheckboxInput label={"Back End"} name={"Back End"} value={value["Back End"]} setValue={setValue} />
        <CheckboxInput label={"Other"} name={"Other"} value={value["Other"]} setValue={setValue} />
      </div>
    </div>
  );
}

export default SamplingPointCheckbox;