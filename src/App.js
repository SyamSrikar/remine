import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { useState,useEffect } from 'react';
import Footer from './components/Footer';

const App=()=> {

  const [click,setClick]=useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
const [isMobile,setIsMobile]=useState(false)
useEffect(() => {
  setIsMobile(width<=820);
}, [width])


  return (
    <>
      <Home value={isMobile}/>
      <About value={isMobile}/>
      <Contact value={isMobile}/>
      <Footer/>
    </>
  );
}

export default App;
