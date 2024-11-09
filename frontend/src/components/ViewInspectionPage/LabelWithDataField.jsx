function LabelWithDataField({ label, data }) {
  return (
    <div className="mb-2 text-sm overflow-auto">
      <div className="break-words text-gray-700 font-semibold">{label}</div>
      <div className="break-words line-clamp-3 text-gray-700">{data}</div>
    </div>
  );
}

export default LabelWithDataField;