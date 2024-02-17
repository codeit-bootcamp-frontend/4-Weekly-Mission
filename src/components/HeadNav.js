import "styles/reset.css";
import "styles/defaultStyle.css";
import "components/HeadNav.css";
import { useEffect, useState } from "react";
import { acceptDataFromApi } from "Api";

const ProfileData = function () {
	const [loginStatus, setLoginStatus] = useState(false);
	const [accountEmail, setAccountEmail] = useState("");
	const [profileImg, setProfileIMg] = useState("navProfileImg.png");

	const USER = "users/1";
	const accountVerification = async (user) => {
		const receivedData = await acceptDataFromApi(user);
		if (!receivedData) return;
		const {
			data: [{ email, image_source }],
		} = receivedData;

		setAccountEmail(email);
		if (image_source) {
			setProfileIMg(image_source);
		}
		setLoginStatus(true);
	};

	useEffect(() => {
		accountVerification(USER);
	}, [loginStatus]);

	return (
		<>
			{loginStatus && (
				<div className="nav-profile">
					<img src={profileImg} alt="loggedInProfileImg" />
					{accountEmail}
				</div>
			)}

			{!loginStatus && (
				<a href="html/signin.html" className="default-btn">
					로그인
				</a>
			)}
		</>
	);
};

export default function HeadNav({ className }) {
	return (
		<nav className={className}>
			<div className="flexible-header-in-tablet">
				<a href="index.html">
					<img src="logo.svg" alt="Linkbrary Logo" />
				</a>
				<ProfileData />
			</div>
		</nav>
	);
}
