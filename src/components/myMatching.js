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
  },
  {
    "id": 8,
    "name": "Dr. Sophia Miller",
    "specialization": "Endocrinology",
    "status": "open",
    "image": "./images/dashboard/4.jpg"
  },
  {
    "id": 9,
    "name": "Dr. James Anderson",
    "specialization": "Gastroenterology",
    "status": "closed",
    "image": "./images/dashboard/1.jpg"
  },
  {
    "id": 10,
    "name": "Dr. Jessica Taylor",
    "specialization": "Pulmonology",
    "status": "open",
    "image": "./images/dashboard/2.jpg"
  },
  {
    "id": 11,
    "name": "Dr. William Harris",
    "specialization": "Rheumatology",
    "status": "closed",
    "image": "./images/dashboard/3.jpg"
  },
  {
    "id": 12,
    "name": "Dr. Elizabeth Martinez",
    "specialization": "Nephrology",
    "status": "open",
    "image": "./images/dashboard/4.jpg"
  },
  {
    "id": 13,
    "name": "Dr. Benjamin White",
    "specialization": "Urology",
    "status": "closed",
    "image": "./images/dashboard/1.jpg"
  },
  {
    "id": 14,
    "name": "Dr. Natalie Roberts",
    "specialization": "Oncology",
    "status": "open",
    "image": "./images/dashboard/2.jpg"
  },
  {
    "id": 15,
    "name": "Dr. Christopher Clark",
    "specialization": "Hematology",
    "status": "closed",
    "image": "./images/dashboard/3.jpg"
  },
  {
    "id": 16,
    "name": "Dr. Samantha Lewis",
    "specialization": "Infectious Disease",
    "status": "open",
    "image": "./images/dashboard/4.jpg"
  },
  {
    "id": 17,
    "name": "Dr. Andrew Hall",
    "specialization": "Allergy and Immunology",
    "status": "closed",
    "image": "./images/dashboard/1.jpg"
  }
];



export default function MyMatching() {
  const itemPerPage = 4;
  const [indexes, setIndexes] = useState({ start: 0, end: itemPerPage });
  const len_matches = matches.length;

  const toggleMatches = (direction) => {
    setIndexes((prev) => {
      let newStart = prev.start;
      let newEnd = prev.end;

      if (direction === "left") {
        if (prev.start > 0) {
          newStart = Math.max(0, prev.start - itemPerPage);
          newEnd = newStart + itemPerPage;
        }
      } else if (direction === "right") {
        if (prev.end < len_matches) {
          newStart = prev.end;
          newEnd = Math.min(len_matches, prev.end + itemPerPage);
        }
      }

      return { start: newStart, end: newEnd };
    });
  };

  return (
    <div className='bg-white mb-3 rounded-3 p-3 border'>
      <h5 className='fw-bold'>My Matching ({len_matches})</h5>
      <div className='d-flex justify-content-between mt-2'>
        <small className='fw-medium'>Ophthalmology</small>
        <div className='d-flex align-items-center gap-2'>
          <img onClick={() => toggleMatches("left")} src={DASHBOARD_CHEVRON_RIGHT_ICON} alt="" className='rotate-180' />
          <img onClick={() => toggleMatches("right")} src={DASHBOARD_CHEVRON_LEFT_ICON} alt="" />
        </div>
      </div>
      {/* list  */}

      <div className='d-flex flex-column gap-3 mt-4'>
        {matches.slice(indexes.start, indexes.end)?.map((match) => (
          <div key={match.id} className='d-flex gap-3 justify-content-between'>
            <div className='d-flex gap-3'>
              <div className='matchs_img'> <img src={match.image} alt="" /></div>
              <div>
                <h6 className='fw-bold '>{match.name}</h6>
                <small className='fw-medium'>{match.specialization}</small>
              </div>
            </div>

            <div><button className={` ${match.status == "open" ? "matches_button open" : "matches_button"} matches_button`}>{match.status}</button></div>
          </div>

        ))}
      </div>
    </div>
  )
}
