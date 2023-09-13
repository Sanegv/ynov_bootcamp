import "./style.css"

const index = ({product}) => {
	return (
		<div className="product_card">
			<img className="product_thumbnail" src={product.thumbnail}/>
			<div className="product_card-text">
				<p className="product_card-text-title">{product.title}</p>
				<p>{product.price}€</p>
			</div>
			<p className="product_card-description">{product.description}</p>
			<p className="product_quantity">{
				product.stock < 50 ? ("Attention ! Plus que " + product.stock + " diponibles !")
				: ("")
			}</p>
		</div>
	)
}

export default index;