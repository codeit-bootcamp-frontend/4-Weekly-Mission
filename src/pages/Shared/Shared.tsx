import useFetch from "utils/hooks/useFetch";
import SharedHeader from "./Header/SharedHeader";
import SharedMain from "./Main/ShaerdMain";
import { SHARED_API_URL } from "constants/url";
import { updatedDate, updatedDuration } from "utils/createdAt";
import { Share, User } from "constants/types";

interface FetchData {
  folder: {
    id?: number;
    name?: string;
    links: Share[];
  };
}

const Shared = () => {
  const {
    data: responseData,
    error: dataError,
    loading: dataLoading,
  } = useFetch<FetchData>(SHARED_API_URL);

  if (dataLoading) return <div>Loading...</div>;
  if (dataError || !responseData || !responseData.folder)
    return <div>Error</div>;

  const userProfileData: User = responseData?.folder;
  const sharedCardData: Share[] =
    responseData?.folder.links.map((cardDataList: Share) => ({
      ...cardDataList,
      time: updatedDuration(cardDataList.createdAt),
      date: updatedDate(cardDataList.createdAt),
    })) ?? undefined;

  return (
    <>
      <SharedHeader userData={userProfileData} />
      <SharedMain cardData={sharedCardData} />
    </>
  );
};

export default Shared;
