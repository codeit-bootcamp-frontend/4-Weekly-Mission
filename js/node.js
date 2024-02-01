const emailDiv = document.querySelector('#email');
const pwdDiv = document.querySelector('#password');
const emailInput = document.querySelector('.email-input');
const pwdInput = document.querySelector('.password-input');

const pwdInput2 = document.querySelector('.password-input-check');
const pwdDiv2 = document.querySelector('#password-check');

function inputAddNode(type, message, errorCase) {
  let newNode = document.createElement('div');

  switch(type) {
    case "email" :
      newNode.innerHTML = `<p>${message}</p>`;
      newNode.classList.add(errorCase,'errorMsg');
      emailInput.setAttribute('status','error');
      emailDiv.children[2] ? emailDiv.children[2].remove() : null;
      emailDiv.append(newNode);
      break;
    case "password":
      newNode.innerHTML = `<p>${message}</p>`;
      newNode.classList.add(errorCase,'errorMsg');
      pwdInput.setAttribute('status','error');
      pwdDiv.children[2] ? pwdDiv.children[2].remove() : null;
      pwdDiv.append(newNode);  
      break;
    case "password2": 
      newNode.innerHTML = `<p>${message}</p>`;
      newNode.classList.add(errorCase,'errorMsg');
      pwdInput2.setAttribute('status','error');
      pwdDiv2.children[2] ? pwdDiv2.children[2].remove() : null;
      pwdDiv2.append(newNode);  
      break;
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
    case "password2" :
      pwdDiv2.children[2] ? pwdDiv2.children[2].remove() : null
      pwdInput2.setAttribute('status', 'steady');
      break;
  }
}

export { inputAddNode, inputDeleteNode }

