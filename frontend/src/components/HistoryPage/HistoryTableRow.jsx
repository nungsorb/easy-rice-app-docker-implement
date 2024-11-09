import TrashBinIcon from '../global/icon/trash-bin.svg';

function HistoryTableRow({ createDate, inspectionId, name, standard, note }) {
  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate max-w-56">{createDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{inspectionId}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{standard}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-sm">{note}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <img className="hover:cursor-pointer" src={TrashBinIcon} alt="delete history action" />
      </td>
    </tr>
  );
}

export default HistoryTableRow;