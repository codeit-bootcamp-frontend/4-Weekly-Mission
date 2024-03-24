import { useState } from "react";
export var useShowModal = function () {
    var _a = useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = useState(""), clickValue = _b[0], setClickValue = _b[1];
    var handleShowModal = function (e) {
        e.preventDefault();
        setShowModal(true);
        var target = e.target;
        setClickValue(target.textContent);
    };
    return {
        handleShowModal: handleShowModal,
        showModal: showModal,
        setShowModal: setShowModal,
        clickValue: clickValue,
    };
};
