# Vue（3.x）动态引入组件demo

把组件单独打包，然后线上通过ajax请求组件的js资源，然后通过内置的`<component></component>`组件来渲染。

支持`setup`语法。

该示例使用`CDN`方式引入`vue`。

组件目录：components

启动主应用：

```bash
npm run serve
```

打包主应用：

```bash
npm run build
```

打包组件：

```bash
npm run buildComponents
```

