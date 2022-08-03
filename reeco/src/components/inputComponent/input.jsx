import React from "react";
import styles from "./input.module.css";

export const Input = (props) =>{
	return (
		<React.Fragment>
			<input name={props.name} placeholder={props.placeholder} className={styles.inputField}></input>
		</React.Fragment>
	);
}