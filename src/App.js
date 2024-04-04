import React,{useState,useEffect} from 'react';
import LandingPage from './Pages/LandingPage';
import Loader from './Components/Loader/Loader';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  });

  return (
    <>
    { loading ? <Loader/> : <LandingPage /> }
    </>
  );
}

export default App;
