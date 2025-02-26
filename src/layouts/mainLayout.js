import Sidebar from "../components/sidebar";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import TopBar from "../components/topbar";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)


  return (
    <div className="d-flex body-background-color">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* Main Content */}
      <div className=" w-100 px-md-3 px-2 d-flex flex-column   mt-md-2  me-md-2 custom-radius dashboard-background " >
        <TopBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="topBar-background"></div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout