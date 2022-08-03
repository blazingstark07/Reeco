import React from "react";
import {RiArrowDownSLine} from "react-icons/ri";
import ListElement from "../dropdownComponent/listElement";
import styles from "./navBar.module.css";
import {SimpleNavs} from "./simpleNavs";


export const NavBar = (props) =>{

	const navDropdown = ["Products","Solutions","Learn"];
	const navSimple = ["Pricing","Enterprise"]
	const authElement = ["Contact Sales","Login","Signup"]

	return(
		<div className = {styles.navBar}>
			<span className={styles.brand}>Reeco</span>
			<ul className = {styles.navUl}>
				{navDropdown.map((element)=>{
					return(
					<div className={styles.dropdownUl}>
						<ListElement name = {element}></ListElement>
						<RiArrowDownSLine className={styles.arrow} size={25}/>
					</div>
					);
				})}
				{navSimple.map((element)=><SimpleNavs content={element}/>)}
			</ul>
			<ul className={styles.navUl}>
				{authElement.map((element)=><SimpleNavs content={element}/>)}
			</ul>
		</div>
	)
}