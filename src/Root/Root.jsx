import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      Navbar
      <div className="min-h-screen">
        <Outlet />
      </div>
     Footer
    </>
  );
};

export default Root;
