import React from "react";
import {RiArrowDownSLine} from "react-icons/ri";
import ListElement from "../dropdownComponent/listElement";
import styles from "./navBar.module.css";
import {SimpleNavs} from "./simpleNavs";


export const NavBar = (props) =>{

	const navDropdown = ["Products","Solutions","Learn"];
	const navSimple = [{name:"Pricing",route:"pricing"},{name:"Enterprise",route:"enterprise"}]
	const authElement = [{name:"Contact Sales",route:"contact"},{name:"Login",route:"login"},{name:"Signup",route:"signup"}]

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
				{navSimple.map((element)=><SimpleNavs content={element.name} routeName={element.route}/>)}
			</ul>
			<ul className={styles.navUl}>
				{authElement.map((element)=><SimpleNavs content={element.name} routeName={element.route}/>)}
			</ul>
		</div>
	)
}