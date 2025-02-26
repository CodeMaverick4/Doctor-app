import React, { useEffect, useRef, useState } from "react";
// import { SIDEBAR_CLIENT, SIDEBAR_AVAILABILITY, SIDEBAR_CALENDAR, SIDEBAR_DASHBOARD, SIDEBAR_LOGOUT, SIDEBAR_USER } from "../utils/images-constant.js"
import { SidebarTopImage, PatientIcon, AvailabilityIcon, CalendarIcon, DashboardIcon, DoctorIcon, LogoutIcon } from '../assets/all-sidebar-image-constant'
import { Link, useLocation } from "react-router-dom";
// import { CalendarDays, LayoutGridIcon, LogOut, Repeat1, UserPen, UserPlus } from "lucide-react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [showMenu, setMenu] = useState('')
  const location = useLocation();
  const [barPosition, setBarPosition] = useState(0)
  const activeRefForBar = useRef(null)

  const menuItems = [
    { id: 1, title: "Dashboard", link: '/', icon: (color = '#ffffff') => <DashboardIcon color={color} /> },
    { id: 2, title: "Patient Management", link: '/Patient', icon: (color = '#ffffff') => <PatientIcon color={color} />, subItems: ["Upcoming", "Past", "Reschedule"] },

    { id: 3, title: "Doctor Management", link: '/Doctor', icon: (color = '#ffffff') => <DoctorIcon color={color} />, subItems: ["Messages", "Alerts", "Updates"] },
    { id: 4, title: "Availabilty Management", link: '/Availabilty', icon: (color = '#ffffff') => <AvailabilityIcon color={color} />, subItems: ["Reports", "Prescriptions", "Bills"] },
    { id: 5, title: "Appointment Management", link: '/Appointment', icon: (color = '#ffffff') => <CalendarIcon color={color} />, subItems: ["Upcoming", "Past", "Reschedule"] },
    // { id: 6, title: "Logout", link: '', icon: (color = '#ffffff') => <LogoutIcon color={color} />, lucid_icon: <LogOut size={35} /> },
  ];


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

  useEffect(() => {
    if (activeRefForBar.current) {
      // console.log("useEffect",activeRefForBar.current.offsetTop)
      setBarPosition(activeRefForBar.current.offsetTop + 3)
    }
  }, [location.pathname])

  const toogleMenu = (e, title) => {
    if (title === showMenu) {
      setMenu('')
    } else {
      setMenu(title)
    }
    e.stopPropagation()
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className={`${showSidebar ? "" : "collapse"} vh-100  d-flex flex-column gap-2  align-items-center justify-content-center text-white transition-all sidebar `}>

      {/* <span className="side" ><SidebarTopImage /></span> */}
      
      <div className="position-relative">
        {menuItems.map((item, index) => (
          <div ref={location.pathname === item.link ? activeRefForBar : null} key={index} className='mt-2 mb-2 cursor-pointer d-flex flex-column  justify-content-center position-relative border-2' >
            <div className={` text-center position-relative `} onClick={(e) => toogleMenu(e, item.title)}>
              <span className={` ${location.pathname === item.link && "active"} sidebar-icon `}> {item.icon(location.pathname === item.link ? "#0167FF" : "#ffffff")}</span>
            </div>
            <p className={`px-3 text-center ${location.pathname === item.link && "active"} sidebar-label mt-1`}>{item.title}</p>

            {!item.subItems && (<Link to={item.link} onClick={(e) => toogleMenu(e, item.title)} className="stretched-link "></Link>)}

            {item.subItems && (
              <div className={` sidebar-submenu ${showMenu === item.title ? "show" : ""}`} onClick={(e)=>toogleMenu(e,item.title)}>
                <Link to={item.link} className="text-decoration-none">
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
        <div className="sidebar-link-bar" style={{ top: `${barPosition}px` }}></div>
      </div>

      {/* logout  */}
      <div className="sidebar-logout-border"></div>
      <div className='cursor-pointer d-flex flex-column  justify-content-center position-relative' >
        <div className={` text-center position-relative `}>
          <span className={`  sidebar-icon `}><LogoutIcon color={'#ffffff'} /> </span>
        </div>
        <p className={`text-center  sidebar-label mt-1`}>LogOut</p>
      </div>


    </div>
  );
};

export default Sidebar;
