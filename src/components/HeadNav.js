import "styles/reset.css";
import "styles/defaultStyle.css";
import "components/HeadNav.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";

const ProfileData = function () {
	const [loginStatus, setLoginStatus] = useState(false);
	const [accountEmail, setAccountEmail] = useState("");
	const [profileImg, setProfileIMg] = useState("navProfile.png");

	const user = "user";
	const accountVerification = async (user) => {
		const receivedData = await acceptDataFromApi(user);
		if (!receivedData) return;

		setAccountEmail(receivedData.email);
		setProfileIMg(receivedData.profileImageSource);
		setLoginStatus(true);
	};

	useEffect(() => {
		accountVerification(user);
	}, [loginStatus]);

	return (
		<>
			{loginStatus && (
				<div className="navProfile">
					<img src={profileImg} alt="loggedInProfileImg" />
					{accountEmail}
				</div>
			)}

			{!loginStatus && (
				<a href="html/signin.html" className="defaultBtn">
					로그인
				</a>
			)}
		</>
	);
};

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
