import { useEffect, useState } from "react";
import { BASED_URL } from "../../../constnats/constant";
import * as S from "./SharedHeaderStyle";

interface Owner {
  profileImageSource: string;
  name: string;
}

interface Data {
  name: string;
  owner: Owner;
}

const SharedHeader = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASED_URL}/sample/folder`);
        const responseData = await response.json();
        const folderData: Data = responseData.folder;
        setData(folderData);
      } catch (error) {
        console.error("Fetch Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Image src={data?.owner.profileImageSource} />
      <S.Owner>{data?.owner.name}</S.Owner>
      <S.Folder>{data?.name}</S.Folder>
    </S.Container>
  );
};

export default SharedHeader;
