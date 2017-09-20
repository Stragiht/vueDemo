
export default {
    init (msgId) {
       let message = JSON.parse(sessionStorage.getItem('inforMession'));
       let arr = msgId.split(".");
      try {
        for (let i = 0; i < arr.length - 1; i++) {
          message = message[arr[i]];
        }
        message = message[arr[arr.length - 1]];
        if (message !== null && message !== undefined && message !== '') {
          message = utilService.replaceEmptyStr(message, "未知消息ID：" + msgId);
        }
      } catch (exception) {
        message = utilService.replaceEmptyStr(message, "未知消息ID：" + msgId);
      }
    }
}