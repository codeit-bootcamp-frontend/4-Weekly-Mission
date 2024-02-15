import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeadNav from "./HeadNav";

export default function App() {
	return (
		<>
			<HeadNav />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
}
