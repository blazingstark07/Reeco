import React from "react";
import styles from "./card.module.css"

export const Card=(props)=>{
	return (
		<div className={styles.container} style={{backgroundColor:props.bgColor}}>
			{props.children}
		</div>
	);
}