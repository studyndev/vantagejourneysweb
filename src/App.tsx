import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import TicketingPage from './TicketingPage';
import HotelBookingPage from './HotelBookingPage';
import VisaApplicationPage from './VisaApplicationPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ticketing" element={<TicketingPage />} />
      <Route path="/hotel-booking" element={<HotelBookingPage />} />
      <Route path="/visa-application" element={<VisaApplicationPage />} />
    </Routes>
  );
}
