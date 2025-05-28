import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // disable: () => window.innerWidth < 768,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 100,
      delay: 0,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Optional: refresh AOS on window resize
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </>
  )
}

export default App
