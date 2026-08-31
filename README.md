# 云雪星球 · 白羊的小站

> 🧩 云雪星球-白羊小站，基于 JavaScript / jQuery 实现，仅供前端技术学习研究使用。

[![GitHub stars](https://img.shields.io/github/stars/heiyelidebaiyang/sdnsyh)](https://github.com/heiyelidebaiyang/sdnsyh/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heiyelidebaiyang/sdnsyh/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/heiyelidebaiyang/sdnsyh)](https://github.com/heiyelidebaiyang/sdnsyh/issues)
[![GitHub forks](https://img.shields.io/github/forks/heiyelidebaiyang/sdnsyh)](https://github.com/heiyelidebaiyang/sdnsyh/network)

---

## ⚠️ 免责声明（必读）

**本项目仅用于前端开发技术学习与浏览器脚本调试研究，严禁用于各类网课考试、职业资格认证、学业测评等场景的作弊行为。**

- 使用本脚本产生的账号封禁、成绩作废、法律纠纷等一切后果，**由使用者自行承担**。
- 若本脚本侵犯任何平台的合法权益，请联系作者，将在收到通知后第一时间删除。

---

## 📖 项目简介

这是一个轻量级的网页答题辅助工具仓库，通过浏览器加载 JavaScript 脚本实现答题界面的辅助交互。适用于 PC 端网页在线答题场景，脚本通过浏览器**开发者工具控制台**或**地址栏**注入运行，无需安装任何客户端软件。

### ✨ 核心特性
- **即开即用**：无需下载安装，复制代码即可运行。
- **轻量注入**：单文件脚本，依赖 jQuery（常见平台已内置）。
- **界面友好**：运行后自动在页面生成悬浮操作按钮。

---

## 📁 目录结构

```tree
sdnsyh/
├── KS/                    # 核心脚本目录
│   └── GS.js              # 主逻辑脚本（答题辅助引擎）
├── app/                   # 应用功能页面
├── css/                   # 样式资源文件
├── html/                  # 辅助子页面
├── image/                 # 静态图片素材
├── js/                    # 工具类脚本
│   └── links.js           # 外部链接配置
├── index.html             # 项目导航首页
└── README.md              # 项目说明文档
```
---


## 🚀 快速开始（使用方式）
⚠️ 特别注意：复制下方代码后，务必检查并删除代码开头的 = 符号（如果存在的话），否则会导致执行失败！

### 方式一：浏览器控制台运行（推荐）
1. 打开目标答题网页，按下键盘上的 **`F12`** 键（或右键点击页面选择“检查”）打开开发者工具。
2. 在开发者工具面板中，切换到 **`Console`（控制台）** 选项卡。
3. 在控制台输入框中粘贴以下代码，然后按 **`Enter`（回车）** 执行：
```
javascript$.getScript('https://heiyelidebaiyang.github.io/sdnsyh/KS/GS.js')
```
### 方式二：浏览器地址栏运行
1. 在浏览器当前答题页面的地址栏中，原有地址后。
2. 将以下代码完整复制并粘贴到地址栏中。
3. 按 Enter **`Enter`（回车）** 执行：
```
javascript:$.getScript('https://heiyelidebaiyang.github.io/sdnsyh/KS/GS.js')
```
---

## 👤 项目信息

- **项目作者**：[@heiyelidebaiyang](https://github.com/heiyelidebaiyang)
- **开源协议**：MIT License（仅供学习参考，商业用途请咨询作者）
- **主要语言**：JavaScript / HTML
- **官方仓库**：[云雪星球仓库](https://github.com/heiyelidebaiyang/sdnsyh)
- **官方网址**：[云雪星球](https://heiyelidebaiyang.github.io/sdnsyh/)
---

## ⭐ 支持与反馈

如果您觉得这个项目对您的前端学习有一定参考价值，欢迎给这个仓库点个 **Star** 🌟，这是对作者最大的鼓励！

- 发现 Bug 或有改进建议？请提交 [Issue](https://github.com/heiyelidebaiyang/sdnsyh/issues)。
- 如有其他问题，欢迎通过 GitHub 私信联系作者。
