window.onload = function(){
    (async function userData(){
        const headerUserInfo = document.querySelector(".gnb__userInfo");
        const headerUserImg = document.querySelector(".gnb__userImg");
        const headerUserEmail = document.querySelector(".gnb__email");
        const loginBtn = document.querySelector(".gnb__login");
        try{
            const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
            const result = await response.json();
            console.log(result)
            if(response.ok){
                loginBtn.style.display = "none";
                headerUserInfo.style.display = "flex";
                headerUserImg.src = result.profileImageSource;
                headerUserEmail.textContent = result.email;
            }else{
                console.error(result.error);
            }
        }catch(err){
            return console.log(err);
        }
        
    })();




    (async function folderLoad(){
        const userImg = document.querySelector(".profile__img");
        const userNickname = document.querySelector(".profile__nickname");
        const userBookmark = document.querySelector(".profile__bookmark");
        const blank = document.querySelector(".content__blank");
        const cardBox = document.querySelector(".content__cards");
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        const result = await response.json();
        console.log(result.folder.owner)
        if(response.ok){
            userBookmark.textContent = result.folder.name;
            userNickname.textContent = result.folder.owner.name;
            userImg.src = result.folder.owner.profileImageSource;
            blank.style.display = "none";
            result.folder.links.forEach(link => {
                const {createdAt, imageSource, description, url} = link;
                const createDate = new Date(createdAt);
                const year = createDate.getFullYear();
                const month = createDate.getMonth()+1;
                const date = createDate.getDate();
                const timeDiffText = timeDiff(createdAt);
                const coustomDate = `${year}. ${month}. ${date}`;
                const aTag = createElement("a", "content__card", url);
                const contentImg = createElement("img", "content__img", imageSource);
                const infoTag = createElement("div", "content__info");
                const timeDiffTag = createElement("div", "content__timediff", timeDiffText);
                const contentText = createElement("div", "content__text", description);
                const cotentDate = createElement("div", "content__date", coustomDate);
                infoTag.append(timeDiffTag);
                infoTag.append(contentText);
                infoTag.append(cotentDate);
                aTag.append(contentImg);
                aTag.append(infoTag);
                cardBox.append(aTag);
            }) 
        }
    })();

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
        if(el === "li") tag.contentText = option;
        return tag;
    }
}

