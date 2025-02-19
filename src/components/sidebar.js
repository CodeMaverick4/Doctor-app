import React, { useEffect, useState } from "react";
import { SIDEBAR_CLIENT, SIDEBAR_AVAILABILITY, SIDEBAR_CALENDAR, SIDEBAR_DASHBOARD, SIDEBAR_LOGOUT, SIDEBAR_USER } from "../utils/images-constant.js"
import { Link, useLocation } from "react-router-dom";
import { CalendarDays, LayoutGridIcon, LogOut, Repeat1, UserPen, UserPlus } from "lucide-react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [showMenu, setMenu] = useState('')
  const location = useLocation();

  useEffect(() => {
    const toogleSidebarmenu = () => {
      setMenu('')
      setShowSidebar(false)
    }
    document.addEventListener('click', toogleSidebarmenu)
    return () => {
      document.removeEventListener("click", toogleSidebarmenu)
    }

  }, [])
  const menuItems = [
    { id: 1, title: "Dashboard", link: '/', lucid_icon: <LayoutGridIcon size={30} />, icon: SIDEBAR_DASHBOARD },
    { id: 2, title: "Patient Management", link: '/Patient', lucid_icon: <UserPen size={30} />, icon: SIDEBAR_USER, subItems: ["Upcoming", "Past", "Reschedule"] },
    
    { id: 3, title: "Doctor Management", link: '/Doctor', lucid_icon: <UserPlus size={30} />, icon: SIDEBAR_CLIENT, subItems: ["Messages", "Alerts", "Updates"] },
    { id: 4, title: "Availabilty Management", link: '/Availabilty', lucid_icon: <Repeat1 size={30} />, icon: SIDEBAR_AVAILABILITY, subItems: ["Reports", "Prescriptions", "Bills"] },
    { id: 5, title: "Appointment Management", link: '/Appointment', lucid_icon: <CalendarDays size={30} />, icon: SIDEBAR_CALENDAR, subItems: ["Upcoming", "Past", "Reschedule"] },
    { id: 6, title: "Logout", link: '', icon: SIDEBAR_LOGOUT, lucid_icon: <LogOut size={35} /> },
    
  ];
  const toogleMenu = (e, title) => {
    if (title === showMenu) {
      setMenu('')
    } else {
      setMenu(title)
    }
    e.stopPropagation()
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className={`${showSidebar ? "" : "collapse"} vh-100 z-3 d-flex flex-column gap-3  align-items-center justify-content-center text-white transition-all sidebar `}>
      {/* <div className=" overflow-y-auto" style={{height:"90%"}} > */}
      {menuItems.map((item, index) => (
        <div key={index} className="cursor-pointer d-flex flex-column  justify-content-center position-relative">
          <div className={` text-center `} onClick={(e) => toogleMenu(e, item.title)}>
            <span className={` ${location.pathname === item.link && "active"} sidebar-icon `}> {item.lucid_icon}</span>
          </div>
          <p className={`text-center ${location.pathname === item.link && "active"} sidebar-label mt-2`}>{item.title}</p>
          
          {!item.subItems && (<Link to={item.link} className="stretched-link"></Link>)}

          {item.subItems && (
            <div className={`sidebar-submenu ${showMenu === item.title ? "show" : ""}`}>
              <Link to={item.link} className="text-text-decoration-none">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="text-white px-3 py-2 sidebar-submenu-items">
                    {subItem}
                  </div>
                ))}
              </Link>
            </div>
          )}
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
