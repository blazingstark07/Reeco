import React from "react";
import {Landing} from "../landingComponent/landing";
import {NavBar} from "../navigationComponent/navBar";
import {Sections} from "../sectionsComponents/sections";

export const Home = () =>{
	return(
		<React.Fragment>
			<NavBar/>
			<Landing/>
			<Sections/>
		</React.Fragment>
	);
}