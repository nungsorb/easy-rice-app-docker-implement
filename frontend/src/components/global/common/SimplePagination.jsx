import LeftArrow from "../icon/chevron-left.svg";
import RightArrow from "../icon/chevron-right.svg";

function SimplePagination({ startOffset = 0, endOffset = 10, total = 0}) {
  return (
    <div className="flex items-center gap-8">
      <div className="text-sm">{startOffset}-{endOffset} of {total}</div>
      <div className="flex gap-2">
        <img className="hover:cursor-pointer" width="32px" src={LeftArrow} alt="previous" />
        <img className="hover:cursor-pointer" width="32px" src={RightArrow} alt="next" />
      </div>
    </div>
  );
}

export default SimplePagination;