import Sidebar from "../components/sidebar";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TopBar from "../components/topbar";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)


  return (
    <div className="d-flex gap-2 ">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* Main Content */}
      <div className="z-1 w-100 px-3 d-flex flex-column bg-white  mt-md-2  me-md-2 custom-radius " >
        <TopBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout