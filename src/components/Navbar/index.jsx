import React from "react";
import "./styles.scss";
import Logo from "../../utils/img/logo.png";
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";
import { GrStackOverflow } from "react-icons/gr";

export const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="Navbar__logo">
				<img src={Logo} alt="brand" />
			</div>
			<div className="Navbar__item">
				<RiHomeSmile2Line size="1.8em" />
			</div>
			<div className="Navbar__item">
				<MdContentPaste size="1.8em" />
			</div>
			<div className="Navbar__item">
				<GrStackOverflow size="1.8em" />
			</div>
		</div>
	);
};
