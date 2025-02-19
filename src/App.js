import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/mainLayout';
import Dashboard from './pages/dashboard';
import PatientManagement from './pages/patient_management';
import DoctorManagement from './pages/doctor_management';
import AvailabilityManagement from './pages/availabilityManagement';
import AppointmentManagement from './pages/appointmentManagement';

function App() {
  
  return (
    <Router>
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="" element={<Dashboard />} />
        <Route path="Patient" element={<PatientManagement />} />
        <Route path="Doctor" element={<DoctorManagement />} />
        <Route path="Availabilty" element={<AvailabilityManagement />} />
        <Route path="Appointment" element={<AppointmentManagement />} />
      
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
