import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttonComponent/button";

export const SimpleNavs =(props)=>{
	return (
		<React.Fragment>
			<Link to={`/${props.routeName}`}>
				<Button name={props.content} class={props.class}></Button>
			</Link>
		</React.Fragment>
	);
}