function ButtonWithIcon({ label = "Button", bgColor = "blue", svgIcon = null, onClick = () => {} }) {
  
  const bgColorDict = {
    blue: "bg-blue-700 hover:bg-blue-800 ",
    green: "bg-green-700 hover:bg-green-800 ",
  };

  return (
    <div 
      onClick={onClick} 
      className={bgColorDict[bgColor] + "flex justify-center items-center gap-1 text-white hover:cursor-pointer py-2 px-3 rounded-md text-sm text-center"}
    >
      {svgIcon &&
        <div>
          <img width="18px" src={svgIcon} alt="button icon" />
        </div>
      }
      <div className="mb-[1.5px]">{label}</div>
    </div>
  );
}

export default ButtonWithIcon;