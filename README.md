<div align="center">
网课答题辅助脚本，基于 JavaScript 实现，仅供学习研究
</div>
⚠️ 免责声明
本项目仅用于前端技术学习研究，严禁用于网课、考试作弊。
使用本脚本产生的账号封禁、成绩作废等一切后果，由使用者自行承担。
若侵犯平台权益，请联系作者删除。
📖 项目简介
这是一个网页答题辅助工具仓库，通过浏览器加载 JS 脚本实现答题辅助。
适用于网页端在线答题场景，脚本通过控制台 / 地址栏注入运行。
📂 目录结构
plaintext
sdnsyh
├── KS/          # 核心脚本目录 GS.js
├── app/         # 应用页面文件
├── css/         # 样式资源
├── html/        # 子页面HTML
├── image/       # 静态图片资源
├── js/          # 工具脚本 links.js
├── index.html   # 项目首页
└── README.md    # 项目说明文档
🚀 使用方式
⚠️ 复制代码后务必删除代码开头的 = 符号
方式一：浏览器控制台运行（推荐）
打开答题网页，按 F12 打开开发者工具
切换到 Console（控制台）
粘贴执行代码，回车运行
javascript
运行
$.getScript('https://heiyelidebaiyang.github.io/sdnsyh/KS/GS.js')
方式二：地址栏运行
将下面代码复制到浏览器地址栏
删除开头 =，回车执行
javascript
运行
javascript:$.getScript('https://heiyelidebaiyang.github.io/sdnsyh/KS/GS.js')
❓ 常见问题
脚本不生效
确认页面完全加载完成后再执行脚本
检查是否删除代码开头的 =
关闭广告拦截、脚本拦截类浏览器插件重试
多选题识别异常
刷新答题页面，等待页面加载完毕，重新运行脚本。
📝 项目信息
作者：heiyelidebaiyang
主要语言：HTML
仓库地址：https://github.com/heiyelidebaiyang/sdnsyh
⭐ 支持
如果对你学习有帮助，欢迎给仓库点个 ⭐ Star
