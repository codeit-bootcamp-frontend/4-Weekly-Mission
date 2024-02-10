import React, { useCallback, useContext, useEffect, useRef } from "react";
import "./header.css";
import Logo from "./Logo";
import Profile from "./Profile";
import Wrapper from "../../layout/Wrapper";
import { ProfileContext } from "../../../context/ProfileContext";

function Header({ setMarginTop }) {
	const { data } = useContext(ProfileContext);
	const headerRef = useRef();

	const setHeaderHeight = useCallback(() => {
		const headerHeight = headerRef?.current?.clientHeight;
		setMarginTop(headerHeight);
	}, [setMarginTop]);

	useEffect(() => {
		setHeaderHeight();
	});

	useEffect(() => {
		window.addEventListener("resize", setHeaderHeight);
		return () => window.removeEventListener("resize", setHeaderHeight);
	}, [setHeaderHeight]);

	return (
		<header className="header" ref={headerRef}>
			<Wrapper className="header-container">
				<Logo />
				<div>
					{!data && (
						<a href="/signin.html" className="login-btn">
							로그인
						</a>
					)}
					{data && <Profile data={data} />}
				</div>
			</Wrapper>
		</header>
	);
}

export default Header;
