import React from "react";
import { Button } from "../buttonComponent/button";

export const SimpleNavs =(props)=>{
	return (
		<React.Fragment>
			<a href="#"><Button name={props.content} class={props.class}></Button></a>
		</React.Fragment>
	);
}