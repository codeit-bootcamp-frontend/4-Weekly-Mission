const isAccessTokenValid = () => {
   return Boolean(localStorage.getItem('accessToken'))
}

const pageRedirectToFolderIfClientHasToken = () => {
   if (isAccessTokenValid()) {
      window.location.href = './folder.html';
   }
}

const  accessTokenReturn = async function (response) {
   const responseConvertToText = await response.text()
   const responseObjectData = await JSON.parse(responseConvertToText)
   return responseObjectData.data.accessToken
}

const accessTokenRemoveFromLocalStorageToLogout = () => {
   localStorage.removeItem('accessToken')
   window.location.href = '/index.html'
}

export {pageRedirectToFolderIfClientHasToken, accessTokenReturn, accessTokenRemoveFromLocalStorageToLogout}