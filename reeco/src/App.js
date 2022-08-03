import React from 'react';
import {Landing} from './components/landingComponent/landing';
import {NavBar} from './components/navigationComponent/navBar';
import { UtilitySection } from './components/sectionsComponents/utilitySection';

function App() {
  return (
    <div className="App">
			<NavBar/>
			<Landing/>
			<UtilitySection/>
    </div>
  );
}

export default App;
