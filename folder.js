
const removeDelete = document.getElementById('delete');


removeDelete.addEventListener('click', removeAccessToken);

function removeAccessToken() {
  localStorage.removeItem("access-token");
}

