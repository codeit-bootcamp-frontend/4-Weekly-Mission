import "styles/reset.css";
import "styles/defaultStyle.css";
import "components/HeadNav.css";

function HeadNav() {
	return (
		<nav>
			<div className="flexibleHeaderInTablet">
				<a href="index.html">
					<img src="logo.svg" alt="Linkbrary Logo" />
				</a>
				<a href="html/signin.html" className="defaultBtn">
					로그인
				</a>
			</div>
		</nav>
	);
}

export default HeadNav;
