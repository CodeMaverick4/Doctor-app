import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from "recharts";

// Sample data
const data = [
  { name: "General", count: 21 },
  { name: "Emergency", count: 5 },
  { name: "Neurologists", count: 15 },
  { name: "Physicians", count: 9 },
  { name: "Pathologists", count: 19 },
  { name: "Oncologists", count: 12 },
  { name: "Psychiatrists", count: 21 }
];

const BarChartComponent = () => {
  const [barSize, setBarSize] = useState(50);
  const [selectedBar, setSelectedBar] = useState(null);


  useEffect(() => {
    const updateBarSize = () => {
      if (window.innerWidth < 768) {
        setBarSize(25);
      } else {
        setBarSize(50);
      }
    };

    updateBarSize();
    window.addEventListener("resize", updateBarSize);

    return () => window.removeEventListener("resize", updateBarSize);
  }, []);
  return (
    <div className="chart-container p-3 mt-3  mt-md-5">
      <h2 className="fw-bold " style={{ fontSize: '24px' }}>Total Doctors</h2>
      <h2 className="fw-semibold " style={{ fontSize: '55px' }}>160</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          {/* x axis labels  */}
          {barSize >25 && <XAxis dataKey="name" stroke="#5083FF" axisLine={false} tickLine={false} />}
          <Bar cursor="pointer"  dataKey="count" barSize={barSize} radius={[20, 20, 20, 20]} onClick={(data) => setSelectedBar(data)}>
            {/* count appearn above the bar  */}
            <LabelList dataKey="count" position="top" fill="#000" fontSize={14} className="fw-bold " />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.count < 15 ? "#D0DDFD" : "#5083FF"} />
            ))}
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>

      <div className="d-md-none ">
        {selectedBar ? (
          <div className="d-flex flex-column gap-2 text-center mt-3">
            <span><strong>Name:</strong> {selectedBar.name}</span>
            <span><strong>Count:</strong> {selectedBar.count}</span>
          </div>
        ) : (
          <div className="mt-3 text-center">Click on a bar to see details.</div>
        )}
      </div>


    </div>
  );
};

export default BarChartComponent;


