import { acceptUserDataFromApi } from "Api.js";
import { useState, useEffect } from "react";

const ProfileData = function () {
	const [loginStatus, setLoginStatus] = useState(false);

	return (
		<>
			{!loginStatus && (
				<div className="navProfile">
					<img src="navProfileImg.png" alt="loggedInProfileImg" />
					thisemailisNotadvised@codeit.com
				</div>
			)}

			{loginStatus && (
				<a href="html/signin.html" className="defaultBtn">
					로그인
				</a>
			)}
		</>
	);
};

export default ProfileData;
