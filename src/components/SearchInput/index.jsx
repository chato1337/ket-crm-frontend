import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiFilterFill } from "react-icons/ri";
import "./styles.scss";

export const SearchInput = () => {
	return (
		<div className="SearchInput">
			<AiOutlineSearch size="1.4em" />
			<input type="text" placeholder="Search" />
			<RiFilterFill size="1.4em" />
		</div>
	);
};
