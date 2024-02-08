function chkLocal() {
  if(localStorage.getItem('accessToken') !== null) {
      location.href = "/folder.html";
  }
}

export{chkLocal};