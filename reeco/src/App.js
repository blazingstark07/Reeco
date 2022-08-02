import React from 'react';
import {NavBar} from './components/navigationComponent/navBar';
import { UtilitySection } from './components/sectionsComponents/utilitySection';
import {Gradient} from "./components/gradientComponent/gradient"

function App() {
  return (
    <div className="App">
			<NavBar/>
			<UtilitySection/>
			<Gradient/>
    </div>
  );
}

export default App;
