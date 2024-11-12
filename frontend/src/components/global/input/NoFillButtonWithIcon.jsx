function NoFillButtonWithIcon({ label = "Button", borderColor = "blue", svgIcon = null, onClick = () => {} }) {
  
  const borderColorDict = {
    blue: "border-blue-700 hover:border-blue-800 text-blue-700 hover:text-blue-800 ",
    green: "border-green-700 hover:border-green-800 text-green-700 hover:text-green-800 ",
  }

  return (
    <button 
      onClick={onClick}
      className={borderColorDict[borderColor] + "flex justify-center items-center gap-1 border-2 hover:cursor-pointer py-2 px-3 rounded-md text-sm text-center"}
    >
      {svgIcon &&
        <div>
          <img width="18px" src={svgIcon} alt="button icon" />
        </div>
      }
      <div className="mb-[1.5px]">{label}</div>
    </button>
  );
}

export default NoFillButtonWithIcon;