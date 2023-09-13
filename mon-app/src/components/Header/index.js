import "./style.css"
import SearchBar from "../SearchBar";

const index = () => {
	return (
		<header className="header_main">
			<div className="header_logo">
				<a href="localhost:3000"><img src="../OW_logo.png" alt="logo Outer Wilds" /></a>
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
			<SearchBar/>
		</header>
	)
}

export default index;