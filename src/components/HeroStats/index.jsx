import React from "react";
import Circle from "react-circle";
import "./styles.scss";

export const HeroStats = () => {
	return (
		<div className="HeroStats">
			<div className="Hero-percentage">
				<Circle progress={45} />
			</div>
			<div className="Hero-content">
				<div className="Hero-item">
					<p>
						Leads Obtenidos <br />
					</p>
					<h2>50/100</h2>
				</div>
				<div className="Hero-item">
					<p>
						Cola de <br />
						llamados
					</p>
					<h2>99/100</h2>
				</div>
				<div className="Hero-item">
					<p>
						Matriculas <br />
						finalizadas
					</p>
					<h2>80/90</h2>
				</div>
			</div>
		</div>
	);
};
