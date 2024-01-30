
// export const isPasswordCorrect = (value) => value === passwordInput.value;
export const isPasswordCorrect = (passwordToCheck, currentPassword) => {
    return passwordToCheck === currentPassword;
};