# copy-paste-js 非常轻量的复制粘贴库

非常轻量的复制粘贴库（npm 包）

## 如何安装&使用

```bash
npm install @pigerla/copy-paste-js
```

## 使用

```js
import copyPaste from "@pigerla/copy-paste-js";

copyPaste(text).then((text) => {
  console && console.log("Copy successfully", text);
});
```

## 参数说明

```bash
text：待复制到剪切板的文本、字符串
```
