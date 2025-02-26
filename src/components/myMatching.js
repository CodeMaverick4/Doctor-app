import React, { useState } from 'react'
import { DASHBOARD_CHEVRON_LEFT_ICON, DASHBOARD_CHEVRON_RIGHT_ICON } from '../utils/images-constant'


const matches = [
  {
    "id": 1,
    "name": "Dr. Alice Johnson",
    "specialization": "Cardiology",
    "status": "open",
    "image": "./images/dashboard/1.jpg"
  },
  {
    "id": 2,
    "name": "Dr. Brian Carter",
    "specialization": "Neurology",
    "status": "closed",
    "image": "./images/dashboard/2.jpg"
  },
  {
    "id": 3,
    "name": "Dr. Stacy Mitchell",
    "specialization": "Ophthalmology",
    "status": "open",
    "image": "./images/dashboard/3.jpg"
  },
  {
    "id": 4,
    "name": "Dr. Daniel Lee",
    "specialization": "Pediatrics",
    "status": "open",
    "image": "./images/dashboard/4.jpg"
  },
  {
    "id": 5,
    "name": "Dr. Emily Davis",
    "specialization": "Dermatology",
    "status": "closed",
    "image": "./images/dashboard/1.jpg"
  },
  {
    "id": 6,
    "name": "Dr. Michael Brown",
    "specialization": "Orthopedics",
    "status": "open",
    "image": "./images/dashboard/2.jpg"
  },
  {
    "id": 7,
    "name": "Dr. Olivia Wilson",
    "specialization": "Psychiatry",
    "status": "closed",
    "image": "./images/dashboard/3.jpg"
  }
];


export default function MyMatching() {
  const [indexes, setIndexes] = useState({ start: 0, end: 4 });
  const itemPerPage = 4;
  const len_matches = matches.length;

  const toggleMatches = (direction) => {
    if (direction === "left") {
      if (indexes.start > 0) {
        let tempStart = indexes.start - itemPerPage;
        let tempEnd = indexes.end - itemPerPage;
        setIndexes({ start: Math.max(0, tempStart), end: Math.max(itemPerPage, tempEnd) });
      }
    } else if (direction === "right") {
      if (indexes.end < len_matches) {
        let tempStart = indexes.start + itemPerPage;
        let tempEnd = indexes.end + itemPerPage;
        setIndexes({ start: tempStart, end: Math.min(len_matches, tempEnd) });
      }
    }
  };

  return (
    <div className='bg-white mb-3 rounded-3 p-3 border'>
      <h5 className='fw-bold'>My Matching</h5>
      <div className='d-flex justify-content-between mt-2'>
        <span>Ophthalmology</span>
        <div className='d-flex align-items-center gap-2'>
          <img onClick={() => toggleMatches("left")} src={DASHBOARD_CHEVRON_RIGHT_ICON} alt="" className='rotate-180' />
          <img onClick={() => toggleMatches("right")} src={DASHBOARD_CHEVRON_LEFT_ICON} alt="" />
        </div>
      </div>
      {/* list  */}

      <div className='d-flex flex-column gap-3 mt-4'>
        {matches.slice(indexes.start, indexes.end)?.map((match) => (
          <div className='d-flex gap-3 justify-content-between'>
            <div className='d-flex gap-3'>
              <div className='matchs_img'> <img src={match.image} alt="" /></div>
              <div>
                <p>{match.name}</p>
                <p>{match.specialization}</p>
              </div>
            </div>

            <div><button className={` ${match.status == "open" ? "matches_button open" : "matches_button"} matches_button`}>{match.status}</button></div>
          </div>

        ))}
      </div>
    </div>
  )
}
