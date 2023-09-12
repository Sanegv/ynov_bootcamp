import React, { useState } from "react";
import "./style.css";
import ButtonComponent from "../ButtonComponent";

const TitlePage = ({
	subtitle,
	 title
	}) => {
		const [count, setCount] = useState(0);
	return(
		<div className ="title__page">
			<h1>{title}</h1>
			<p>{subtitle}</p>
			<ButtonComponent handleClick={() => setCount(count+1)} name={count} color="black"/>
		</div>
	);
}

export default TitlePage;