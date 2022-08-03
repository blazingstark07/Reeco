import React from "react";
import {Button} from "../buttonComponent/button";
import {SimpleNavs} from "../navigationComponent/simpleNavs";
import styles from "./listElement.module.css";

const ListElement = (props) =>{

	const listTabs = ["Task","Document","Goal","WhiteBoard","Dashboard","Chat"]
	return(
		<React.Fragment>
			<Button name={props.name} class="navTab">
				<div className={styles.slideWindow}>
					<ul>
						{listTabs.map((tab)=><SimpleNavs content={tab}/>)}
					</ul>
				</div>
			</Button>
		</React.Fragment>
	);
}

export default ListElement;