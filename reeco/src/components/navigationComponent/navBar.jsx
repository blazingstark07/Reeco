import React from "react";
import ListElement from "../dropdownComponent/listElement";
import styles from "./navBar.module.css";

export const NavBar = (props) =>{

	const navElements = ["Products","Solutions","Learn","Pricing","Enterprise","Contact Sales"];
	const authElement = ["Login","Signup"]

	return(
		<div className = {styles.navBar}>
			<ul className = {styles.navUl}>
			<span className={styles.brand}>Reeco</span>
				{navElements.map((element)=><ListElement name = {element} className={styles.leftList}/>)}
				{authElement.map((element)=><ListElement name = {element}/>)}
			</ul>
		</div>
	)
}