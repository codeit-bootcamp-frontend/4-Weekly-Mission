// 에러 해결
import changeBorder from "./modules/changeBorder.js";
import deleteErrorMessage from "./modules/deleteErrorMessage.js";

export default function clearError(input, error) {
    changeBorder(input, "gray20");
    deleteErrorMessage(error);
}
