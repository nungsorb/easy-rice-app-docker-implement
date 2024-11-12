import TrashBinIcon from '../global/icon/trash-bin.svg';
import axios from 'axios';

function HistoryTableRow({ createDate, inspectionId, name, standard, note }) {
  
  const handleDelete = async () => {
    const url = 'http://localhost:3001/history';

    const body = {
      inspectionId
    };

    try {
      await axios.delete(url, {
        data: body,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 truncate max-w-56">{createDate}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{inspectionId}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-56">{standard}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 truncate max-w-sm">{note}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <button onClick={handleDelete}>
          <img className="hover:cursor-pointer" src={TrashBinIcon} alt="delete history action" />
        </button>
      </td>
    </tr>
  );
}

export default HistoryTableRow;