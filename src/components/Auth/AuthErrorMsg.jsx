function AuthErrorMsg({className, errorMsg}){
    return (
        <>
        {errorMsg && <p className={className}>{errorMsg}</p>}
        </>
    )
}

export default AuthErrorMsg;