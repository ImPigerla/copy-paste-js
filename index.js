// 复制粘贴
var execCommandCopy = function (text) {
  return new Promise(function (resolve, reject) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      if (successful) {
        resolve(text);
      } else {
        reject(new Error('document.execCommand("copy") fail'));
      }
    } catch (err) {
      reject(err);
    }

    document.body.removeChild(textArea);
  });
};

export default function copyPaste(text) {
  return navigator.clipboard
    ? navigator.clipboard.writeText(text)
    : execCommandCopy(text);
}
