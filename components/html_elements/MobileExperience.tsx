import { memo } from "react"
import { TabsControls } from "./TabsControls"

export const MobileExperience = memo(function MobileExperience() {
	return (
		<div className="card mobile-experience">
			<TabsControls>
				<div className="tabsBox">
					<div className="indicator"></div>
					<button><span>Bitnat</span></button>
					<button><span>Tesla</span></button>
				</div>
				<div className="tabsContentContainer">
					<div className="contentBox">
						<h4 className="card1">Bitnat Redes y Sistemas (2023 – 2025)</h4>
						<p className="card2">
							During my time here, we worked on migrating a dashboard with nearly
							7,000 active users. The legacy software was built in JQuery using a
							commercial template, and the web API was built in PHP. The goal was
							to move it to a modern framework. React.js / Next.js was used for 
							the user interface. Laravel and MySQL were used as the backend and database.
						</p>
					</div>
					<div className="contentBox">
						<h4 className="card1">Tesla Media Group (2020 – 2023)</h4>
						<p className="card2">
							This was my first professional experience developing websites.
							The bulk of the work consisted of creating web pages in Joomla
							(a CMS similar to Wordpress). To improve the customization of 
							page styles, we avoided using no-code tools; instead, everything 
							was laid out and styled in a very artisanal way by writing HTML
							and CSS (SCSS/LESS).
						</p>
					</div>
				</div>
			</TabsControls>
		</div>
	)
})
