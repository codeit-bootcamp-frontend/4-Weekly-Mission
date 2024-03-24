import useFetch from "utils/hooks/useFetch";
import SharedHeader from "./Header/UserProfile";
import SharedMain from "./Main/ShaerdMain";
import { SHARED_API_URL } from "constants/url";
import { UserProfile, Share } from "constants/types";
import { updatedDate, updatedDuration } from "utils/createdAt";

interface SharedFetchData {
  folder: UserProfile;
}

const SharedPage = () => {
  const {
    data: sharedPageData,
    error: dataError,
    loading: dataLoading,
  } = useFetch<SharedFetchData>(SHARED_API_URL);

  if (dataLoading) return <div>Loading...</div>;
  if (dataError || !sharedPageData) return <div>Error</div>;

  const userProfileData: UserProfile = sharedPageData.folder;
  const sharedCardData: Share[] = userProfileData.links.map(
    (cardDataList: Share) => ({
      ...cardDataList,
      time: updatedDuration(cardDataList.createdAt),
      date: updatedDate(cardDataList.createdAt),
    })
  );

  return (
    <>
      <SharedHeader userProfile={userProfileData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default SharedPage;
