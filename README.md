# Circle Buttons 炫彩动感按钮

## 项目介绍
这是一个基于React和Vite构建的炫彩动感圆形按钮组件项目。项目展示了一系列具有独特动画效果的交互式圆形按钮，包括呼吸灯效果、悬浮放大、旋转动画等多种视觉效果。

## 功能特点
- 🌈 炫彩的光影效果
- 💫 平滑的动画过渡
- 🎯 响应式的交互设计
- 🎨 可自定义的样式
- 🔄 旋转动画效果
- 💡 呼吸灯效果
- 🖱️ 悬浮放大效果

## 技术栈
- React 19
- Vite 6
- CSS3 动画
- ESLint

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式运行
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 项目结构
```
circle-buttons/
├── src/
│   ├── App.jsx        # 主应用组件
│   ├── App.css        # 按钮样式和动画
│   ├── main.jsx       # 应用入口
│   └── assets/        # 静态资源
├── public/            # 公共资源
└── package.json       # 项目配置
```

## 动画效果说明
- **呼吸动画**: 按钮会有规律地进行缩放，营造呼吸灯的效果
- **悬浮效果**: 鼠标悬浮时按钮会放大并产生光晕
- **旋转动画**: 可以触发按钮的旋转效果
- **光影效果**: 使用CSS阴影和模糊效果创造立体感

## 自定义样式
按钮的样式可以通过修改 `App.css` 中的相关CSS变量进行自定义：
- `--x` 和 `--y`: 控制按钮的位置
- `box-shadow`: 调整光影效果
- `animation`: 修改动画时间和效果

## 浏览器支持
- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项
- 确保使用最新版本的Node.js
- 建议使用现代浏览器以获得最佳效果
- CSS变量的浏览器兼容性要求

## 贡献指南
欢迎提交Issue和Pull Request来帮助改进项目。

## 许可证
MIT License
