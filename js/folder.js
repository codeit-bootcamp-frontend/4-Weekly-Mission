window.onload = function(){
    // localStorage.clear()
    (async function dataLoad(){
        const headerUserInfo = document.querySelector(".gnb__userInfo");
        const headerUserImg = document.querySelector(".gnb__userImg");
        const headerUserEmail = document.querySelector(".gnb__email");
        const loginBtn = document.querySelector(".gnb__login");
        try{
            const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/10`);
            const result = await response.json();
            // console.log(result.data[0])
            if(response.ok){
                loginBtn.style.display = "none";
                headerUserInfo.style.display = "flex";
                headerUserImg.src = result.data[0].image_source;
                headerUserEmail.textContent = result.data[0].email;
                userData(result.data[0].id);
            }else{
                console.error(result.error);
            }
        }catch(error){
            return console.log(error);
        }
    })();

    async function userData(userId){
        const blank = document.querySelector(".content__blank");
        const cardBox = document.querySelector(".content__cards");
        try{
            const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/links`);
            const result = await response.json();
            // console.log(result.data)
            if(response.ok){
                blank.style.display = "none";
                result.data.forEach((link) => {
                    const {created_at, image_source, description, url} = link;
                    const createDate = new Date(created_at);
                    const year = createDate.getFullYear();
                    const month = createDate.getMonth()+1;
                    const date = createDate.getDate();
                    const timeDiffText = timeDiff(created_at);
                    const coustomDate = `${year}. ${month}. ${date}`;

                    const aTag = createElement("a", "content__card", url);
                    const starImg = createElement("img", "content__star", "../img/star.svg");
                    const contentImg = createElement("img", "content__img", image_source);
                    const infoTag = createElement("div", "content__info");
                    const infoBoxTag = createElement("div", "content__box");
                    const timeDiffTag = createElement("div", "content__timediff", timeDiffText);
                    const kebab = createElement("img", "content__kebab", "../img/kebab.svg");
                    const kebabLists = createElement("ul", "kebab__lists");
                    const kebabList1 = createElement("li", "kebab__list", "삭제하기")
                    const kebabList2 = createElement("li", "kebab__list", "폴더에 추가")
                    const contentText = createElement("div", "content__text", description);
                    const cotentDate = createElement("div", "content__date", coustomDate);
                    infoBoxTag.append(timeDiffTag);
                    infoBoxTag.append(kebab);
                    kebabLists.append(kebabList1);
                    kebabLists.append(kebabList2);
                    infoTag.append(infoBoxTag);
                    infoTag.append(kebabLists);
                    infoTag.append(contentText);
                    infoTag.append(cotentDate);
                    aTag.append(starImg);
                    aTag.append(contentImg);
                    aTag.append(infoTag);  
                    cardBox.append(aTag);
                })
            }else{
                console.err(result.error);
            }
        }catch(err){
            return console.log(err);
        }
    }

    function timeDiff(date){
        const today = new Date();
        const targetDate = new Date(date)
        const minute = (today - targetDate) / (1000 * 60);
        const hour = (today - targetDate) / (1000 * 60 * 60);
        const day = (today - targetDate) / (1000 * 60 * 60 * 24);
        const month = today.getMonth() - targetDate.getMonth();
        const year = today.getFullYear() - targetDate.getFullYear();
        if(year >= 1){
            return `${year} years ago`;
        }
        else if(month >= 1){
            return `${month} month age`;
        }
        else if(day >= 1){
            return `${day} day ago`;
        }
        else if(hour >= 1){
            return `${hour} hour ago`;
        }
        else if(minute < 2){
            return `1 minute ago`;
        }else{
            return `${minute} minutes ago`;
        }
    }

    function createElement(el, className, option = false){
        const tag =  document.createElement(el);
        tag.classList.add(className);
        if(el === "a") tag.setAttribute("href", option);
        if(el === "img") tag.src = option;
        if(el === "div" && option) tag.textContent = option;
        if(el === "li") tag.textContent = option;
        return tag;
    }

    const cardBox = document.querySelector(".content__cards");
    cardBox.addEventListener("click", (e) =>{
        console.log(e.target)
        e.preventDefault();
        if(e.target.className === "content__kebab"){
            const kebabIcon = e.target;
            const kebabList = kebabIcon.parentElement.nextElementSibling;
            kebabList.style.display = "flex";
            if(e.target.className !== "content__kebab"){
                console.log("실행")
                kebabList.style.display = "none";
            }
        }
    })

}

