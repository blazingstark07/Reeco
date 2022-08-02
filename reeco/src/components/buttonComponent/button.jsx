import React from "react";
import styles from "./button.module.css";

export const Button =(props)=>{
	return (
		<div className={styles.button}>
			{props.name}
		</div>
	);
}
