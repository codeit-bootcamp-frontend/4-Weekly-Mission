import tokenSetting from "../common/token/tokenSetting.js";

tokenSetting.periodicallyRemoveValue('user', 60000 * 30);//60000 = 1분, 30분 주기로 삭제