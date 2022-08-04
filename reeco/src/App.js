import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './components/homeComponent/homePage';
import {Pricing} from './components/pricingComponent/pricing';

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/pricing" element={<Pricing/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
