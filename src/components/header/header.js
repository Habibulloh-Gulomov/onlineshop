import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import searchlogo from "../../img/search.png";

const Header = ({ search, setSearch }) => {
	const searchtxt = useRef();
	const SearchForm = (evt) => {
		evt.preventDefault();
		setSearch(searchtxt.current.value);
	};

	const [nav, setNav] = useState(false);
	const filterFunc = () => {
		setNav(!nav);
	};

	if (nav) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<div className="container header-cover">
			<div className="header">
				<Link
					className="header-logo"
					to={"/"}>
					MyShop
				</Link>
				<nav className={nav ? "active-nav1" : "header-nav"}>
					<NavLink
						className={"header-link"}
						to={"/"}>
						All
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/mensclothes"}>
						Mens' clothes
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/womensclothes"}>
						Women's clothes
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/jewelary"}>
						Jewelary
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/electronics"}>
						Electronics
					</NavLink>
				</nav>
				<form
					className="search-form"
					action="post">
					<input
						className="search-txt"
						type="text"
						ref={searchtxt}
						required
						placeholder="search..."
					/>
					<button
						className="search-btn"
						onClick={SearchForm}>
						<img
							className="search-icon"
							src={searchlogo}
							alt="the search logo"
						/>
					</button>
				</form>
				<button
					className="burgerBtn"
					onClick={filterFunc}>
					<div className="burger-btn"></div>
					<div className="burger-btn"></div>
					<div className="burger-btn"></div>
				</button>
			</div>
		</div>
	);
};

export default Header;
