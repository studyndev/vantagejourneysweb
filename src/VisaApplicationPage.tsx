import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import VisaApplication from './components/VisaApplication';
import Footer from './components/Footer';
import headerLogo from './assets/header-logo.png';

export default function VisaApplicationPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <TopBar />
      <NavBar logoSrc={headerLogo} />
      <main>
        <VisaApplication />
      </main>
      <Footer />
    </div>
  );
}
