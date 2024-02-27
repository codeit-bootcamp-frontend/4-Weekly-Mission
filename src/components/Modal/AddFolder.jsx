import "../../index.css";
const CLOSE_BUTTON = "images/modalClose.png";

const AddFolder = ({ isOpen, closeModal }) => {
  return (
    <>
      <div
        id="first_div"
        style={{
          background: "rgba( 0, 0, 0, 0.4 )",
          display: isOpen ? "flex" : "none",
          width: "100wh",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          id="second_div"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "3.5rem 4rem",
            position: "relative",
            width: "36rem",
            height: "24rem",
            background: "#FFFFFF",
            borderRadius: "1.5rem",
            gap: "1.5rem",
            zIndex: "1",
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "1.6rem",
              right: "1.6rem",
              width: "2.4rem",
              height: "2.4rem",
            }}
            onClick={closeModal}
          >
            <img src={CLOSE_BUTTON} alt="닫기 버튼" />
          </button>
          <div
            id="title"
            style={{
              width: "28rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2.4rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "#373740",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                폴더 추가
              </p>
            </div>
            <div>
              <input
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  width: "28rem",
                  padding: "1.8rem 1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "8px",
                  border: "1px solid var(--Linkbrary-gray20, #CCD5E3)",
                  background: "var(--Linkbrary-white, #FFF)",
                }}
                placeholder="내용 입력"
              />
            </div>
          </div>
          <div>
            <button
              style={{
                width: "28rem",
                background: "linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)",
                padding: "1.6rem 2rem",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  color: "#F5F5F5",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                }}
              >
                추가하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFolder;
