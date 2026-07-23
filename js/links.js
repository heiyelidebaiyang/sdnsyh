const navLinks = [
    {
        category: '🛠️ 常用工具',
        links: [
            { title: '公众号编辑器', desc: '排版编辑工具', icon: '📝', url: '../html/tools/editor.html' },
            { title: 'MD5 加密解密', desc: 'MD5 哈希计算', icon: '🔑', url: '../html/tools/MD5.html' },
            { title: 'PDF工具箱1', desc: '7项功能', icon: '📄', url: '../html/tools/PDF-tools1.html' },
            { title: 'PDF工具箱2', desc: '拆分书籍对开页', icon: '📖', url: '../html/tools/PDF-tools2.html' },
            { title: 'PDF工具箱3', desc: '交替合并', icon: '🔢', url: '../html/tools/PDF-tools3.html' },
            { title: 'TinyPNG', desc: '图片在线压缩', icon: '🖼️', url: 'https://tinypng.com' },
            { title: 'JSON格式化', desc: '在线校验与格式化', icon: '🔧', url: 'https://www.json.cn' }，
            { title: '试卷净化工具', desc: '纯本地', icon: '🔧', url: '../html/tools/shijuan.html' }
        ]
    },
    {
        category: '💻 开发资源',
        links: [
            { title: '我的 GitHub', desc: 'heiyelidebaiyang', icon: '🐙', url: 'https://github.com/heiyelidebaiyang' },
            { title: '博客园', desc: '橘白的博客', icon: '📚', url: 'https://www.cnblogs.com/jubai' },
            { title: 'MDN 文档', desc: 'Web 开发权威参考', icon: '📖', url: 'https://developer.mozilla.org/zh-CN/' },
            { title: 'Can I Use', desc: '浏览器兼容性查询', icon: '🌐', url: 'https://caniuse.com' }
        ]
    },
    {
        category: '📮 社交媒体',
        links: [
            { title: '我的公众号', desc: '云雪星球', icon: '💬', url: '../image/gzh_qr.png' },
            { title: '我的知乎', desc: '有问题，上知乎', icon: '❓', url: 'https://www.zhihu.com' }
        ]
    }
];

function renderNavLinks(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    navLinks.forEach(section => {
        html += `<div class="section-title">${section.category}</div>
                 <div class="nav-grid">`;
        section.links.forEach(link => {
            html += `<a href="${link.url}" target="_blank" rel="noopener" class="nav-card">
                        <span class="nav-card-icon">${link.icon}</span>
                        <span class="nav-card-title">${link.title}</span>
                        <span class="nav-card-desc">${link.desc}</span>
                     </a>`;
        });
        html += `</div>`;
    });
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavLinks('navLinksContainer');
});
