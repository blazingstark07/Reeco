import React from "react";
import { Card } from "../../cardComponent/card";
import { SimpleNavs } from "../../navigationComponent/simpleNavs";
import { Button } from "../../buttonComponent/button";
import styles from "./section.module.css";


export const Section=(props)=>{
	return(
		<Card bgColor={props.bgColor}>
			<div>
				<div className={styles.sectionTabs}>{(props.nav).map((tab)=><SimpleNavs content={tab}/>)}</div>
				<div className={styles.utilitySection}>
					<h1>{props.heading}</h1>
					<p>{props.content}</p>
					<h3>{props.subtitle}: {props.subContent}</h3>
					<br/>
					<Button name={props.buttonName} class={props.buttonClass} color={props.buttonColor}/>
				</div>
			</div>
			<img src = {props.imgSrc} className={styles.gif}/>
		</Card>
	);
}