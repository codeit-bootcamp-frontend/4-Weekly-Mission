import { FolderBody, FolderHeader } from "./components/folder";
import ProfileContextProvider from "./context/ProfileContext";
import FolderContextProvider from "./context/FolderContext";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import { useState } from "react";

function App() {
	const [marginTop, setMarginTop] = useState(0);

	return (
		<ProfileContextProvider>
			<FolderContextProvider>
				<Header setMarginTop={setMarginTop} />
				<main style={{ marginTop: marginTop + "px" }}>
					<FolderHeader />
					<FolderBody />
				</main>
				<Footer />
			</FolderContextProvider>
		</ProfileContextProvider>
	);
}

export default App;
