import React from "react";
import "./style.css";
import ButtonComponent from "../ButtonComponent";

const TitlePage = ({
	subtitle,
	 title
	}) => {
	return(
		<div className ="title__page">
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<ButtonComponent name="test"/>
		</div>
	);
}

export default TitlePage;