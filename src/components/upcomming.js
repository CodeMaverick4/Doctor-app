import React from "react";

const events = [
  {
    id: 1,
    title: "Team Meeting",
    date: "Feb 15, 2025",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Project Kickoff",
    date: "Feb 20, 2025",
    time: "02:00 PM",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Feb 25, 2025",
    time: "04:30 PM",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Feb 25, 2025",
    time: "04:30 PM",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Feb 25, 2025",
    time: "04:30 PM",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Feb 25, 2025",
    time: "04:30 PM",
  },
  {
    id: 3,
    title: "Client Presentation",
    date: "Feb 25, 2025",
    time: "04:30 PM",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="">
      {/* Section Header */}
      <div className="p-3 d-flex justify-content-between align-items-center ">
        <h5 className="mb-0 fw-bold">Upcoming</h5>
        <a href="#" className="text-primary text-decoration-none fw-semibold">View All</a>
      </div>

      {/* Event Cards */}
      <div className="d-flex flex-column gap-3 overflow-y-auto" style={{height:"350px"}}>
        {events.map((event) => (
          <div key={event.id} className="d-flex align-items-center gap-4 pt-2 pb-2 pe-2 border rounded-4 " style={{background:'#F0F9FD'}}>
            {/* <img src="./images/ellipse.svg" alt={event.title} className="rounded me-3" width="60" height="60" /> */}
            <div className="rounded-end-circle bg-primary p-3  text-white text-center">M</div>

            <div>
              <h6 className="mb-1 fw-semibold">{event.title}</h6>
              <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                {event.date} | {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
