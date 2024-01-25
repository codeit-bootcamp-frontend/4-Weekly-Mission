const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');

function inputAddNode(type, message, errorCase) {
  let newNode = document.createElement('div');

  if(type === "email") {
    newNode.innerHTML = `<p>${message}</p>`;
    newNode.classList.add(errorCase,'errorMsg');
    emailInput.setAttribute('status','error');
    emailDiv.children[2] ? emailDiv.children[2].remove() : null;
    emailDiv.append(newNode);
  } else if(type === "password") {
    newNode.innerHTML = `<p>${message}</p>`;
    newNode.classList.add(errorCase,'errorMsg');
    pwdInput.setAttribute('status','error');
    pwdDiv.children[2] ? pwdDiv.children[2].remove() : null;
    pwdDiv.append(newNode);
  }
}

function inputDeleteNode(type) {
  let newNode = document.createElement('div');
  switch(type) {
    case "email" : 
      emailDiv.children[2] ? emailDiv.children[2].remove() : null
      emailInput.setAttribute('status', 'steady');
      break;
    case "password" :
      pwdDiv.children[2] ? pwdDiv.children[2].remove() : null
      pwdInput.setAttribute('status', 'steady');
      break;
  }
}

export { inputAddNode, inputDeleteNode }

