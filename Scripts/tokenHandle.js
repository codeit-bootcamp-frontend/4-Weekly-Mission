const isAccessTokenValid = () => {
   return Boolean(localStorage.getItem('accessToken'))
}

const RedirectToFolderIfClientHasToken = () => {
   if (isAccessTokenValid()) {
      window.location.href = './folder.html';
   }
}

const  returnAccessToken = async function (response) {
   const responseConvertToText = await response.text()
   const responseObjectData = await JSON.parse(responseConvertToText)
   return responseObjectData.data.accessToken
}

const accessTokenRemoveFromLocalStorageToLogout = () => {
   localStorage.removeItem('accessToken')
   window.location.href = '/index.html'
}

export {RedirectToFolderIfClientHasToken, returnAccessToken, accessTokenRemoveFromLocalStorageToLogout}