window.onload = function(){
    // localStorage.clear()
    /* 유저 정보 로드 */
    (async function userInfoLoad(){
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
                userCategoryLoad(result.data[0].id);
                allLinkLoad(result.data[0].id);
            }else{
                console.error(result.error);
            }
        }catch(error){
            return console.log(error);
        }
    })();

    /* 유저 카테고리 로드 */
    async function userCategoryLoad(userId) {
        try{
            const categoryBox = document.querySelector(".category__box");
            const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/folders`);
            const result = await response.json();
            if(response.ok){
                result.data.forEach(list => {
                    const categoryName = list.name;
                    const listTag = createCustomElement("li", "category__list", categoryName);
                    listTag.setAttribute("data-id", list.id)
                    categoryBox.append(listTag);
                });
            }else{
                console.error(result.error);
            }
        }catch(err){
            console.log(err);
        }
    };

    /* 유저가 가지고 있는 전체 링크 로드 */
    async function allLinkLoad(userId){
        const blank = document.querySelector(".content__blank");
        try{
            const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${userId}/links`);
            const result = await response.json();
            console.log(result)
            if(response.ok){
                const cardBox = document.querySelector(".content__cards");
                const cards = cardBox.children;
                while (cards.length > 0) {
                    cardBox.removeChild(cards[0]);
                }
                result.data.forEach((link) => {
                    const {created_at, image_source, description, url} = link;
                    createCard(created_at, image_source, description, url);
                })
            }else{
                console.err(result.error);
            }
        }catch(err){
            return console.log(err);
        }
    }

    /* 카테고리 클릭 해당 링크 로드 */
    const categoryBox = document.querySelector(".category__box");
    const util = document.querySelector(".content__util");
    categoryBox.addEventListener("click", (e) => {
        if(e.target.tagName === "LI"){
            const categoryList = categoryBox.children;
            for(let i = 0; i<categoryList.length; i++){
                categoryList[i].classList.remove("active");
            }
            const contentTitle = document.querySelector(".content__title");
            const title = e.target.textContent;
            e.target.classList.add("active")
            if(e.target.classList.contains("all")){
                allLinkLoad(10);
                contentTitle.textContent = title;
                util.style.display = "none";
            }else{
                categoryClick(e.target.dataset.id);
                contentTitle.textContent = title;
                util.style.display = "flex";
            }
        }
    })
    async function categoryClick(folderId){
        try{
            const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/10/links?folderId=${folderId}`);
            const result = await response.json();
            console.log(result)
            if(response.ok){
                const cardBox = document.querySelector(".content__cards");
                const cards = cardBox.children;
                while (cards.length > 0) {
                    cardBox.removeChild(cards[0]);
                }
                result.data.forEach((link) => {
                    const {created_at, image_source, description, url} = link;
                    createCard(created_at, image_source, description, url);
                })
            }else{
                console.err(result.error);
            }
        }catch(err){
            console.log(err);
        }
    };

    /* 시간 차 계산 */
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

    /* 카드 생성 */
    function createCard(created_at, image_source, description, url){
        const cardBox = document.querySelector(".content__cards");
        const createDate = new Date(created_at);
        const year = createDate.getFullYear();
        const month = createDate.getMonth()+1;
        const date = createDate.getDate();
        const timeDiffText = timeDiff(created_at);
        const coustomDate = `${year}. ${month}. ${date}`;

        const aTag = createCustomElement("a", "content__card", url);
        const starImg = createCustomElement("img", "content__star", "../img/star.svg");
        const contentImg = createCustomElement("img", "content__img", image_source);
        const infoTag = createCustomElement("div", "content__info");
        const infoBoxTag = createCustomElement("div", "content__box");
        const timeDiffTag = createCustomElement("div", "content__timediff", timeDiffText);
        const kebab = createCustomElement("img", "content__kebab", "../img/kebab.svg");
        const kebabLists = createCustomElement("ul", "kebab__lists");
        const kebabList1 = createCustomElement("li", "kebab__list", "삭제하기")
        const kebabList2 = createCustomElement("li", "kebab__list", "폴더에 추가")
        const contentText = createCustomElement("div", "content__text", description);
        const cotentDate = createCustomElement("div", "content__date", coustomDate);
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
    }

    /* 태그 생성 */
    function createCustomElement(el, className, option = false){
        const tag =  document.createElement(el);
        tag.classList.add(className);
        if(el === "a") tag.setAttribute("href", option);
        if(el === "img") tag.src = option;
        if(el === "div" && option) tag.textContent = option;
        if(el === "li") tag.textContent = option;
        return tag;
    }

    /* 케밥 아이콘 클릭 */
    let kebabList;
    const mainContent = document.querySelector(".folder");
    mainContent.addEventListener("click", (e) =>{
        if(e.target.className === "content__kebab"){
            e.preventDefault();
            if(kebabList !== undefined){
                kebabList.style.display = "none"
            }
            const kebabIcon = e.target;
            kebabList = kebabIcon.parentElement.nextElementSibling;
            kebabList.style.display = "flex";
        }else if(kebabList){
            kebabList.style.display = "none";
        }
    })

}

