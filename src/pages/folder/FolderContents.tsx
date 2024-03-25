import { useEffect, useState, useRef } from "react";
import { folderLinksData } from "../../apis/apiFolder";
import { useRecoilState, useSetRecoilState } from "recoil";
import { folderLinkContents, searchContents } from "../../store/store";
import { timeChange, dateChange } from "../../dateFunction";
import styled from "styled-components";
import KebabModal from "./kebabModal";
import { ModalProps } from "./type";

interface Props {
  id: number | string;
  title: string;
  image_source?: string;
  created_at: string;
  url: string;
  description: string;
}
interface Contents {
  data: Props[];
}

const FolderNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 1.6rem;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 32px;
    font-size: 1.4rem;
  }
`;

function FolderContents({
  setName,
  setOpenModal,
  setButtonColor,
  setButtonName,
  modalName,
}: ModalProps) {
  const setBasicData = useSetRecoilState<Contents>(folderLinkContents);
  const [contents, setContents]: any = useRecoilState(searchContents);
  useEffect(() => {
    folderLinksData("all")
      .then((data) => {
        setBasicData(data.data);
        setContents(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 케밥 스크립트
  const [kebabOpen, setKebabOpen] = useState<string | number>("");
  const kebabRef = useRef<HTMLImageElement>(null);
  const handleKebab = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number | string
  ) => {
    event.preventDefault();
    setTimeout(() => {
      if (kebabOpen !== id) {
        setKebabOpen(id);
      } else {
        setKebabOpen("");
      }
    });
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        kebabOpen !== "" &&
        !kebabRef.current.contains(event.target as Node)
      ) {
        setKebabOpen("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [kebabOpen]);

  // link 전역변수 설정
  return (
    <article>
      {contents?.length === 0 ? (
        <FolderNoData>저장된 링크가 없습니다.</FolderNoData>
      ) : (
        <ul className="contentsBox">
          {contents?.map(
            ({
              id,
              title,
              image_source,
              created_at,
              url,
              description,
            }: Props) => {
              return (
                <li key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <div className="imgBox">
                      <img
                        className="contentsImg"
                        src={
                          image_source
                            ? image_source
                            : `${process.env.PUBLIC_URL}/images/noImage.jpg`
                        }
                        alt={title}
                      />
                      <button type="button">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/star.svg`}
                          alt="즐겨찾기 추가"
                        />
                      </button>
                    </div>
                    <div className="textBox">
                      <button
                        onClick={(event) => handleKebab(event, id)}
                        type="button"
                      >
                        <img
                          ref={kebabRef}
                          src={`${process.env.PUBLIC_URL}/images/kebab.png`}
                          alt="더보기"
                        />
                      </button>
                      <span>{timeChange(created_at)}</span>
                      <p className="description">{description}</p>
                      <p className="date">{dateChange(created_at)}</p>
                      {kebabOpen === id ? (
                        <KebabModal
                          url={url}
                          setName={setName}
                          setOpenModal={setOpenModal}
                          setButtonColor={setButtonColor}
                          setButtonName={setButtonName}
                          modalName={modalName}
                        />
                      ) : null}
                    </div>
                  </a>
                </li>
              );
            }
          )}
        </ul>
      )}
    </article>
  );
}

export default FolderContents;
