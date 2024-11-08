import { Outlet, Link } from "react-router-dom";

function TemplateWithNavbar() {
  return (
    <>
      <div className="p-4 bg-slate-200 flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/history"}>History</Link>
      </div>
      <div className="mx-auto p-4 my-6 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32">
        <Outlet />
      </div>
    </>
  );
}


export default TemplateWithNavbar;