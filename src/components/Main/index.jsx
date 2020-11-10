import React from "react";
import { HeroStats } from "../HeroStats";
import { SearchInput } from "../SearchInput";
import { SelectDate } from "../SelectDate";
import { GroupGoals } from "../GroupGoals";
import "./styles.scss";

export const Main = () => {
	return (
		<div className="Main">
			<div className="Main__header">
				<SearchInput />
				<SelectDate />
			</div>
			<div className="Main__header-name">
				<h1>Hola, Didier</h1>
			</div>
			<div className="Main__hero">
				<HeroStats />
				<GroupGoals />
			</div>
		</div>
	);
};
