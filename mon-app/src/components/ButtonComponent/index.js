import "./style.css"

const ButtonComponent = ({
	name,
	color,
	handleClick,
	type
}) => { 
	return (
		<button type={type} className={color} onClick={handleClick}>
			{name}
		</button>
	);
}

export default ButtonComponent;