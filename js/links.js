const navLinks = [
    {
        category: '🛠️ 常用工具',
        links: [
            { title: '百度搜索', desc: '百度一下，你就知道', icon: '🔍', url: 'https://www.baidu.com' },
            { title: '公众号编辑器', desc: '排版编辑工具', icon: '📝', url: 'editor.html' },
            { title: 'TinyPNG', desc: '图片在线压缩', icon: '🖼️', url: 'https://tinypng.com' },
            { title: 'JSON格式化', desc: '在线校验与格式化', icon: '🔧', url: 'https://www.json.cn' }
        ]
    },
    {
        category: '💻 开发资源',
        links: [
            { title: '我的 GitHub', desc: 'heiyelidebaiyang', icon: '🐙', url: 'https://github.com/heiyelidebaiyang' },
            { title: 'Stack Overflow', desc: '程序员问答社区', icon: '📚', url: 'https://stackoverflow.com' },
            { title: 'MDN 文档', desc: 'Web 开发权威参考', icon: '📖', url: 'https://developer.mozilla.org/zh-CN/' },
            { title: 'Can I Use', desc: '浏览器兼容性查询', icon: '🌐', url: 'https://caniuse.com' }
        ]
    },
    {
        category: '📮 社交媒体',
        links: [
            { title: '微信', desc: 'WeChat 官方', icon: '💬', url: 'https://weixin.qq.com' },
            { title: '知乎', desc: '有问题，上知乎', icon: '❓', url: 'https://www.zhihu.com' }
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