import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/button.css";
export function Button(_a) {
    var folderName = _a.folderName, onClick = _a.onClick;
    return (_jsx("button", { className: "titleButton", onClick: onClick, children: folderName }));
}
