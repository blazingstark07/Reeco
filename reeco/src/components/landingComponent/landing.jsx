import React from "react";
import {Input} from "../inputComponent/input";
import styles from "./landing.module.css";
import webApp from"../../assets/webApp.jpg";

export const Landing = (props)=>{
	return(
		<React.Fragment>
			<div className={styles.container}>
				<h1>One App to replace them all.</h1>
				<p>All of your work in one place: Tasks, Docs, Chat, Goals, and more.</p>
				<Input placeholder="Enter Your Email Address" name="Email"/>			
			</div>
			<img src = {webApp} className={styles.image}/>
		</React.Fragment>
		
	);
}