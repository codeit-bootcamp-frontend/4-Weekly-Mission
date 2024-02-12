import { format } from "date-fns";
import processTimeData from "./processTimeData";

const processFolderData = (folder) => {
    if (!folder) {
        return []
    };
    const { name, owner, links } = folder;

    //시간 형식 바꿔주기 위해!!
    const processLinks = (link) => {
        const { id, createdAt, url, imageSource, title, description } = link;
        return {
        id,
        url,
        imageSource,
        alt: '대표 이미지',
        passedTime: processTimeData(createdAt),
        description,
        createdAt: format(new Date(createdAt), "yyyy. MM. dd"),
        };
    };

    return {
        profileImage: owner.profileImageSource,
        ownerName: owner.name,
        folderName: name,
        //links 객체 배열을 순회하면서 객체 요소 각각의 시간 바꿔준 후 새로운 배열로!
        links: links.map(processLinks) ?? [], //null이면 빈 배열 반환
    };
};

export default processFolderData;