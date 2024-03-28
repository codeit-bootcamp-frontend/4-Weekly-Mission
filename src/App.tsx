import { Outlet } from "react-router-dom";
import { FolderProvider } from "./contexts/FolderContext";

export default function App() {
  return (
    <>
      <FolderProvider>
        <Outlet />
      </FolderProvider>
    </>
  );
}
