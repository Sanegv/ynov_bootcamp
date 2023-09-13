import "./style.css"

const index = ({imgSrc, description, price, title}) => {
	return (
		<div className="product_card">
			<img src={imgSrc}/>
			<div className="product_card-text">
				<p className="product_card-text-title">{title}</p>
				<p className="product_card-text-description">{description}</p>
			</div>
		</div>
	)
}

export default index;