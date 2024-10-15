# vue-mini-project

⚠️ 注意：将此项目导入微信开发者工具时请选择项目根目录而非 `dist` 目录。

更多信息请访问官方文档：[vuemini.org](https://vuemini.org)

## 依赖安装

```sh
pnpm install
```

## 本地开发

```sh
pnpm dev
```

## 生产构建

```sh
pnpm build
```

## 代码格式化

```sh
pnpm format
```

## TS 代码质量检测

```sh
pnpm lint:script
```

## CSS 代码质量检测

```sh
pnpm lint:style
```

## 类型检测

```sh
pnpm type-check
```

## Issues
```sh
WARN  Issues with peer dependencies found
.
└─┬ @rollup/plugin-commonjs 28.0.0
  └─┬ fdir 6.4.0
    └── ✕ unmet peer picomatch@"^3 || ^4": found 2.3.1

fixed package.json

"pnpm": {
  "overrides": {
    "picomatch": "^4.0.0"
  }
}
```