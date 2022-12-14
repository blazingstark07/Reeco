import React from "react";
import { Section } from "./templateComponent/sectionTemplate";
import codingCat from "../../assets/codingCat.gif";

export const UtilitySection=(props)=>{
	const navTabs = ["Projects","Tasks","Goals","Views"]
	return (
		<Section 
			bgColor="rgba(39, 245, 41, 0.1)"
			heading="Lessgo Reeco"
			content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae sint vel laboriosam. Sequi expedita similique sunt commodi inventore officiis, ea architecto corrupti ipsa saepe, error rerum assumenda necessitatibus. Sit." 
			subtitle="Partners"
			subContent="Amazon | Oberoi | Taj"
			imgSrc = {codingCat}
			nav={navTabs}
			buttonName="Get Started"
			buttonClass="button"
			buttonColor="rgba(245, 144, 39, 0.85)"
		/>
	);
}