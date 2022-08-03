import React from "react";
import { Card } from "../cardComponent/card";
import { SimpleNavs } from "../navigationComponent/simpleNavs";
import { Button } from "../buttonComponent/button";
import styles from "./section.module.css";
import codingCat from "../../assets/codingCat.gif";


export const UtilitySection=(props)=>{
	const navTabs = ["Projects","Tasks","Goals","Views"]
	return(
		<Card>
			<div className={styles.sectionTabs}>{navTabs.map((tab)=><SimpleNavs content={tab}/>)}</div>
			<div className={styles.utilitySection}>
			<h1>Lessgo REECO</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestiae sint vel laboriosam. Sequi expedita similique sunt commodi inventore officiis, ea architecto corrupti ipsa saepe, error rerum assumenda necessitatibus. Sit.
			</p>
			<h3>Partners: Amazon | Oberoi | Taj</h3>
			<br/>
			<Button name="Get Started" class="button"/>
			</div>
			<img src = {codingCat} className={styles.gif}/>
		</Card>
	);
}