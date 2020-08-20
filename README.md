# copy-paste-js 非常轻量的复制粘贴库

非常轻量的复制粘贴库（npm 包）
A very light-weight copy-paste function code

## Install 安装

```bash
npm install @pigerla/copy-paste-js
```

## Usage 使用

```js
import copyPaste from "@pigerla/copy-paste-js";

copyPaste(text).then((text) => {
  console && console.log("Copy successfully", text);
});
```

## Parameter 参数说明

```bash
text：the plain text which need to copy 待复制到剪切板的文本、字符串
```
