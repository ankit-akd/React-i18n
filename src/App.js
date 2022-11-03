import React from 'react';

import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    
    <div className="App">
      <header>
        <strong style={{width:300}}>Internationalization & Localization</strong>
        </header>
       <br></br>
          
          <select className="custom-select" style={{width:200}} onChange={changeLanguageHandler}>
            <option value="en">English</option>
            <option value="hn">Hindi</option>
            </select>
          <p>{t('ankit')}</p>
          <p>{t('location')}</p>
        
     
    </div>
      
  );
}

export default App;
