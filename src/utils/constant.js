const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

export const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

export const ModalName = {
  add: {
    name: "폴더 추가",
    buttonColor: "blue",
    buttonName: "추가하기",
  },
  foldedrAdd: {
    name: "폴더에 추가",
    buttonColor: "blue",
    buttonName: "추가하기",
  },
  share: {
    name: "폴더 공유",
    buttonColor: "",
    buttonName: "",
  },
  change: {
    name: "폴더 이름 변경",
    buttonColor: "blue",
    buttonName: "변경하기",
  },
  delete: {
    name: "폴더 삭제",
    buttonColor: "red",
    buttonName: "삭제하기",
  },
  linkDelete: {
    name: "링크 삭제",
    buttonColor: "red",
    buttonName: "삭제하기",
  },
};
