import React, { useState } from 'react';
import UpcomingEvents from "../components/upcomming";
import BarChartComponent from "../components/barchart";
import MyCalendar from "../components/calender";
import { DOCTOR_IMAGE, CARD_UP_TREND, CARD_DOWN_TREND } from "../utils/images-constant.js"
import MyMatching from '../components/myMatching.js';

export default function Dashboard() {


  return (
    <div className="d-flex flex-column flex-md-row gap-3 overflow-y-auto mt-4 pt-1 ">
      {/* total patient and bar chart  */}
      <div className="flex-grow-1 ">

        <p className='dashboard-hero-section-heading'>Good Morning <span className="fw-bold" >Advantal Clinic</span></p>
        {/* row 2  */}
        <div className="mt-3 bg-gradient-custom d-flex align-items-center py-4 position-relative">
          <div className="px-3 flex-grow-1">
            <div className="mb-5">
              <h2 className="fw-semibold">Total Patient</h2>
              <p className="fs-1 fw-bold">106</p>
            </div>

            <div className=" d-flex flex-column flex-md-row gap-3" >
              {/* card 1  */}
              <div className="d-flex flex-column justify-content-between rounded-4 p-3 card ">
                <span className="fs-4 fw-medium" >Online</span>
                <div className="d-flex justify-content-between ">
                  <span className="fw-bold fs-3">40</span>
                  <span className="card-trend card-green rounded-4 px-2 py-1 "><span className="fw-semibold  ">51%</span><img src={CARD_UP_TREND} alt="" /></span>
                </div>
              </div>

              {/* card 2 */}
              <div className="z-3 d-flex flex-column justify-content-between rounded-4 p-3 card ">
                <span className="fs-4 fw-medium" >Offline</span>
                <div className="d-flex justify-content-between ">
                  <span className="fw-bold fs-3">64</span>
                  <span className="card-trend card-red rounded-4 px-2 py-1 "><span className="fw-semibold ">20%</span><img src={CARD_DOWN_TREND} alt="" /></span>
                </div>
              </div>
            </div>
          </div>

          <div className=" d-none d-xl-block  ">
            <img
              src={DOCTOR_IMAGE}
              alt="Patients"
              className="position-absolute  "
              style={{right:'10px', bottom: '0px' }}
            />
          </div>
        </div>

        <BarChartComponent />
      </div>

      {/* calender and upcomming event   */}
      <div className=''>
        <MyMatching /> 
        <div className='bg-white border rounded-3 mt-3 mt-md-4'>
          <MyCalendar />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  )
}
