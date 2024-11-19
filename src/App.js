import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import BasicInfo from "./components/BasicInfo"
import ThankYou from "./components/ThankYou"

import './styles.css'

export default function App() {
    const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
    const [basicData, setBasicData] = useState(initBasicData);

    useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
    }, [basicData]);
      // Function to add basicData to state and localStorage
    const addBasicData = (name, email, contact) => {
        // Create an object with the provided basic data
        const myBasicData = {
            name: name,
            email: email,
            contact: contact
        }

        // Update the basicData state with the new data
        setBasicData(myBasicData);
        // Update the localStorage with the new basicData
        localStorage.setItem("data", JSON.stringify(myBasicData));
    }

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Router>
          <Routes>
            <Route path='/' element={<BasicInfo addBasicData={addBasicData} />} />
            <Route path='/thanks' element={<ThankYou />}/>
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}
