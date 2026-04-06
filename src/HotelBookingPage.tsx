import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HotelBooking from './components/HotelBooking';
import Footer from './components/Footer';
import headerLogo from './assets/header-logo.png';

export default function HotelBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <main>
        <HotelBooking />
      </main>
      <Footer />
    </div>
  );
}
