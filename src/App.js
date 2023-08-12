import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { createContext, useState } from 'react';
import Home from './Component/Home/Home';

export const Mycontext = createContext();

function App() {

  const [showarea, setShowarea] = useState(
    {
      id: 1,
      title: "Cox Bazar",
      description: "Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
      img: "https://i.ibb.co/p1Fm5yD/coxsbazar.png"
    }
  )

  return (
    <Mycontext.Provider value={[showarea, setShowarea]}>
      <div className="App">
        <Home></Home>
      </div>
    </Mycontext.Provider>
  );
}

export default App;
