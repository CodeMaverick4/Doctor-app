import React from 'react';
import { Bell, ChevronDown, Menu, Search, User, X } from 'lucide-react';
import {LOGO, NAVBAR_MESSAGE} from "../utils/images-constant.js"

const TopBar = ({showSidebar,setShowSidebar }) => {
    return (
        <div className="rounded-4 d-flex justify-content-between py-3 align-items-center z-2 bg-white ">
            <img src={LOGO} alt="Logo" className=' mw-100' />
            <div className='d-flex align-items-center gap-md-4 gap-2'>
                <div className="position-relative d-none d-md-block">
                    <input
                        type="text"
                        className="form-control ps-4 pe-5 py-2 rounded-3 "
                        placeholder="Search..."
                        style={{ border: "1px solid #EBEBEB" }}
                    />
                    <Search
                        className="position-absolute top-50 translate-middle-y text-secondary"
                        style={{ right: "15px" }}
                        size={20}
                    />
                </div>
                <img src={NAVBAR_MESSAGE} alt="" className='d-none d-md-block'/>
                <Bell className='d-none d-md-block'/>
                <div className="dropdown" >
                    <button
                        className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 py-2 border"
                        style={{ background: '#F0F9FD' }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <User size={20} className="text-secondary" />
                        <span className="fw-semibold d-md-block d-none">Advantal Clinic</span>
                        <ChevronDown size={18} className="text-secondary d-md-block d-none" />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
                <div className='d-md-none' onClick={(e)=>e.stopPropagation()}>
                {showSidebar ? <X className='d-block d-md-none' onClick={() => setShowSidebar(!showSidebar)} /> :
                <Menu className='d-block d-md-none' onClick={() => setShowSidebar(!showSidebar)} /> }
                 </div>

            </div>

        </div>
    );
};

export default TopBar;
