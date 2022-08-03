import React from "react";
import styles from "./button.module.css";

export const Button =(props)=>{
	let className = "";
	switch(props.class){
		case "button":
			className = styles.button;
			break;
		case "navTab":
			className = styles.navTab;
			break;
		default:
			className = styles.tabs;
			break;
	}
	return (
		<div className={className}>
			{props.name}
		</div>
	);
}
