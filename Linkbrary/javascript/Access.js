function access(){
  const token = localStorage.getItem('accessToken');
  if(token){
    window.location.href = "./folder.html";
  }
}
window.onload = access()