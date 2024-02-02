import ShareProfile from "./share-profile";
import ShareContent from "./share-content";
import createElement from "../utils/create-element";
import timeDiff from "../utils/time-diff";

function ShaerMain(){
    (async function folderLoad(){
        const userImg = useRef(null);
        const userNickname = useRef(null);
        const userBookmark = useRef(null);
        const blank = useRef(null);
        const cardBox = useRef(null);
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

    return  <main className="folder">
        <ShareProfile/>
        <ShareContent/>
    </main>
}

export default ShaerMain;