import changeBorder from "./modules/changeBorder.js";
import addErrorMessage from "./modules/addErrorMessage.js";

export default function createError(input, error, str) {
    changeBorder(input);
    addErrorMessage(error, str);
}
