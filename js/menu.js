(function() {
    const page = document.body.dataset.page || 'home';
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const menuItems = [
        { id: 'home',     href: '../index.html',  icon: '🏠', text: '首页' },
        { id: 'software', href: 'software.html', icon: '📱', text: '软件下载' },
        { id: 'github',   href: 'github.html',   icon: '🔗', text: '快捷导航' },
        { id: 'author',   href: 'author.html',   icon: '✍️', text: '作者的话' },
        { id: 'contact',  href: 'contact.html',  icon: '💬', text: '联系作者' }
    ];

    let html = `<img src="../image/logo.png" alt="Logo" class="sidebar-logo">
                <div class="sidebar-brand">
                    <div class="brand-main">云雪星球</div>
                    <div class="brand-sub">白羊的小站</div>
                </div>`;

    menuItems.forEach(item => {
        const activeClass = (page === item.id) ? ' active' : '';
        html += `<a class="nav-item${activeClass}" href="${item.href}">
                    <span class="nav-icon">${item.icon}</span> ${item.text}
                 </a>`;
    });

    sidebar.innerHTML = html;
})();