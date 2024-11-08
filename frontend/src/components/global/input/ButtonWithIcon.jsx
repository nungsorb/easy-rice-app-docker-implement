function ButtonWithIcon({ label = "Button", bgColor, svgIcon = null }) {

  return (
    <div className={`flex justify-center items-center gap-1 bg-${bgColor}-700 hover:bg-${bgColor}-800 text-white hover:cursor-pointer py-2 px-3 rounded-md text-sm text-center`}>
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