import "./style.css"

const index = () => {
	return (
		<header className="header_main">
			<div className="header_logo">
				<img src="../OW_logo.png" alt="logo Outer Wilds"/>
			</div>
			<nav className="header_nav">
				<ul className="header_list">
					<li className="item_nav">
						<a className="item_link" href="">elem 1</a>
					</li>
					<li className="item_nav">
						<a className="item_link" href="">elem 2</a>
					</li>
					<li className="item_nav">
						<a className="item_link" href="">elem 3</a>
					</li>
					<li className="item_nav">
						<a className="item_link" href="">elem 4</a>
					</li>
					<li className="item_nav">
						<a className="item_link" href="">elem 5</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default index;