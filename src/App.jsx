import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Stats from './components/Stats';
import Builder from './components/Builder';
import FaqSection from './components/FaqSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex justify-center items-center mx-auto min-h-[740px] px-4 bg-cover bg-[url('/data/icons/Header.png')]">
        <HeroSection />
      </div>
      <div className="flex justify-center items-center bg-[#00161D] min-h-[400px]">
        <About />
      </div>
      <Stats />
      <div className='flex justify-center items-center bg-[#00161D] "'>
        <Builder />
      </div>
      <div className='flex justify-center items-center bg-[#00161D] min-h-[400px]"'>
        <FaqSection />
      </div>
    </div>
  );
}