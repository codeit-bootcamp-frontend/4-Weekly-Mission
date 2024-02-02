function createElement(el, className, option = false){
    const tag =  document.createElement(el);
    tag.classList.add(className);
    if(el === "a") tag.setAttribute("href", option);
    if(el === "img") tag.src = option;
    if(el === "div" && option) tag.textContent = option;
    if(el === "li") tag.contentText = option;
    return tag;
}

export default createElement;