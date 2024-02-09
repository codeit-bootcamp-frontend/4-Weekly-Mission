import "styles/reset.css";
import "styles/defaultStyle.css";
import "components/HeadNav.css";
import ProfileData from "components/ProfileData.js";

export default function HeadNav() {
	return (
		<nav>
			<div className="flexibleHeaderInTablet">
				<a href="index.html">
					<img src="logo.svg" alt="Linkbrary Logo" />
				</a>
				<ProfileData />
			</div>
		</nav>
	);
}
