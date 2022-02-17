import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App=()=>{
  const pageSize=15 ;
  const apiKey=process.env.REACT_APP_NEWS_API;

  
    return( 
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route exact path="/General" element={<News key="General" apiKey={apiKey} pageSize={pageSize} country="in" category="General" />} />
          <Route exact path="/Business" element={<News key="Business" apiKey={apiKey} pageSize={pageSize} country="in" category="Business" />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="Entertainment" />} />
          <Route exact path="/General" element={<News key="General" apiKey={apiKey} pageSize={pageSize} country="in" category="General" />} />
          <Route exact path="/Health" element={<News key="Health" apiKey={apiKey} pageSize={pageSize} country="in" category="Health" />} />
          <Route exact path="/Science" element={<News key="Science" apiKey={apiKey} pageSize={pageSize} country="in" category="Science" />} />
          <Route exact path="/Sports" element={<News key="Sports" apiKey={apiKey} pageSize={pageSize} country="in" category="Sports" />} />
          <Route exact path="/Technology" element={<News key="Technology" apiKey={apiKey} pageSize={pageSize} country="in" category="Technology" />} />

        </Routes>
      </BrowserRouter>
    </div>
    )
  
}
export default App;