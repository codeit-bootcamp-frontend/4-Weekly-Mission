import { addErrorMessage, deleteErrorMessage, changeBorder } from "./change.js";

// 에러 발생
export function createError(input, error, str) {
    changeBorder(input);
    addErrorMessage(error, str);
}

// 에러 해결
export function clearError(input, error) {
    changeBorder(input, "gray20");
    deleteErrorMessage(error);
}
