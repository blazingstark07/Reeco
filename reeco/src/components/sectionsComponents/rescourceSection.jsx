import React from "react";
import { Section } from "./templateComponent/sectionTemplate";
import resources from "../../assets/resources.gif";

export const ResourceSection =(props)=>{
	const navTabs = ["Docs","WhiteBoard","DashBoard"];

	return(
		<Section 
			heading="We give you Resources"
			content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae sint vel laboriosam. Sequi expedita similique sunt commodi inventore officiis, ea architecto corrupti ipsa saepe, error rerum assumenda necessitatibus. Sit." 
			subtitle="Resource"
			subContent="Download | Automation | Integration"
			imgSrc = {resources}
			nav={navTabs}
			buttonName="Get Started"
			buttonClass="button"
		/>
	);
}